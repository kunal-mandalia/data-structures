const Bijective = require('./bijective')

describe(`bijective helper lib`, () => {
  describe('bad constructor', () => {
    const errorMappings = [
      'abc',
      123,
    ]
    it(`should throw when constructor is not an object`, () => {
      errorMappings.forEach(c => {
        expect(() => { const bijectiveMappings = new Bijective(c) }).toThrow()
      })
    })
  })

  describe('array constructor arg', () => {
    const mappings = ['a', 'b', 'c']
    const fn = new Bijective(mappings)
    it(`should normalise mappings`, () => {
      expect(Object.prototype.toString.call(fn.mappings)).toEqual('[object Object]')
    })

    it(`should get correct value`, () => {
      expect(fn.getValue('b')).toEqual(1)
    })

    it(`should get correct inverse value`, () => {
      expect(fn.getInverse(1)).toEqual('b')
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
