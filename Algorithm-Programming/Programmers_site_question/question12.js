let number = "1924";
let k = 2;
solution(number,k);

function solution(number,k){
    let numb = [];
    let answer = [];
    for(let i in number){
        numb.push(Number(number[i]));
    }
    let max = 9;
    let numIndex = 0;
    let count = 0;
    let indexCount = 0;

    while(true){
        let num;
        if(answer.length === (numb.length-k)){
            break;
        }
        if(answer.length === 0){
            num = numb.findIndex((Element,index) => Element === max-numIndex &&  (numb.length - index)  >= (numb.length-k-count));
        }
        else{
            num = numb.findIndex((Element,index) => Element === max-numIndex && index > indexCount &&  (numb.length - index)  >= (numb.length-k-count));
        }


        if(num !== -1  ){
            console.log("num = " + num + " ")
            answer.push(numb[num]);
            indexCount = num;
            count++;
            numIndex = 0;
        }
        else{
            numIndex++;
        }
    
        //let a = numb.findIndex(Element => Element === max);
        
    }
    let answers = answer.join('');
    return answers;

    
}  // 가장 큰 수를 찾고, 그 수가 자릿수보다 작으면 -1 된 수를 찾는다. 찾을 때 까지 반복) -> 찾은 후 다음 수는 9로 초기화 후 다시 찾는다 -> 찾았을
   // 경우 자리수가 (findindex)가 그 전에 찾은 max값보다 작아야한다. -> 반복

////// 공식적인 풀이방법   

function solution(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        let diff = name[i].charCodeAt() - 'A'.charCodeAt();
        sum += diff > 13 ? 26 - diff : diff;
    }

    let minMove = name.length - 1;
    for (let i = 1; i < name.length; i++) {
        if (name[i] === 'A') {
            for (var j = i + 1; j < name.length; j++) {
                if (name[j] !== 'A') {
                    break;
                }
            }

            const left = i - 1;
            const right = name.length - j;
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

            i = j;
        }
    }

    return sum + minMove;
}