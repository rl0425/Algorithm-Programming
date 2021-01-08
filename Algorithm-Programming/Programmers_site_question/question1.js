let participant = ['Korea','Japen','China','Russia','Serbia','Hoju','Europe','Bangkok'];
participant.sort();
let completion = ['Japen','China','Russia','Serbia','Hoju','Europe','Bangkok'];
completion.sort();

let i =0;
let answer = '';
while(participant.length){
    i++;
    if(participant[i] !== completion[i]){
        answer = participant[i];
        break;
    }
}
console.log(answer);