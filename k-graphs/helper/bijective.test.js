const bijective = require('./bijective')

describe(`bijective helper lib`, () => {
  describe('inverting function', () => {
    const mappings = {
      'Birmingham': 0,
      'London': 1,
      'Manchester': 2
    }
    const cases = [
      { input: 2, output: 'Manchester' },
      { input: 1, output: 'London' }
    ]

    cases.forEach(c => {
      it(`should return ${c.output} given ${c.input}`, () => {
        expect(bijective(mappings).inverse(c.input)).toEqual(c.output)
      })
    })
  })
})
