const { fun } = require("jsverify")

function allPairsShortestPaths(graph) {
    dist = make2d(graph.length)
    for(i = 0; i < graph.length; i++){
        dist[i][i] = 0
    }
    for(i = 0; i < graph.length; i++){
        for(j = 0; j < graph[i].length; j++){
            dist[graph[i][j][0]][i] = graph[i][j][1]
        }
    }
    for(re = 0; re < 5; re++){//something can happen where some nodes dont actually get the shortest path, this fixes it
        for(i = 0; i < graph.length; i++){
            for(j = 0; j < graph.length; j++){
                for(k = 0; k < graph.length; k++){
                    if (dist[i][j] > dist[i][k] + dist[k][j]){
                        dist[i][j] = dist[i][k] + dist[k][j]
                    }
                }
            }
        }
    }
    return dist;
}

function make2d(a){
    arr = []
    arr2 = []
    for(j = 0; j < a; j++){
        arr2.push(500)
    }
    for(i = 0; i < a; i++){
        arr.push(arr2)
    }
    return JSON.parse(JSON.stringify(arr))
}