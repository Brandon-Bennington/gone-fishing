const prompt = require('prompt-sync')({sigint: true});


console.log("\n")
console.log(`You have the day off to go fishing! Try to make as much as you can with the time that you have. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.`);
console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);
console.log(``);

let counter = 0;
let timer = 6;
let fishCounter =0;
let finalPrice = 0;
let actualWeight = 0;
let fishArray2 = [];

function randomlyGeneratedFish(){

let index = 0
let fishArray = ['WowDatUgly', 'PikaFish', 'ChariSalmon','TwoFinnedNemo', 'ConcentratingDory',]
let randomFish =fishArray[Math.floor(Math.random() * fishArray.length)];
let randomPrice = (Math.random()*100).toString().substring(0, 4);
let randomWeight = Math.floor(Math.random() * 10);
randomPrice = Number(randomPrice);
if (timer < 12) 
{
console.log(`The time is ${timer}:00am so far you have caught ${fishCounter} fish,`)
console.log('');
console.log(`You've gone fishing!\n`)
console.log(`You caught a ${randomFish} weighing ${randomWeight} lbs and valued at $${randomPrice}`);
let catchOrRelease = prompt(`Your action: [c]atch or [r]elease? `);
catchOrRelease = catchOrRelease.toLocaleLowerCase();
    
       if (catchOrRelease === "c")
       {
        console.log("")
        console.log ("You choose to take the fish from its family and its friends!")
        counter +=1;
        timer +=1;
        fishCounter +=1;
        actualWeight = randomWeight + actualWeight;
        finalPrice = finalPrice + randomPrice;
        fishArray2 = fishArray2.concat(randomFish);
        console.log(`you have ${fishArray2} in your pack`);
        if(actualWeight >= 10)
        {
            console.log(`Your Pack is full and you cannot store anymore fish. You have ${fishCounter} fish priced at ${finalPrice.toString().substring(0, 4)}`)
           
            for (let i = 0; i > fishArray.length; i++){
             fishArray2[i];
            }
            console.log(fishArray2);
            } else 
            {
           randomlyGeneratedFish()
            }

        } else {
        timer +=1;
        console.log ("You released the fish, wounded, and likely to get eaten by sharks!")
        
        if (fishArray2.length >= 1)
         {
        console.log(`you have ${fishArray2} in your pack`);
        randomlyGeneratedFish();

         } else {
            console.log("you have no fish");
            randomlyGeneratedFish();
         }
        }
} else if (timer === 12 )
{
    console.log(`TIMES UP!`)
    console.log(`the time is ${timer}:00pm so far you have caught ${fishCounter} fish, weighed at ${randomWeight}lbs`);
}      
}

randomlyGeneratedFish();