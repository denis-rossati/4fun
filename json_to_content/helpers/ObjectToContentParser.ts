import ObjectToContent, { NodeValue } from '../ObjectToContent';

class ObjectToContentParser {
  public static getVarType(variable: any) {
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

  public static parseValue(value: NodeValue) {
    const type = ObjectToContentParser.getVarType(value);

    const operations: { [key: string]: Function } = {
      string: ObjectToContentParser.parseString,
      number: ObjectToContentParser.parseNumber,
      null: ObjectToContentParser.parseNull,
      boolean: ObjectToContentParser.parseBool,
      array: ObjectToContentParser.parseArray,
      object: ObjectToContentParser.parseObj,
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

  private static parseNull() {
    return null;
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
      items: value.map((nodeValue) => ObjectToContentParser.parseValue(nodeValue)),
    };
  }
}

export default ObjectToContentParser;
