let people = [70, 80,50,50,40,40,120,60,180,210];
let limit = 220;
solution(people,limit);


function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b); // 이렇게 하면 실패
    people.sort((a,b) => b-a); // 이렇게 하면 성공
    let lt = 0;
    let rt = people.length - 1;
    while (lt <= rt) {
      if (lt === rt) {
        answer++;
        break;
      }
      if (people[lt] + people[rt] <= limit) {
        lt++;
        rt--;
      } else {
        rt--;
      }
      answer++;
    }

    return answer;
}