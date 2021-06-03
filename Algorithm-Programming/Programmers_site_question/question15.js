let progresses = [95, 90, 99, 99, 80, 99];
let speeds = [1, 1, 1, 1, 1, 1];
solution(progresses,speeds);

function solution(progresses, speeds){
let sum = 0;
let retu = [];
while(progresses.length != 0){
if(progresses[0] >= 100 && progresses.length === 1){
sum++;
retu;
}

    if(progresses[0] >= 100){
        sum++;
        progresses.shift();
        speeds.shift();
        continue;
    }
    if(sum > 0){
    retu.push(sum);
    sum = 0;
    }

    for(let i in progresses){
        progresses[i] += speeds[i];
    }

   
}

return retu;
//console.log(retu);.push(sum);
        break
}