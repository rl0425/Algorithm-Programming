let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
solution(array,commands);


function solution(array, commands){
    let nam = [];
    let returns = [];
    for(let i in commands){
        nam = array.slice(commands[i][0]-1,commands[i][1]);
        nam.sort((a,b) => a-b);
        returns.push(nam[commands[i][2]-1]);
        console.log(returns);
    }
    return returns;
}