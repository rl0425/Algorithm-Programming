// stack, Queue 기능개발 문제, 난이도 2.

let progresses = [93,30,55];
let speeds = [1,30,5];
const progresses2 = [95,90,99,99,80,99];
let speeds2 = [1,1,1,1,1,1];
let num = 1;

solution2(progresses,speeds);
console.log(progresses);
/////////////////////////////// 처음 푼 해답
function solution(progresses,speeds){
    let answer = [];
    for(let i=0; i<progresses.length; i++){
        while(progresses[i] < 100){
            for(let j=0; j<progresses.length; j++){
                progresses[j] += speeds[j]; 
            }
        }
        let copy = i+1;
        while(true){
            if(progresses[copy] < 100){
                break;
            }
            else if(copy < progresses.length){
                copy++;
                num++;
            }
            else{
                break;
            }
        }
        i = i+ num -1;
        answer.push(num);
        num = 1;

    }
}

//////////////////////////////// Math.ceil을 이용한 해답
function solution2(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];
    console.log(days);

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;            
        }
    }
    return answer;
}

