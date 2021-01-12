// stack, Queue 다리를 지나는 프린터 문제, 난이도 2. (★못풀었음)
let priorities = [2, 4, 5, 1, 3, 6, 2, 7]
let prior = [7,6,5,5,2,4,3,2]
let priorities2 = [1,1,9,1,1,1];
let now = 0;
let locations = 6;

console.log("A");
solution(priorities,locations);
function solution(priorities, location) { //중요도, 요청 문서 index
    let target_index = location; //user가 선택한 index
    let answer = 1;
    let first = -1;
    
    while (priorities.length > 0) {
        //1. 가장 앞에 있는 문서를 추출
        first = priorities.shift();
        //2. 중요도 높은 문서가 존재 시 뒤로 넣음
        if (priorities.some((value, index) => value > first)) {
            priorities.push(first);
        }
        else {
            if (target_index === 0) {
                break;
            }
            else answer ++;
        }
        /*3. 사용자가 선택한 문서가 중요도가 제일 높지 않은 경우
             현재 대기목록의 맨 끝으로 index를 옮긴다.
        */
        if (target_index === 0) target_index = priorities.length - 1;
        else target_index --;

        console.log(`${first} = first, ${target_index} = target_index, ${priorities} = priorities`);
    }
    console.log(answer);
    return answer;
}