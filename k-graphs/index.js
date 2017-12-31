const Bijective = require('./helper/bijective')

class Kgraph {
  /**
   * 
   * @param {Array} matrix [[], [], ...] 
   * @param {Array} newIndices [Number]
   * @returns {Array} matrix containing empty rows/columns at new indices
   */
  static insertEmptyRowsColumns (matrix, newIndices) {
    let expandedMatrix = matrix
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
   * 
   * @param {Array} nodes 
   */
  static sortNodes (nodes) {
    return nodes.sort((a,b) => a > b)
  }

  /**
   * Expand matrix, labels, nodes, fn
   * @param {Kgraph}
   * @param {Array} additionalLabels 
   * @param {Function} sortNodes
   * @returns {Kgraph}
   */
  static expand (kgraph, additionalLabels, sortNodes = Kgraph.sortNodes) {
    let matrix, labels
    // matrix = kgraph.state.matrix
    labels = sortNodes(Array.from(new Set(kgraph.state.labels.concat(additionalLabels))))
    // const newIndices = labels.filter((l, i) => )
    matrix = [
      [0, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
    ]
    return new Kgraph(matrix, labels)
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
