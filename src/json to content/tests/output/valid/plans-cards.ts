const input = {
  type: 'structure',
  attributes: {
    content: {
      type: 'list',
      items: [
        {
          type: 'structure',
          attributes: {
            card: {
              type: 'structure',
              attributes: {
                plan: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'na-cidade',
                  },
                },
                border: {
                  type: 'structure',
                  attributes: {
                    display: {
                      type: 'boolean',
                      value: {
                        type: 'static',
                        value: true,
                      },
                    },
                    color: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '#F7A600',
                      },
                    },
                  },
                },
                cta: {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Assinar plano',
                      },
                    },
                    sku: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '2000244',
                      },
                    },
                    color: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '#F7A600',
                      },
                    },
                  },
                },
                price: {
                  type: 'structure',
                  attributes: {
                    integer: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '30',
                      },
                    },
                    cents: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '90',
                      },
                    },
                    currency: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'R$',
                      },
                    },
                    obs: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'por m??s',
                      },
                    },
                  },
                },
                flag: {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '#EsquentaBlackFriday',
                      },
                    },
                    color: {
                      type: 'structure',
                      attributes: {
                        text: {
                          type: 'text',
                          value: {
                            type: 'static',
                            value: '#ffffff',
                          },
                        },
                        bg: {
                          type: 'text',
                          value: {
                            type: 'static',
                            value: '#F7A600',
                          },
                        },
                      },
                    },
                  },
                },
                title: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'Cidade',
                  },
                },
                subtitle: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'Oferta exclusiva: pague 1 e ganhe 12 meses gr??tis + assist??ncia auto 24h!',
                  },
                },
                colorSchema: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'yellow',
                  },
                },
              },
            },
            benefits: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Dispon??vel em +4.000 lugares;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Assist??ncia auto 24h:',
                      },
                    },
                    bullet: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '<ul><li>Chaveiro;</li><li>Troca de pneus;</li><li>Pane seca;</li><li>Recarga de bateria;</li><li>Reboque.</li></ul>',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Cashback:',
                      },
                    },
                    bullet: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '<ul><li>Abastecimento;</li><li>Sem Parar Shop (+200 lojas).</li></ul>',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
              ],
            },
            where: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+1400 postos de combust??veis;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'fuel-tank-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+700 drive-thrus;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'drive-thru-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+130 lava-r??pidos;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'car-wash-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+2100 mercados, shoppings,  estacionamentos, aeroportos e hospitais.',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'shopping-icon',
                      },
                    },
                  },
                },
              ],
            },
            info: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Formas de pagamento',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            icon: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'credit-card-icon',
                              },
                            },
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Cart??o de cr??dito',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Ades??o',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Gr??tis.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Manuten????o',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Sem cobran??a.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Uso fora da cobertura',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'A partir do 3?? dia de uso do ped??gio, haver?? um acr??scimo de R$ 9,00 na mensalidade.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        {
          type: 'structure',
          attributes: {
            card: {
              type: 'structure',
              attributes: {
                plan: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'flex-pedagio',
                  },
                },
                border: {
                  type: 'structure',
                  attributes: {
                    display: {
                      type: 'boolean',
                      value: {
                        type: 'static',
                        value: true,
                      },
                    },
                    color: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '#0093B8',
                      },
                    },
                  },
                },
                cta: {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Assinar plano',
                      },
                    },
                    sku: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '2000130',
                      },
                    },
                    color: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '#0093B8',
                      },
                    },
                  },
                },
                price: {
                  type: 'structure',
                  attributes: {
                    integer: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '23',
                      },
                    },
                    cents: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '90',
                      },
                    },
                    currency: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'R$',
                      },
                    },
                    obs: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'no m??s que usar',
                      },
                    },
                  },
                },
                title: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'Flex Ped??gio',
                  },
                },
                subtitle: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'Cobertura em 100% dos ped??gios do pa??s, e s?? paga quando utilizar o servi??o.',
                  },
                },
                colorSchema: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'blue',
                  },
                },
              },
            },
            benefits: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Pague a mensalidade s?? no m??s que usar;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Cashback:',
                      },
                    },
                    bullet: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '<ul><li>Sem Parar Shop (+200 lojas).</li></ul>',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
              ],
            },
            where: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '100% dos ped??gios;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'toll-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Com o adicional de R$13,00 voc?? ter?? acesso a benef??cios, como:',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+1400 postos de combust??veis;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'fuel-tank-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+700 drive-thrus;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'drive-thru-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+130 lava-r??pidos;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'car-wash-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+2100 mercados, shoppings,  estacionamentos, aeroportos e hospitais.',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'shopping-icon',
                      },
                    },
                  },
                },
              ],
            },
            info: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Formas de pagamento',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            icon: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'credit-card-icon',
                              },
                            },
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Cart??o de cr??dito',
                              },
                            },
                          },
                        },
                        {
                          type: 'structure',
                          attributes: {
                            icon: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'debit-card-icon',
                              },
                            },
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'D??bito em conta',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Ades??o',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Gr??tis.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Manuten????o',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Ficou 90 dias sem usar? Ser?? cobrada a tarifa de manuten????o de R$ 9,90 at?? que volte a utilizar.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Ap??s 12 meses a mensalidade ser?? de R$ 23,90 no m??s que usar o servi??o.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Uso fora da cobertura',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Caso voc?? utilize sua tag nos drive-thrus, postos de abastecimento, estacionamentos e lava-r??pidos, haver?? um acr??scimo de R$ 13,00 em sua fatura.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        {
          type: 'structure',
          attributes: {
            card: {
              type: 'structure',
              attributes: {
                plan: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'etl',
                  },
                },
                border: {
                  type: 'structure',
                  attributes: {
                    display: {
                      type: 'boolean',
                      value: {
                        type: 'static',
                        value: true,
                      },
                    },
                    color: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '#D60B52',
                      },
                    },
                  },
                },
                cta: {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Assinar plano',
                      },
                    },
                    sku: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '2000242',
                      },
                    },
                    color: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '#D60B52',
                      },
                    },
                  },
                },
                price: {
                  type: 'structure',
                  attributes: {
                    integer: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '35',
                      },
                    },
                    cents: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '90',
                      },
                    },
                    currency: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'R$',
                      },
                    },
                    obs: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'por m??s',
                      },
                    },
                  },
                },
                flag: {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '#EsquentaComplet??o',
                      },
                    },
                    color: {
                      type: 'structure',
                      attributes: {
                        text: {
                          type: 'text',
                          value: {
                            type: 'static',
                            value: '#ffffff',
                          },
                        },
                        bg: {
                          type: 'text',
                          value: {
                            type: 'static',
                            value: '#B41248',
                          },
                        },
                      },
                    },
                  },
                },
                title: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'Em Todo Lugar',
                  },
                },
                subtitle: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'Promo????o exclusiva: pague 1 e ganhe 12 meses gr??tis no plano completo!',
                  },
                },
                colorSchema: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'red',
                  },
                },
              },
            },
            benefits: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Dispon??vel em +4.000 lugares;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Cashback:',
                      },
                    },
                    bullet: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '<ul><li>Abastecimento;</li><li>Sem Parar Shop (+200 lojas).</li></ul>',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
              ],
            },
            where: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '100% dos ped??gios;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'toll-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+1400 postos de combust??veis;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'fuel-tank-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+700 drive-thrus;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'drive-thru-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+130 lava-r??pidos;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'car-wash-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+2100 mercados, shoppings,  estacionamentos, aeroportos e hospitais.',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'shopping-icon',
                      },
                    },
                  },
                },
              ],
            },
            info: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Formas de pagamento',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            icon: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'credit-card-icon',
                              },
                            },
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Cart??o de cr??dito',
                              },
                            },
                          },
                        },
                        {
                          type: 'structure',
                          attributes: {
                            icon: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'debit-card-icon',
                              },
                            },
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'D??bito em conta',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Ades??o',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Gr??tis.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Manuten????o',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Sem cobran??a.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Uso fora da cobertura',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Sem cobran??a.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        {
          type: 'structure',
          attributes: {
            card: {
              type: 'structure',
              attributes: {
                plan: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'pre-pago',
                  },
                },
                border: {
                  type: 'structure',
                  attributes: {
                    display: {
                      type: 'boolean',
                      value: {
                        type: 'static',
                        value: true,
                      },
                    },
                    color: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '#AFCB37',
                      },
                    },
                  },
                },
                cta: {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Assinar plano',
                      },
                    },
                    link: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '/pre-pago',
                      },
                    },
                    color: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '#AFCB37',
                      },
                    },
                  },
                },
                price: {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'SEM MENSALIDADE',
                      },
                    },
                  },
                },
                title: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'Livre',
                  },
                },
                subtitle: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'Recarregue quanto quiser e quando for usar. Mais praticidade pra voc??!',
                  },
                },
                colorSchema: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'green',
                  },
                },
              },
            },
            benefits: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Dispon??vel em +4.000 lugares;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Cashback:',
                      },
                    },
                    bullet: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '<ul><li>Abastecimento;</li><li>Sem Parar Shop (+200 lojas).</li></ul>',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Recarregue s?? quando for usar;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Escolha o melhor valor de recarga.',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'check-icon',
                      },
                    },
                  },
                },
              ],
            },
            where: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '100% dos ped??gios;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'toll-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+1400 postos de combust??veis;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'fuel-tank-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+700 drive-thrus;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'drive-thru-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+130 lava-r??pidos;',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'car-wash-icon',
                      },
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    text: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: '+2100 mercados, shoppings,  estacionamentos, aeroportos e hospitais.',
                      },
                    },
                    icon: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'shopping-icon',
                      },
                    },
                  },
                },
              ],
            },
            info: {
              type: 'list',
              items: [
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Formas de pagamento',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            icon: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'credit-card-icon',
                              },
                            },
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Cart??o de cr??dito',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Ades??o',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Gr??tis.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Manuten????o',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Ficou 90 dias sem usar? Ser?? cobrada a tarifa de manuten????o de R$ 3,00 at?? que volte a utilizar.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'structure',
                  attributes: {
                    title: {
                      type: 'text',
                      value: {
                        type: 'static',
                        value: 'Uso fora da cobertura',
                      },
                    },
                    bullets: {
                      type: 'list',
                      items: [
                        {
                          type: 'structure',
                          attributes: {
                            text: {
                              type: 'text',
                              value: {
                                type: 'static',
                                value: 'Sem cobran??a.',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
};

export default input;
