const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');
const { count } = require('console');

eval(fs.readFileSync('code.js')+'');


//i got this graph from the graph that was on the slide
//so you have alredy shown what the answer should be 

var a = [
    [[2,1],[3,4],[1,2]],
    [[2,1],[4,10],[5,2]],
    [[0,9],[4,8]],
    [[2,2]],
    [[3,7],[6,1]],
    [[7,3]],
    [[5,2],[4,4]],
    [[6,1]]
];//the first items that are a pair says what node to go to, the second says the price

var b = [
    [[1,1]],
    [[0,1], [2,1]],
    [[1,1]]
];

graphShortA = allPairsShortestPaths(JSON.parse(JSON.stringify(a)))
graphShortB = allPairsShortestPaths(JSON.parse(JSON.stringify(b)))
graphShortAnswers = ["[0,10,9,11,18,26,22,23]",
"[2,0,11,13,20,28,24,25]",
"[1,1,0,2,9,17,13,14]",
"[4,14,13,0,7,15,11,12]",
"[9,9,8,10,0,8,4,5]",
"[4,2,11,13,3,0,2,3]",
"[8,6,9,11,1,4,0,1]",
"[7,5,14,16,6,3,5,0]"]
graphShortBnswers = ["[0,1,2]", "[1,0,1]", "[2,1,0]"]
for(con = 0; con < graphShortA.length; con++){
    assert(JSON.stringify(graphShortA[con]) == graphShortAnswers[con])
}
for(con = 0; con < graphShortB.length; con++){
    assert(JSON.stringify(graphShortB[con]) == graphShortBnswers[con])
}
