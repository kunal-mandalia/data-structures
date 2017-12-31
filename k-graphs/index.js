const Bijective = require('./helper/bijective')

class Kgraph {
  /**
   * 
   * @param {Array} matrix [[], [], ...] 
   * @param {Array} newIndices [Number]
   * @returns {Array} matrix containing empty rows/columns at new indices
   */
  static expandMatrix (matrix, newIndices) {
    let expandedMatrix = matrix.slice()
    const size = matrix.length + newIndices.length
    let emptyRow = new Array(size).fill(0)
    // columns
    expandedMatrix.map(row => {
      newIndices.map(index => row.splice(index, 0, 0))
    })
    // rows
    newIndices.map(index => {
      expandedMatrix.splice(index, 0, emptyRow)
    })
    return expandedMatrix
  }

  /**
   * Expand matrix, labels, nodes, fn
   * @param {Kgraph}
   * @param {Array} additionalLabels 
   * @param {Function} sortNodes
   * @returns {Kgraph}
   */
  static expandGraph (kgraph, additionalLabels, sortNodes = Kgraph.sortNodes) {
    const labels = sortNodes(Array.from(new Set(kgraph.state.labels.concat(additionalLabels))))
    const newIndices = additionalLabels.map(l => labels.indexOf(l))
    const matrix = Kgraph.expandMatrix(kgraph.state.matrix, newIndices)
    return new Kgraph(matrix, labels)
  }

  /**
   * 
   * @param {Array} nodes 
   */
  static sortNodes (nodes) {
    return nodes.sort((a,b) => a > b)
  }

  static join (graphA, graphB) {
    const nodes = new Set(graphA.state.nodes, graphB.state.nodes)
    
    // return new Kgraph(matrix, labels)
    return 'joining...'
  }

  constructor (matrix = [], labels = []) {
    const nodes = new Set(labels)
    const fn = new Bijective(labels)
    this.state = {
      matrix,
      labels,
      nodes,
      fn,
    }
    // this.expand = this.expand.bind(this)
    // this.sortNodes = this.sortNodes.bind(this)
  }
}

module.exports = Kgraph
