const Bijective = require('./helper/bijective')

class Kgraph {
  constructor (matrix = [], labels = []) {
    const nodes = new Set(labels)
    const fn = new Bijective(labels)
    this.state = {
      matrix,
      labels,
      nodes,
      fn,
    }
    this.expand = this.expand.bind(this)
  }

  /**
   * Expand matrix, labels, nodes, fn
   * @param {Array} additionalLabels 
   */
  expand (additionalLabels) {
    
  }

  static join (graphA, graphB) {
    const nodes = new Set(graphA.state.nodes, graphB.state.nodes)

    // return new Kgraph(matrix, labels)
    return 'joining...'
  }
}

module.exports = Kgraph
