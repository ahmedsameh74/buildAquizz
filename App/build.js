let username = localStorage.getItem('username');
let result = document.querySelector('.result');
let userDom = document.querySelector('.username');
let quistionNum = document.querySelector('#qusNum');
// let btn = result.querySelector('input');
let quzNum = quistionNum.querySelector('.num');
let quizForm = document.querySelector('.quizz');

let ansNum = document.querySelectorAll('.ansNum');


if(!username){
    window.location = '/index.html'
}
else if(username){
    result.classList.remove('d-none');
    userDom.textContent = `${username}`
}



quistionNum.addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    // quistionNum.value.Number()
    
    localStorage.setItem('quiNum', Number(quzNum.value));
    let quiNum = localStorage.getItem('quiNum') ;
    if(quiNum >= 1 && quiNum<= 60){
        // quizForm.classList.remove('d-none');
        
        document.querySelector('.failed').classList.add('d-none')
        quistionNum.reset();
        window.location = 'putyourquistion.html';
        // generateForm(quiNum);
    } else{
        document.querySelector('.failed').classList.remove('d-none')
    }
    
    
    
    // quis.innerHTML += '';
    
    // console.log(Number(quistionNum.value))
})