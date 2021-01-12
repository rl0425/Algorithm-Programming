// stack, Queue 다리를 지나는 트럭 문제, 난이도 2. (★못풀었음)
let truck_weights = [2,2,2,2,1,1,1];
let bridge_length = 5;
let weight = 5;


solution(bridge_length,weight,truck_weights);

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var bridge = [];
    let sum = 0;
    let flag = true;
    for (let i = 0; i < bridge_length; i++) {
      bridge.push(0);
    }
    console.log(truck_weights.length)
  
    while (flag) {
       /*console.log(
         "================================== start ==================================="
       );*/
       console.log(`start sum : `, sum);
       console.log("previous bridge check", bridge);
      let shiftVal = bridge.shift();
       console.log(`shiftValue : `, shiftVal);
       console.log("before remove shiftVal to sum", sum);
      sum -= shiftVal;
       console.log("after remove shiftVal to sum", sum);
      if (sum + truck_weights[0] > weight) {
        bridge.push(0);
         console.log("disapprove new truck xxxxxxxxxxxxxxx");
      } else {
        sum += truck_weights[0];
        bridge.push(truck_weights[0]);
         console.log("current truck_weights", truck_weights);
         console.log("add bridge and sum", truck_weights[0]);
        truck_weights.shift();
         console.log("approve new truck ooooooooooooooo");
      }
      answer++;
       console.log("*** bridge result this moment ***", bridge);
       console.log(`current sum: `, sum);
       console.log(`answer:  `, answer);
  
       // 아래 if문은 모든 truck이 bridge에 올라간 경우 실행됩니다. 마지막 truck이 내릴때까지 걸리는 시간을 합계하는 것 입니다.
        if (truck_weights.length === 0) {
        for (let i = 0; i < bridge_length; i++) {
          answer++;
          console.log(`answer:  `, answer);
        }
        flag = false; //합계가 완료되면 flag를 false시켜서, while을 빠져나옵니다.
      }
    }
    console.log(answer);
    return answer;
  }
