import JsonSpitter from './helpers/JsonSpitter';
import ObjectToContentParser from './helpers/ObjectToContentParser';

export type StackValue = (string)[];
export type NodeValue = string | number | null | Array<NodeValue> | { [key: string]: NodeValue };

export default class ObjectToContent {
  private readonly input: { [key: string]: any } = {};

  private output: { [key: string]: any } | undefined;

  private stack: StackValue = [];

  constructor(input: string) {
    if (ObjectToContent.isValidInput(input)) {
      this.input = JSON.parse(input);
    } else {
      throw new Error('The input isn\'t a valid JSON.');
    }
  }

  private static isValidInput(input: string) {
    try {
      JSON.parse(input);

      return true;
    } catch (e) {
      return false;
    }
  }

  public parse() {
    const input = this.getInput();
    if (Object.keys(input)
      .includes('payload')) {
      throw new Error('The property "payload" isn\'t allowed.');
    }

    const output: { [key: string]: any } = {};

    if (ObjectToContent.isObject(input)) {
      let node: string;

      this.addToStack(...Object.keys(input));

      while (this.getStack().length > 0) {
        node = this.popStack() as unknown as string;
        const value = input[node];

        const result = ObjectToContentParser.parseValue(value);
        if (result !== null) {
          output[node] = result;
        }
      }

      const result = {
        type: 'structure',
        attributes: output,
      };

      this.setOutput(result);

      return result;
    }

    return ObjectToContentParser.parseValue(input);
  }

  public toJson() {
    let output = this.getOutput();

    if (output === undefined) {
      const input = this.getInput();

      if (typeof input === 'object') {
        this.setOutput(this.parse());
      }
    }

    output = this.getOutput();
    if (output) {
      JsonSpitter.spit(output)
        .then();
    } else {
      throw new Error('To get a output you need to pass a input.');
    }
  }

  private static isObject(variable: NodeValue) {
    const type = ObjectToContentParser.getVarType(variable);
    return type === 'object';
  }

  private setOutput(output: { [key: string]: any }) {
    this.output = output;
  }

  private getOutput() {
    return this.output;
  }

  private getInput() {
    return this.input;
  }

  private addToStack(...values: string[]) {
    this.stack.push(...values);
  }

  private getStack() {
    return this.stack;
  }

  private popStack() {
    return this.stack.shift();
  }
}
