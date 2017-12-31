const Kgraph = require('./index')
const Bijective = require('./helper/bijective')

let graphA, graphB
beforeEach(() => {
  graphA = {
    matrix: [
      [0, 1, 1],
      [0, 0, 0],
      [1, 0, 0]
    ],
    labels: ['a', 'b', 'c']
  }
  
  graphB = {
    matrix: [
      [0, 0, 0],
      [3, 0 ,2],
      [5, 0, 0]
    ],
    labels: ['Birmingham', 'London', 'Manchester']
  }
})

describe(`k-graph constructor`, () => {
  it(`should be a (constructor) function`, () => {
    expect(typeof Kgraph).toEqual('function')
  })

  it(`instance should have correct state and functions on init`, () => {
    const graph = new Kgraph(graphA.matrix, graphA.labels)
    expect(graph.state.matrix).toEqual(graphA.matrix)
    expect(graph.state.labels).toEqual(graphA.labels)
    expect(graph.state.nodes).toEqual(new Set(graphA.labels))
    expect(JSON.stringify(graph.state.fn)).toEqual(JSON.stringify(new Bijective(graphA.labels)))
  })
})

describe(`static expandMatrix`, () => {
  it(`should correctly expand matrix with zero valued rows/columns`, () => {  
    const newIndices = [1,3]
    const matrix = Kgraph.expandMatrix(graphA.matrix, newIndices)
    const expectedMatrix = [
      [0, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
    ]
    expect(matrix).toEqual(expectedMatrix)
  })
})

describe(`static expandGraph`, () => {
  it(`should expand matrix and labels`, () => {  
    const kGraphA = new Kgraph(graphA.matrix, graphA.labels)
    const expandedGraph = Kgraph.expandGraph(kGraphA, ['apple', 'banana'])
    const labels = ['a', 'apple', 'b', 'banana', 'c']
    const expectedState = {
      matrix: [
        [0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
      ],
      labels,
      nodes: new Set(labels),
      fn: new Bijective(labels)
    }
    // todo: create method to check graph equality
    expect(expandedGraph.state.matrix).toEqual(expectedState.matrix)
    expect(expandedGraph.state.labels).toEqual(expectedState.labels)
  })
})

// it(`should join a pair of type 1 graphs`, () => {
//   const graphA = {
//     matrix: [
//       [0, 1, 1],
//       [0, 0, 0],
//       [1, 0, 0]
//     ],
//     labels: ['a', 'b', 'c']
//   }

//   const graphB = {
//     matrix: [
//       [0, 0, 0],
//       [3, 0 ,2],
//       [5, 0, 0]
//     ],
//     labels: ['Birmingham', 'London', 'Manchester']
//   }

//   const graphC = {
//     matrix: [
//       [0, 1, 0, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0],
//       [1, 0, 0, 0, 0, 0],
//       [0, 0, 3, 0, 0, 2],
//       [0, 0, 5, 0, 0, 0],
//     ],
//     labels: ['a', 'b', 'Birmingham', 'c', 'London', 'Manchester']
//   }
//   expect(Kgraph.join(graphA, graphB)).toEqual(graphC)
// })
