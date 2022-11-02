import ObjectToContent from '../ObjectToContent';
import input from '../input';
import output from '../output';

describe('The JsonToContent class', () => {
  describe('with a invalid json', () => {
    it('should throw a error', () => {
      expect(() => new ObjectToContent(input.invalidJson))
        .toThrowError('The input isn\'t a valid JSON.');
    });
  });

  describe('with a valid json', () => {
    it('should throw a error if payload is provided', () => {
      const jsonInput = JSON.stringify(input.payloadProperty);
      const parser = new ObjectToContent(jsonInput);

      expect(() => {
        parser.parse();
      })
        .toThrowError('The property "payload" isn\'t allowed.');
    });

    it.each([
      ['textual', input.textProperty, output.textProperty],
      ['number', input.numberProperty, output.numberProperty],
      ['null', input.nullProperty, output.nullProperty],
      ['boolean', input.booleanProperty, output.booleanProperty],
      ['empty structure', input.emptyStructureProperty, output.emptyStructureProperty],
      ['nested structure', input.nestedStructureProperty, output.nestedStructureProperty],
      ['empty list', input.emptyListProperty, output.emptyListProperty],
      ['nested list', input.nestedListProperty, output.nestedListProperty],
    ])('should parse a %s property', (
      // eslint-disable-next-line no-unused-vars
      type,
      result,
      expected,
    ) => {
      const jsonInput = JSON.stringify(result);
      const jsonOutput = expected;

      const parser = new ObjectToContent(jsonInput);

      expect(parser.parse())
        .toStrictEqual(jsonOutput);
    });

    it('should parse a nested structure property', () => {
      const jsonInput = JSON.stringify(input.nestedStructureProperty);
      const parser = new ObjectToContent(jsonInput);

      expect(parser.parse())
        .toStrictEqual(output.nestedStructureProperty);
    });

    it('now parse this, sucker', () => {
      const jsonInput = JSON.stringify(input.plansCards);
      const parser = new ObjectToContent(jsonInput);

      expect(parser.parse())
        .toStrictEqual(output.plansCards);
    });
  });
});
