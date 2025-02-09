let btn1 = document.getElementById('btn2');

btn1.onclick = () =>{
    console.log('Button 2 clicked');
    let a=10;
    a++;
    console.log(a);
};

let box = document.querySelectorAll('div');

box[1].onmouseover = () => {
console.log('Mouse over');
};

/* 
let btn2 = document.getElementById('btn3');
let btn.onclick = (e) =>{

    console.log(e);
}; */

// Event Objects
btn1.onclick = (et)=>{
    console.log(et);
    console.log(et.target);
    console.log(et.type);
    // cooridnates
    console.log(et.clientX);
    console.log(et.clientY );
    
}

// Event Listeners
let btn3 = document.getElementById('btn3');
// let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', (e)=>{
    console.log('Button 3 clicked - handler 1');
});

btn3.addEventListener('click', (e)=>{
    console.log('Button 3 clicked caufght by 2nd event listener- handler 2');
});

const handler3 = (e)=>{
    console.log('Button 3 clicked caufght by 2nd event listener- handler 3');
};

btn3.addEventListener('click', handler3);

// Remove Event Listener
btn3.removeEventListener('click', handler3);


let modebtn = document.getElementById('mode');
let currmode = 'light';

modebtn.addEventListener('click', (e)=>{
    console.log('Mode button clicked');
    currmode = currmode === 'light' ? 'dark' : 'light';
    console.log(currmode);
    // document.body.style.backgroundColor = currmode === 'light' ? 'white' : 'black';
    document.body.classList.add(currmode); // from style.css
    document.body.classList.remove(currmode === 'light' ? 'dark' : 'light');
}); 

