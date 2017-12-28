/**
 * 
 * @param {Object} mappings (key, value)
 */
// todo: memoise inverse lookup
const bijective = (mappings) => {
  const value = (d) => {
    return mappings[d]
  }

  const inverse = (r) => {
    return Object.keys(mappings).find(key => mappings[key] === r)
  }

  return {
    value,
    inverse
  }
}

module.exports = bijective
