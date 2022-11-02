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
                        value: 'por mês',
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
                    value: 'Oferta exclusiva: pague 1 e ganhe 12 meses grátis + assistência auto 24h!',
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
                        value: 'Disponível em +4.000 lugares;',
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
                        value: 'Assistência auto 24h:',
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
                        value: '+1400 postos de combustíveis;',
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
                        value: '+130 lava-rápidos;',
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
                                value: 'Cartão de crédito',
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
                        value: 'Adesão',
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
                                value: 'Grátis.',
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
                        value: 'Manutenção',
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
                                value: 'Sem cobrança.',
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
                                value: 'A partir do 3º dia de uso do pedágio, haverá um acréscimo de R$ 9,00 na mensalidade.',
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
                        value: 'no mês que usar',
                      },
                    },
                  },
                },
                title: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'Flex Pedágio',
                  },
                },
                subtitle: {
                  type: 'text',
                  value: {
                    type: 'static',
                    value: 'Cobertura em 100% dos pedágios do país, e só paga quando utilizar o serviço.',
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
                        value: 'Pague a mensalidade só no mês que usar;',
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
                        value: '100% dos pedágios;',
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
                        value: 'Com o adicional de R$13,00 você terá acesso a benefícios, como:',
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
                        value: '+1400 postos de combustíveis;',
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
                        value: '+130 lava-rápidos;',
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
                                value: 'Cartão de crédito',
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
                                value: 'Débito em conta',
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
                        value: 'Adesão',
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
                                value: 'Grátis.',
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
                        value: 'Manutenção',
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
                                value: 'Ficou 90 dias sem usar? Será cobrada a tarifa de manutenção de R$ 9,90 até que volte a utilizar.',
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
                                value: 'Após 12 meses a mensalidade será de R$ 23,90 no mês que usar o serviço.',
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
                                value: 'Caso você utilize sua tag nos drive-thrus, postos de abastecimento, estacionamentos e lava-rápidos, haverá um acréscimo de R$ 13,00 em sua fatura.',
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
                        value: 'por mês',
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
                        value: '#EsquentaCompletão',
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
                    value: 'Promoção exclusiva: pague 1 e ganhe 12 meses grátis no plano completo!',
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
                        value: 'Disponível em +4.000 lugares;',
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
                        value: '100% dos pedágios;',
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
                        value: '+1400 postos de combustíveis;',
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
                        value: '+130 lava-rápidos;',
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
                                value: 'Cartão de crédito',
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
                                value: 'Débito em conta',
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
                        value: 'Adesão',
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
                                value: 'Grátis.',
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
                        value: 'Manutenção',
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
                                value: 'Sem cobrança.',
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
                                value: 'Sem cobrança.',
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
                    value: 'Recarregue quanto quiser e quando for usar. Mais praticidade pra você!',
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
                        value: 'Disponível em +4.000 lugares;',
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
                        value: 'Recarregue só quando for usar;',
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
                        value: '100% dos pedágios;',
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
                        value: '+1400 postos de combustíveis;',
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
                        value: '+130 lava-rápidos;',
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
                                value: 'Cartão de crédito',
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
                        value: 'Adesão',
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
                                value: 'Grátis.',
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
                        value: 'Manutenção',
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
                                value: 'Ficou 90 dias sem usar? Será cobrada a tarifa de manutenção de R$ 3,00 até que volte a utilizar.',
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
                                value: 'Sem cobrança.',
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
