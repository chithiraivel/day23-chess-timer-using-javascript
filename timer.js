// let parent_div = document.createElement('div');
// let child1_div = document.createElement('div');
// let child2_div = document.createElement('div');
// let swap_btn = document.createElement('button');

// swap_btn.innerHTML = 'SWAP'

// parent_div.id = 'parent_div';
// child1_div.id = 'child1_div';
// child2_div.id = 'child2_div';
// swap_btn.id = 'swap_btn'


// parent_div.appendChild(child1_div);
// parent_div.appendChild(child2_div);
// parent_div.appendChild(swap_btn);

// parent_div.style.cssText ='color:red;background-color:yellow';
// document.getElementById('parent_div').appendChild(parent_div)

// console.log(parent_div);




// let start = document.querySelector('.start');
// let stop = document.querySelector('.stop');
// let time1 = document.querySelector('.time1');
// let time2 = document.querySelector('.time2');
// let child3_div = document.querySelector('.child3_div');


// var timer;
// var timer1;
// var sec1 =10;
// var min1 =1;

// sec2 = 10;
// min2 = 1;


// start.addEventListener("click", () => {
//      sec1 = 10;
//      min1 = 1;
//      timer = setInterval(function startTime() {

//         sec1--;
//         if (sec1 < 0) {
//             min1--;
//             if (min1 >= 0) {
//                 sec1 = 10;
//             }
//         }

//         if(min1 ==0 && sec1 == 0){
//             clearInterval(timer)
//         }
//         time1.innerHTML = min1 + " : " + sec1;
//     }, 1000);

//     start.disabled = true

// });



// function swap() {

//       timer1 =setInterval(function a(){

//         sec2--;
//         if (sec2 < 0) {
//             min2--;
//             if (min2 >= 0) {
//                 sec2 = 10;
//             }
//         }

//         if(min2 == 0 && sec2 ==0){
//             clearInterval(timer1)
//         }
//         time2.innerHTML = min2 + " : " + sec2;
//     },1000);

// }

// child3_div.addEventListener("click" , function c(){
//     swap();

//    run();
// });


// function run(){

//     clearInterval(timer)
// }


// stop.addEventListener("click" , function d(){
//      var min = 5;
//      var sec = '0' +0
//     time1.innerHTML = min + " : " + sec;
//     time2.innerHTML = min + " : " + sec;
//   clearInterval(timer);
//   clearInterval(timer1);  
// })





let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let time1 = document.querySelector('.time1');
let time2 = document.querySelector('.time2');
let swap = document.querySelector('.child3_div');


var sec = 0;
var sec2 = 0;
var min = 5;
var min2 = 5;
var timer1;
var timer2;
isTime = true;


start.addEventListener("click", startTime);
swap.addEventListener("click", swapTime);
stop.addEventListener("click", stopTime);


function startTime() {
    start.disabled = true;
    timer1 = setInterval(firsttime, 1000);
    isTime = false;
}

function firsttime() {
    if (min <= 0 && sec <= 0) {
        clearInterval(timer1);
        clearInterval(timer2);
    }
    else if (sec <= 0) {
        --min;
        sec = 60;
    }
    else {
        --sec;
    }
    console.log('hii');
    time1.innerHTML = min + ' : ' + sec;
}

function swapTime() {

    if (isTime == false) {
        clearInterval(timer1);
        timer2 = setInterval(secondTime, 1000);
        isTime = true;
    }
    else {
        clearInterval(timer2);
        startTime();

    }
}

function secondTime() {
    if (min2 <= 0 && sec2 <= 0) {
        clearInterval(timer1);
    clearInterval(timer2);
    }
    else if (sec2 <= 0) {
        --min2;
        sec2 = 60;
    }
    else {
        --sec2;
    }
    console.log('hii');
    time2.innerHTML = min2 + ' : ' + sec2;
}


function stopTime() {

    clearInterval(timer1);
    clearInterval(timer2);

    min = 5;
    min2 = 5;
    sec = 0 + '0';
    sec2 = 0 + '0';

    time2.innerHTML = min2 + ':' + sec2;
    time1.innerHTML = min + ':' + sec;

    start.disabled = false;

}


