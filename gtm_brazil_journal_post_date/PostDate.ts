function createDate(hours: number, days: number, months: number, years: number) {
  const date = new Date();

  date.setHours(date.getHours() - hours);
  date.setDate(date.getDate() - days);
  date.setMonth(date.getMonth() - months);
  date.setFullYear(date.getFullYear() - years);

  return date;
}

function subtractDate(uty: string, quantity: number) {
  const unity = uty.replace(/ê/g, 'e');
  let hours = 0;
  let days = 0;
  let months = 0;
  let years = 0;

  switch (unity) {
    case 'hora':
    case 'horas':
      hours += quantity;
      break;

    case 'dia':
    case 'dias':
      days += quantity;
      break;

    case 'semana':
    case 'semanas':
      days += quantity * 7;
      break;

    case 'mes':
    case 'meses':
      months += quantity;
      break;

    case 'ano':
    case 'anos':
      years += quantity;
      break;

    default:
  }

  return createDate(hours, days, months, years);
}

function parseOldDate(date: string) {
  const [quantity, unity] = date.split(' ');
  const time = subtractDate(unity, Number(quantity));
  return {
    day: time.getDate(),
    month: time.getMonth(),
    year: time.getFullYear(),
  };
}

function monthToNumber(month: string) {
  const formatedMonth = month.replace(/ç/g, 'c');
  const months: { [key: string]: number } = {
    janeiro: 0,
    fevereiro: 1,
    marco: 2,
    abril: 3,
    maio: 4,
    junho: 5,
    julho: 6,
    agosto: 7,
    setembro: 8,
    outubro: 9,
    novembro: 10,
    dezembro: 11,
  };
  return months[formatedMonth] || 0;
}

function parseNewDate(str: string) {
  const date = str.toLowerCase()
    .replace(/ de/g, '')
    .split(' ');

  if (date.length !== 3) {
    return null;
  }

  const day = Number(date[0]);
  const month = date[1];
  const year = Number(date[2]);

  const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  if (isNaN(day) || isNaN(year) || !months.includes(month)) {
    return null;
  }

  return {
    day,
    month: monthToNumber(date[1]),
    year,
  };
}

function processDate(date: string) {
  if (!date.includes(' de ') && date.includes('atrás')) {
    return parseOldDate(date);
  }

  return parseNewDate(date);
}

export default function parseDate() {
  const element = document.querySelector('time.post-time') as HTMLParagraphElement;

  if (element === null) {
    return null;
  }

  const text = element.innerText;
  const dateProps = processDate(text);

  if (dateProps === null) {
    return null;
  }

  const date = new Date();

  const {
    day,
    month,
    year,
  } = dateProps;

  if (day === undefined || month === undefined || year === undefined) {
    return null;
  }
  date.setFullYear(year, month, day);
  return date.toString();
}
