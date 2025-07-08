let div = document.querySelector('div');

let btn = document.querySelector('button');
let h2 = document.querySelector('.color');
// div.addEventListener('click',getrandom);
btn.addEventListener('click',getrandom);
// div.style.backgroundColor='plum';

// listeners- when action formed in webpage-trigger hojate hae
function getrandom(){
    let red = Math.ceil(Math.random()*225);
    let plum = Math.ceil(Math.random()*225);
    let blue = Math.ceil(Math.random()*225);
    console.log(red);
    console.log(plum);
    console.log(blue);
    let newColor = `rgb(${red},${plum},${blue})`;
    h2.textContent=newColor;
    div.style.backgroundColor=newColor;
    // div.style.backgroundColor=`rgb(${red},${plum},${blue})`;
}



// let btn = document.querySelector('button');
// btn.addEventListener('click',(evt)=>{
//     console.log(evt.target.value);
//     console.log('clicked');
// });