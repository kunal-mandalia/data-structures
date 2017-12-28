const Kgraph = require('./index')

describe(`k-graph`, () => {
  it(`should be a function`, () => {
    expect(typeof Kgraph).toEqual('function')
  })

  it(`should join a pair of type 1 graphs`, () => {
    const graphA = {
      matrix: [
        [0, 1, 1],
        [0, 0, 0],
        [1, 0, 0]
      ],
      labels: ['a', 'b', 'c']
    }

    const graphB = {
      matrix: [
        [0, 0, 0],
        [3, 0 ,2],
        [5, 0, 0]
      ],
      labels: ['Birmingham', 'London', 'Manchester']
    }

    const graphC = {
      matrix: [
        [0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [0, 0, 3, 0, 0, 2],
        [0, 0, 5, 0, 0, 0],
      ],
      labels: ['a', 'b', 'Birmingham', 'c', 'London', 'Manchester']
    }

    expect(Kgraph.join(graphA, graphB)).toEqual(graphC)
  })
})
