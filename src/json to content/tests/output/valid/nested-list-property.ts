const input = {
  type: 'structure',
  attributes: {
    foo: {
      type: 'list',
      items: [
        {
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
        {
          type: 'structure',
          attributes: {
            foo: {
              type: 'text',
              value: {
                type: 'static',
                value: 'foo',
              },
            },
          },
        },
      ],
    },
  },
};

export default input;
