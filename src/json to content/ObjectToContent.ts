import JsonSpitter from './helpers/JsonSpitter';

type StackValue = (string)[];
type NodeValue = string | number | null | Array<NodeValue> | { [key: string]: NodeValue };

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

        const result = ObjectToContent.parseValue(value);
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

    return ObjectToContent.parseValue(input);
  }

  public toJson() {
    const output = this.getOutput();

    if (output !== undefined) {
      JsonSpitter.spit(output)
        .then();
    } else {
      throw new Error('First you need to parse a object.');
    }
  }

  private static getVarType(variable: any) {
    switch (true) {
      case Object.prototype.toString.call(variable) === '[object Object]':
        return 'object';

      case Array.isArray(variable):
        return 'array';

      case variable === null:
        return 'null';

      default:
        return typeof variable;
    }
  }

  private static parseValue(value: NodeValue) {
    const type = ObjectToContent.getVarType(value);

    const operations: { [key: string]: Function } = {
      string: ObjectToContent.parseString,
      number: ObjectToContent.parseNumber,
      null: ObjectToContent.parseNull,
      boolean: ObjectToContent.parseBool,
      array: ObjectToContent.parseArray,
      object: ObjectToContent.parseObj,
    };

    return operations[type](value);
  }

  private static parseString(value: string) {
    return {
      type: 'text',
      value: {
        type: 'static',
        value,
      },
    };
  }

  private static parseNumber(value: number) {
    return {
      type: 'number',
      value: {
        type: 'static',
        value,
      },
    };
  }

  private static parseBool(value: boolean) {
    return {
      type: 'boolean',
      value: {
        type: 'static',
        value,
      },
    };
  }

  private static parseObj(value: { [key: string]: NodeValue }) {
    const structure = {
      type: 'structure',
      attributes: {},
    };

    Object.keys(value)
      .forEach((key) => {
        if (value[key] !== null) {
          const nestedClass = new ObjectToContent(JSON.stringify(value[key]));

          // @ts-ignore -> there's no string indexing empty objects.
          structure.attributes[key] = nestedClass.parse();
        }
      });

    return structure;
  }

  private static parseArray(value: Array<NodeValue>) {
    return {
      type: 'list',
      items: value.map((nodeValue) => ObjectToContent.parseValue(nodeValue)),
    };
  }

  private static isObject(variable: NodeValue) {
    const type = ObjectToContent.getVarType(variable);
    return type === 'object';
  }

  private static parseNull() {
    return null;
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
