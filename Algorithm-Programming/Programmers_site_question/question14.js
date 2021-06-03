let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];

solution(clothes);

function solution(clothes){
let zero = {
names:[],
num:[]
};

for(let i in clothes){
    if(zero.names.find(e => e===clothes[i][1]) === undefined){
    zero.names.push(clothes[i][1])
    zero.num.push(1);
    }
    let inde = zero.names.findIndex(e => e===clothes[i][1]);
    zero.num[inde]++;
}
let count = 1;
zero.num.forEach(e => count= count*e);
count--;
return count;
}