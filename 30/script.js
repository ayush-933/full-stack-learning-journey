let num=10;
let answer=prompt("guess the number");
let NoOfGuess=1;
while(NoOfGuess<=10){
 
  if(answer==num){
    alert("congratulations you guessed the number right!!\nyou guessed the number in :" + NoOfGuess+ " attempts");

    break;

    }
    else if(answer>num){
    answer= prompt("lower");
}
else{
   answer= prompt("higher");
}
NoOfGuess++;
}
