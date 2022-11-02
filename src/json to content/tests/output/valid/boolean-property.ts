const input = {
  type: 'structure',
  attributes: {
    foo: {
      type: 'boolean',
      value: {
        type: 'static',
        value: true,
      },
    },
    bar: {
      type: 'boolean',
      value: {
        type: 'static',
        value: false,
      },
    },
  },
};

export default input;
