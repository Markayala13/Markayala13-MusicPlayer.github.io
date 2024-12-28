// document.querySelector(".left");
// document.querySelector(".center");
// document.querySelector(".right");
// document.querySelector("#rola1");
// document.querySelector("#rola2");
// document.querySelector(".currentTime");


// console.log(document.querySelector(".left"));
// console.log(document.querySelector(".center"));
// console.log(document.querySelector(".right"));
// console.log(document.querySelector("#rola1"));
// console.log(document.querySelector("#rola2"));
// console.log(document.querySelector(".currentTime"));

// let currentIndex =0;
// let isPlaying = false;
// let audios=[];
// audios[0] =document.querySelector("#rola1");
// audios[1] =document.querySelector("#rola2");



//  function play(){

// if (isPlaying === true){
//     audios[currentIndex].pause();
//     isPlaying=false;
    
// }else if(isPlaying === false){
//     audios[currentIndex].play();
//     audios[currentIndex].addEventListener('timeupdate', updateTime);

//     isPlaying=true;
// }

// }

// const center = document.querySelector(".center");
// center.addEventListener("click",play);




// /*left botton*/

// function prevSong(){
//     audios[currentIndex].removeEventListener('timeupdate', updateTime);

//     audios[currentIndex].pause();
// if(currentIndex === 0){
   

//     currentIndex = audios.length -1;
    
    

// }else if(currentIndex != 0){

//     currentIndex--;
    


// }

// audios[currentIndex].play();

// audios[currentIndex].addEventListener('timeupdate', updateTime);

// }


// const leftButton = document.querySelector(".left");
// leftButton.addEventListener("click",prevSong);


// /*right botton*/

// function forward(){

//     audios[currentIndex].removeEventListener('timeupdate', updateTime);

//     audios[currentIndex].pause();
  

//     if(currentIndex === audios.length -1){
//         currentIndex = 0;
        
       
//     }else{
//         currentIndex++;
//     }
//     audios[currentIndex].play();
//     audios[currentIndex].addEventListener('timeupdate', updateTime);

// }

// const rightButton = document.querySelector(".right");
// rightButton.addEventListener("click",forward);

// /*counter*/


// function updateTime(){

// let currentTime= audios[currentIndex].currentTime;
// let minutes =Math.floor( currentTime/60);
// let seconds =Math.floor(currentTime%60);

// if(seconds < 10){
//     seconds= "0" + seconds;
// }

// let result = `${minutes}:${seconds}`;
// currentTimeDisplay.textContent = result;




// }
// const currentTimeDisplay = document.querySelector(".currentTime");

////////////////////////////////////////////////////////////////////
document.querySelector(".left");
document.querySelector(".center");
document.querySelector(".right");
document.querySelector("#rola1");
document.querySelector("#rola2");
document.querySelector("#rola3");
//document.querySelector("#rola4");
document.querySelector("#rola5");
document.querySelector("#rola6");
document.querySelector("#rola7");
document.querySelector(".currentTime");


console.log(document.querySelector(".left"));
console.log(document.querySelector(".center"));
console.log(document.querySelector(".right"));
console.log(document.querySelector("#rola1"));
console.log(document.querySelector("#rola2"));
console.log(document.querySelector("#rola3"));
//console.log(document.querySelector("#rola4"));
console.log(document.querySelector("#rola5"));
console.log(document.querySelector("#rola6"));
console.log(document.querySelector("#rola7"));
console.log(document.querySelector(".currentTime"));

let currentIndex =0;
let isPlaying = false;
let audios=[];
audios[0] =document.querySelector("#rola1");
audios[1] =document.querySelector("#rola2");
audios[2] =document.querySelector("#rola3");
//audios[3] =document.querySelector("#rola4");
audios[3] =document.querySelector("#rola5");
audios[4] =document.querySelector("#rola6");
audios[5] =document.querySelector("#rola7");


let tracks=[
    {
    title: "lost in the city light",
    cover: "assets/img/cover-1.png"

    },

    {
        title: "forest-lullaby",
        cover:"assets/img/cover-2.png"
    },

    {
 title: "Baila- Alfonso Lugo",
         cover:"assets/img/Untitled.jpeg"
    },

    // {
    //     title: "Dance All Night-Besson",
    //             cover:"assets/img/besson.jpeg"
    //         },

            {
                title: "Come back home- Anna Caig",
                        cover:"assets/img/come back home.jpeg"
                    },

                    {
                        title: "Rigth now - Dan Darnell",
                                cover:"assets/img/rightnow.jpeg"
                            },

                            {
                                title: "Mas Alla- Vince Miranda",
                                        cover:"assets/img/mas alla.jpeg"
                                    },

]
 function play(){

if (isPlaying === true){
    audios[currentIndex].pause();
    isPlaying=false;
    
}else if(isPlaying === false){
    audios[currentIndex].play();
    audios[currentIndex].addEventListener('timeupdate', updateTime);

    isPlaying=true;
}

}

const center = document.querySelector(".center");
center.addEventListener("click",play);




/*left botton*/

function prevSong(){
    audios[currentIndex].removeEventListener('timeupdate', updateTime);

    audios[currentIndex].pause();
if(currentIndex === 0){
   

    currentIndex = audios.length -1;
    
    

}else if(currentIndex != 0){

    currentIndex--;
    


}

audios[currentIndex].play();
audios[currentIndex].currentTime = 0;

const albumCover = document.querySelector(".card img");
const songTitle = document.querySelector(".card h1");
albumCover.src = tracks[currentIndex].cover; 
songTitle.textContent = tracks[currentIndex].title; 

audios[currentIndex].addEventListener('timeupdate', updateTime);


}


const leftButton = document.querySelector(".left");
leftButton.addEventListener("click",prevSong);


/*right botton*/

function forward(){

    audios[currentIndex].removeEventListener('timeupdate', updateTime);

    audios[currentIndex].pause();
  

    if(currentIndex === audios.length -1){
        currentIndex = 0;
        
       
    }else{
        currentIndex++;
    }
    audios[currentIndex].play();
    audios[currentIndex].currentTime = 0;
    const albumCover = document.querySelector(".card img");
const songTitle = document.querySelector(".card h1");

albumCover.src = tracks[currentIndex].cover; 
songTitle.textContent = tracks[currentIndex].title; 
    audios[currentIndex].addEventListener('timeupdate', updateTime);

}

const rightButton = document.querySelector(".right");
rightButton.addEventListener("click",forward);

/*counter*/


function updateTime(){

let currentTime= audios[currentIndex].currentTime;
let minutes =Math.floor( currentTime/60);
let seconds =Math.floor(currentTime%60);

if(seconds < 10){
    seconds= "0" + seconds;
}

let result = `${minutes}:${seconds}`;
currentTimeDisplay.textContent = result;




}
const currentTimeDisplay = document.querySelector(".currentTime");







