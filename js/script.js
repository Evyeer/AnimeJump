const char = document.querySelector('.char');
const bush = document.querySelector('.bush')
const jump = () =>{
    char.classList.add('jump');

    setTimeout(() => {
        
        char.classList.remove('jump');
    }, 700);
}

const loop = setInterval(()=>{

    const bushPosition = bush.offsetLeft;
    const charPosition = +window.getComputedStyle(char).bottom.replace('px', '')
    if(bushPosition <= 390 && bushPosition > 0 && charPosition < 95){
        bush.style.animation = 'none';
        bush.style.left = `${bushPosition}px`;

        char.style.animation = 'none';
        char.style.bottom = `${charPosition}px`;

        // mario.src = 'img/game-over.png' 
        // mario.style.width = '75px'
        // mario.style.marginLeft = '55px'



        clearInterval(loop);
    }

}, 10)











// const loop = setInterval(() => {
    

//     const bushPosition = bush.offsetLeft;
//     const charPosition = +window.getComputedStyle(char).bottom.replace('px', '')

//     if(bushPosition <= 390 && bushPosition > 0 && charPosition <95){
//         bush.style.animation = 'none'
//         bush.style.left = `${bushPosition}px`

//         charPosition.style.animation = 'none'
//         charPosition.style.bottom = `${charPosition}px`



//         clearInterval(loop);
//     }

    

// }, 10);

document.addEventListener('keydown', jump)