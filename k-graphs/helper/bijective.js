/**
 * A util class to get the key given value
 * of a js Object
 * @param {Object} mappings (key, value)
 */
const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'
const isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'

class Bijective {
  constructor (mappings) {
    const isObj = isObject(mappings)
    const isArr = isArray(mappings)
    if (!(isObj || isArr)) {
      throw new Error(`Bijective should be initialised with object or array. Received ${mappings}`)
    }
    const normalisedMappings = isArr ? this.normaliseMappings(mappings) : mappings
    this.mappings = normalisedMappings
    this.inverseMappings = this.getInverseMappings(normalisedMappings)
    this.getValue = this.getValue.bind(this)
    this.getInverse = this.getInverse.bind(this)
  }

  /**
   * 
   * @param {Array} mappings
   * @returns {Object}
   */
  normaliseMappings (mappings) {
    return mappings.reduce((acc, cur, index) => {
      acc[cur] = index
      return acc
    }, {})
  }

  /**
   * 
   * @param {Object} mappings 
   */
  getInverseMappings (mappings) {
    return Object.keys(mappings).reduce((acc, key) => {
      acc[mappings[key]] = key
      return acc
    }, {})
  }

  getValue (key) { return this.mappings[key] }

  getInverse (value) { return this.inverseMappings[value] }

}

module.exports = Bijective
