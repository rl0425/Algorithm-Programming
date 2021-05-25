let progresses = [93, 30, 55]
let speeds = [1,30,5]
solution(progresses,speeds);

function solution(progresses, speeds){
    let count = 0;
    let eNum = 0;
    let returnValue =[];

    while(progresses.length > 0){
        for(let i in progresses){
            if(progresses[i] < 100){
                progresses[i] += speeds[i];
            }
        }
        
        while(true){
            if(progresses[0] >= 100){
                progresses.shift();
                speeds.shift();
                count++;
            }
            else break;
        }

        if(count >0){
            returnValue.push(count);
            count = 0;
        }
    }
    console.log(returnValue);

}