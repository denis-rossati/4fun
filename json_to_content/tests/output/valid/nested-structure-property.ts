const input = {
  type: 'structure',
  attributes: {
    foo: {
      type: 'structure',
      attributes: {
        foo: {
          type: 'text',
          value: {
            type: 'static',
            value: 'foo',
          },
        },
        bar: {
          type: 'list',
          items: [
            {
              type: 'text',
              value: {
                type: 'static',
                value: 'bar',
              },
            },
          ],
        },
        baz: {
          type: 'boolean',
          value: {
            type: 'static',
            value: true,
          },
        },
        bax: {
          type: 'structure',
          attributes: {
            foo: {
              type: 'text',
              value: {
                type: 'static',
                value: 'bar',
              },
            },
          },
        },
      },
    },
  },
};

export default input;
