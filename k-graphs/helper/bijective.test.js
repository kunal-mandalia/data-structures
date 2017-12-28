const Bijective = require('./bijective')

describe(`bijective helper lib`, () => {
  describe('bad constructor', () => {
    const errorMappings = [
      [1, 2, 3],
      'abc',
      123
    ]
    it(`should throw when constructor is not an object`, () => {
      errorMappings.forEach(c => {
        expect(() => { const bijectiveMappings = new Bijective(c) }).toThrow()
      })
    })    
  })

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
    const bijectiveMappings = new Bijective(mappings)
    cases.forEach(c => {
      it(`should return ${c.output} given ${c.input}`, () => {
        expect(bijectiveMappings.getInverse(c.input)).toEqual(c.output)
      })
    })
  })
})
