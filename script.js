const orange_ball = document.querySelector('.orange-ball');
const red_ball = document.querySelector('.red-ball');
const blue_ball = document.querySelector('.blue-ball');
const green_ball = document.querySelector('.green-ball');

function startGreenToRight(){
    green_ball.style.animationName = 'greenmovetoright';
    green_ball.style.animationDuration = '2s';
    green_ball.style.animationFillMode = 'backwards';
    green_ball.style.animationDirection = 'alternate';
}
function startGreenToLeft(){
    green_ball.style.animationName = 'greenmovetoleft';
    green_ball.style.animationDuration = '2s';
    green_ball.style.animationFillMode = 'backwards';
    green_ball.style.animationDirection = 'alternate';
}
function jumpBall(ball,delay){
    ball.style.animationName = 'jump';
    ball.style.animationDelay = `${delay}s`;
    ball.style.animationDuration = '1s';
    ball.style.transition = 'all .4s';
}
function zeraAnimation(){
    orange_ball.style.animationName = '';
    orange_ball.style.animationDelay = '';
    orange_ball.style.animationDuration = '';

    red_ball.style.animationName = '';
    red_ball.style.animationDelay = '';
    red_ball.style.animationDuration = '';

    blue_ball.style.animationName = '';
    blue_ball.style.animationDelay = '';
    blue_ball.style.animationDuration = '';
}

startGreenToRight();

green_ball.addEventListener('animationstart',(e)=>{
    if(e.animationName == 'greenmovetoright')
    {
        jumpBall(orange_ball, 0.2);
        jumpBall(red_ball,0.4);
        jumpBall(blue_ball,0.6);
    }
    else if(e.animationName == 'greenmovetoleft')
    {
        jumpBall(orange_ball, 0.6);
        jumpBall(red_ball,0.4);
        jumpBall(blue_ball,0.2);      
    }
})

green_ball.addEventListener('animationend',(e)=>{
    if(e.animationName == 'greenmovetoright'){
        startGreenToLeft();
    }
    else if(e.animationName == 'greenmovetoleft'){       
        startGreenToRight();
    }

    zeraAnimation();
})
