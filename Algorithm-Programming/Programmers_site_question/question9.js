let answers = [1,2,3,4,5];
let answers2 = [1,3,2,4,2];

solution(answers);


function solution(answers) {
    let answer = [];
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let n1 = answers.filter((a,i) => a === a1[i%a1.length]).length;
    let n2 = answers.filter((a,i) => a === a2[i%a2.length]).length;
    let n3 = answers.filter((a,i) => a === a3[i%a3.length]).length;
    
    let max = Math.max(n1,n2,n3);
    if(max === n1) answer.push(1);
    if(max === n2) answer.push(2);
    if(max === n3) answer.push(3);
    
    console.log(answer);
    return answer;

}