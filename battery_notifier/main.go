package main

import (
	"fmt"
	"github.com/gen2brain/beeep"
	"os"
	"strconv"
	"strings"
	"time"
)

const (
	lowThreshold  = 40
	highThreshold = 80
	checkInterval = 60 * time.Second
)

// errors range from notification icon not found to D-bus failures, it's nice to log
func appendLog(log string) {
	file, err := os.OpenFile("~/.battery_notifier.log", os.O_CREATE|os.O_APPEND, 0644)

	if err != nil {
		fmt.Println(err)
	}

	defer file.Close()

	wb, err := file.Write([]byte(log))

	if err != nil {
		fmt.Println(err)
	}

	if wb != len([]byte(log)) {
		fmt.Printf("Unexpected unwritten bytes, %d bytes written out of \"%s\"", wb, log)
	}
}

func readBatteryPercentage() (int, error) {
	data, err := os.ReadFile("/sys/class/power_supply/BAT0/capacity")

	if err != nil {
		return 0, err
	}

	percentStr := strings.TrimSpace(string(data))
	percent, err := strconv.Atoi(percentStr)

	if err != nil {
		return 0, err
	}

	return percent, nil
}

func readBatteryStatus() (string, error) {
	data, err := os.ReadFile("/sys/class/power_supply/BAT0/status")

	if err != nil {
		return "", err
	}

	return strings.TrimSpace(string(data)), nil
}

func notify(message string) {
	err := beeep.Notify("[BATTERY ALERT]", message, "")

	if err != nil {
		appendLog(fmt.Sprintf("Error sending notification: %s", err))
	}
}

func main() {
	notify("Battery alert is running...")

	for {
		percent, err := readBatteryPercentage()
		if err != nil {
			appendLog(fmt.Sprintf("Error reading battery percentage: %s", err))
			time.Sleep(checkInterval)
			continue
		}

		status, err := readBatteryStatus()

		if err != nil {
			appendLog(fmt.Sprintf("Error reading battery status: %s", err))
			time.Sleep(checkInterval)
			continue
		}

		if percent >= highThreshold && status == "Charging" {
			notify(fmt.Sprintf("Battery is at %d%% — please unplug the charger.", percent))
		} else if percent <= lowThreshold && status == "Discharging" {
			notify(fmt.Sprintf("Battery is at %d%% — please plug in the charger.", percent))
		}

		time.Sleep(checkInterval)
	}
}
