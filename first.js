let actualNum = Math.floor(Math.random() * 101);
let attempt = 5;
console.log(actualNum);
if(actualNum === 0)
    actualNum++;
let userNum = prompt(`Enter number between 1 and 100, you have ${attempt} attempt left`);
attempt--;
while(actualNum != userNum && attempt > 0)
{
    if(userNum > actualNum)
        userNum = prompt(`Larger Number, please Enter Number, you have ${attempt} attempt left`);
    else
        userNum = prompt(`Smaller Number, please Enter Number, you have ${attempt} attempt left`);
    if(actualNum == userNum)
        break;
    attempt--;
}

if(attempt > 0)
    alert("You Won");
else
    alert("you lose the Game")