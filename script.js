'use strict';

let ans=Math.floor(Math.random()*20)+1;

let activity=function() 
{
    let input=document.querySelector('.guess').value;
    if (!input)
    {
        document.querySelector('.message').textContent=`⛔ No number !`;
        return;
    }
    
    if (document.querySelector('.score').textContent>0)
        document.querySelector('.score').textContent--;
        
    if (input<ans)
        document.querySelector('.message').textContent=`📉Too low!`;
    else if (input>ans)
        document.querySelector('.message').textContent=`📈Too high!`;
    else if (input==ans)
    {
        document.querySelector('.highscore').textContent=Math.max(document.querySelector('.highscore').textContent,document.querySelector('.score').textContent);
        document.querySelector('.number').textContent=ans;
        document.querySelector('body').style.backgroundColor = "#60B347";
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.message').textContent=`🎉Correct Number!`;   
        if (Number(document.querySelector('.score').textContent)>Number(document.querySelector('.highscore').textContent))
        {
            document.querySelector('.highscore').textContent=document.querySelector('.score').textContent;
        }
        return;
    }

    if (document.querySelector('.score').textContent<1)
    {
        document.querySelector('.message').textContent="💥You Lost the game!";
    }
}

let refresh=function()
{
    ans=Math.floor(Math.random()*20)+1;
    document.querySelector('.message').textContent=`Start Guessing ...`;
    document.querySelector('.number').textContent="?";
    document.querySelector('.score').textContent=20;
    document.querySelector('.guess').value="";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width='15rem';
}

document.querySelector('.check').addEventListener('click',activity);
document.querySelector('.again').addEventListener('click',refresh);