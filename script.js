//Action Declaration
const outer = document.querySelector('.my-outer');
const rock = document.getElementById('rock');
const comRock = rock.cloneNode(true);
const paper = document.getElementById('paper');
const comPaper = paper.cloneNode(true);
const scissor = document.getElementById('scissor');
const comScissor = scissor.cloneNode(true);
const comOuter = document.querySelector('.com-outer');
const text = comOuter.querySelector('h1');
const score = document.querySelector('h2 span');
const replay = document.querySelector('.replay');
const title = document.querySelector('.content-outer .content h1');
let myAction;
let comAction;

let scoreValue = 0;

//Random Computer Action
function randComp(){
    const rand = Math.floor(Math.random()*3+1);
    return rand;
}

//Parse Computer Action to Image
function parsImg(){
    const img = randComp();
    if(img == 1){
        action = comRock;
    }else if(img == 2){
        action = comPaper;
    }else{
        action = comScissor;
    }
    return action;
}

//Win, Lose, or Draw Condition
function Condition(my, com){
    if(my == 'rock' && com == comRock){
        title.innerHTML = 'Draw';
    }else if(my == 'rock' && com == comPaper){
        title.innerHTML = 'You Lose !!!';
        scoreValue -= 1;
        score.innerHTML = scoreValue;
    }else if(my == 'rock' && com == comScissor){
        title.innerHTML = 'You Win !!!';
        scoreValue += 1;
        score.innerHTML = scoreValue;
    }else if(my == 'paper' && com == comRock){
        title.innerHTML = 'You Win !!!';
        scoreValue += 1;
        score.innerHTML = scoreValue;
    }else if(my == 'paper' && com == comPaper){
        title.innerHTML = 'Draw';
    }else if(my == 'paper' && com == comScissor){
        title.innerHTML = 'You Lose !!!';
        scoreValue -= 1;
        score.innerHTML = scoreValue;
    }else if(my == 'scissor' && com == comRock){
        title.innerHTML = 'You Lose !!!';
        scoreValue -= 1;
        score.innerHTML = scoreValue;
    }else if(my == 'scissor' && com == comPaper){
        title.innerHTML = 'You Win !!!';
        scoreValue += 1;
        score.innerHTML = scoreValue;
    }else if(my == 'scissor' && com == comScissor){
        title.innerHTML = 'Draw';  
    }
}

//Action Handler
function actionHandler(act, rm, rm2, actStyle){
    myAction = act;
    comAction = parsImg();
    outer.removeChild(rm);
    outer.removeChild(rm2);
    actStyle.classList.remove('action');
    actStyle.style.borderStyle = 'solid';
    actStyle.style.backgroundColor = 'red';
    comOuter.removeChild(text);
    comOuter.appendChild(comAction);
    comAction.classList.remove('action');
    comAction.style.borderStyle = 'solid';
    comAction.style.backgroundColor = 'red';
    replay.style.display = 'flex';
    Condition(myAction, comAction);
}

//Replay Event
replay.addEventListener('click', function(){
    myAction = null;
    outer.appendChild(rock);
    outer.appendChild(paper);
    outer.appendChild(scissor);
    rock.style.backgroundColor = 'white';
    paper.style.backgroundColor = 'white';
    scissor.style.backgroundColor = 'white';
    rock.classList.add('action');
    paper.classList.add('action');
    scissor.classList.add('action');
    comOuter.appendChild(text);
    comOuter.removeChild(comAction);
    replay.style.display = 'none';
    title.innerHTML = 'Game Suit BTK';
});

//Action Events
rock.addEventListener('click',function () {
    actionHandler('rock',paper,scissor,rock);
});

paper.addEventListener('click',function () {
    actionHandler('paper',rock,scissor,paper);
});

scissor.addEventListener('click',function () {
    actionHandler('scissor',rock,paper,scissor);
});



