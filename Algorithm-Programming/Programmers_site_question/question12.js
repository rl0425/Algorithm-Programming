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


        console.log("index = ", numIndex);
        console.log("a num = ", num);
        //if(num === -1 && ((numb.length-k-count)<num )){
        //    numIndex++;
        //}
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
    answers = answer.join('');
    return answers;
    console.log(answers);
    
}  // 가장 큰 수를 찾고, 그 수가 자릿수보다 작으면 -1 된 수를 찾는다. 찾을 때 까지 반복) -> 찾은 후 다음 수는 9로 초기화 후 다시 찾는다 -> 찾았을
   // 경우 자리수가 (findindex)가 그 전에 찾은 max값보다 작아야한다. -> 반복