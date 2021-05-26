let priorities = [2, 1, 3, 2];
let location = 2;

solution(priorities,location);
function solution(priorities,location){
    let swic = 0;
    let endNum = 0
 
    while(endNum != priorities.length){
        swic = 0;
        for(let j=endNum+1; j<priorities.length; j++){ 
            if(priorities[endNum] <priorities[j]){
                if(location === endNum){
                    location = priorities.length-1;
                }
                else if(location >= endNum){
                    location -= 1;
                }
                swic = 1;
                priorities.push(priorities[endNum]);
                priorities.splice(endNum,1);
                break;
            }
        }
        if(swic === 0){
            endNum++;
        }
    }
    return location+1;
    
}