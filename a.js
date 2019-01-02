
var a = [
    {
        id : 'aaa',
        pw : 'aaa',
        name : 'aaa'
    },
    {
        id : 'bbb',
        pw : 'bbb',
        name : 'bbb'
    },
    {
        id : 'ccc',
        pw : 'ccc',
        name : 'ccc'
    },
    {
        id : 'ddd',
        pw : 'ddd',
        name : 'ddd'
    },
]

// for(var i = 0; i < a.length; i++){
//     console.log(a[i].name);
// }

var b = [
    ["aaa", "aaa", "aaa"],
    ["bbb", "bbb", "bbb"],
    ["ccc", "ccc", "ccc"],
    ["ddd", "ddd", "ddd"]
]

for(var i = 0; i < b.length; i++){
    for(var j = 0; j < b[i].length; j++){
        console.log(b[i][j])
    }
}