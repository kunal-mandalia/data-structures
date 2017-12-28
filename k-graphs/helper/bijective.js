/**
 * A util class to get the key given value
 * of a js Object
 * @param {Object} mappings (key, value)
 */
const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'

class Bijective {
  constructor (mappings) {
    if (!isObject(mappings)) {
      throw new Error(`Bijective should be initialised with object. Received ${mappings}`)
    } 
    this.mappings = mappings
    this.inverseMappings = this.getInverseMappings(mappings)
    this.getValue = this.getValue.bind(this)
    this.getInverse = this.getInverse.bind(this)
  }

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
