const quissVal = localStorage.getItem('quissVal');
const quiNum = localStorage.getItem('quiNum');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const name = document.querySelector('input');
const username = localStorage.getItem('username');
const teach = document.querySelector('.teach');
const failed = document.querySelector('.failed');

console.log(quiNum)
for(let i = 1 ; i<= quiNum; i++){
    let quisVal = localStorage.getItem(`quisVal${i}`);
    console.log(quisVal)
   form.innerHTML += `
                <div class="my-5">
                    <p class="lead fw-normal q${i}">
                      ${i} - ${quisVal}
                    </p>
                </div>
   `
}
const p = document.querySelectorAll('p.lead');
p.forEach((p, index) => {
    let answers = JSON.parse(localStorage.getItem(`answers${ index + 1 }`));
    let choiseNum = localStorage.getItem(`ansNum${ index + 1 }`);
    console.log(choiseNum, answers);
    let div = document.createElement('div');
    // div.classList.add('form-check.my-2.text-white-50');
    for(let i = 0; i < choiseNum; i++){
         div.innerHTML += `
         <div class="form-check my-2 text-white-50">
     <input type="radio" name='q${index+1}' value="${answers[i]}">
     <label class="form-check-label">${answers[i]}</label>
     </div>
     `;
    }
    
    p.appendChild(div);
});
form.innerHTML += `
<div class="text-center">
                    <input type="submit" class="btn btn-light">
                </div>
`;
const correctAnswer = new Array();
correctAnswer.push(JSON.parse(localStorage.getItem('correctAnswer')));
console.log(correctAnswer);
// let btn = document.querySelectorAll('input[type=submit]')
let forms = document.querySelectorAll('form');
// forms.forEach((form, index) => {
    form.addEventListener('submit', e =>{
        e.preventDefault();
        let p = document.querySelectorAll('p.lead');
        console.log(p);
        if(name.value === ''){
            failed.classList.remove('d-none');
            scrollTo(0,0);
        }else{
            let score = 0;
        p.forEach((p,i) => {
            let rightAns = localStorage.getItem(`correctAnswer${i + 1}`);
            
            let selected = document.querySelectorAll('input[type=radio]:checked')[i];
            console.log(rightAns, selected)
            if(rightAns === selected.value){
                console.log('yeaaay');
                console.log(score)
                score += 100/quiNum ;
                // console.log((score).toFixed(0))
                result.classList.remove('d-none');
                scrollTo(0,0);
                // result.querySelector('.score').textContent = `${score}%`;
                // selected.previousElementSibling.classList.remove('wrong')
                let output = 0;
                const timer = setInterval(() => {
                    result.querySelector('.score').textContent = `${output}%`;
                    // console.log((score).toFixed(0))
                    if(output === Math.floor(score)){
                        clearInterval(timer);
                        result.querySelector('.username').textContent = `${name.value}`;
                        teach.textContent = username;
                    } else{
                        output++;
                        
                    }
                }, 10);
    
            }else if(rightAns !== selected.value){
                console.log('nah');
                result.querySelector('.username').textContent = `${name.value}`;
                teach.textContent = username;
                result.classList.remove('d-none');
                selected.nextElementSibling.classList.add('wrong')
                // console.log(selected)
            }
            // console.log(selected.find(checked => {
            //     return checked.value
            // }))
        })
     

        }
           
        // let userSelected = p.querySelectorAll('input[type=radio]');
        // let checked = form.querySelectorAll('input[tupe=radio]');
        // Array.from(checked).forEach(element => console.log(element.checked));
        // correctAnswer.forEach((answer, index) => {
        //     // let p = form.querySelectorAll('form p');
        //     let pin = p.querySelectorAll('input[type=radio]:checked');
        //     let userAnswer = new Array();
        //     pin.forEach(selected => {
        //         userAnswer.push(selected.value);
        //     })
        //     console.log(userAnswer,answer)

        // })
    })
// })