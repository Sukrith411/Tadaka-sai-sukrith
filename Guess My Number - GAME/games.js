const secretnumber = Math.trunc(Math.random()*20)+1;
console.log(secretnumber);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function()
{
    const guess = Number(document.querySelector('.guess').value);
    if(score > highscore)
    {
        highscore = score;
    }
    document.querySelector('.high-score').textContent = highscore;

if(guess<=20 && guess>=0)
{
    if(!guess)
    {
        document.querySelector('.message').textContent = 'No Number..';
    }
    else if(guess!== secretnumber)
    {
        document.querySelector('.message').textContent = guess > secretnumber ? 'Too High...!!' : 'Too Low...!!' //Using Terinary operator
        score = score-1;
        document.querySelector('.score').textContent = score;
    }
    /*else if(guess > secretnumber)
    {
        document.querySelector('.message').textContent = 'Too High..';  
        score = score-1;
        document.querySelector('.score').textContent = score; 
    }
    else if(guess < secretnumber)
    {
        document.querySelector('.message').textContent = 'Too Low..';
        score = score-1;
        document.querySelector('.score').textContent = score;
    }*/
    else if(guess === secretnumber)
    {
        document.querySelector('.message').textContent = 'Same Numbers..';
        document.querySelector('.number').textContent = `Computer Number : ${secretnumber}`;
        score = score+1;
        document.querySelector('.score').textContent = score;
    }
}
else
{
    document.querySelector('.message').textContent = 'INVALID NUMBER.. \n Please enter in between 1 to 20';
}
})