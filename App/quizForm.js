let quis = document.querySelector('.container');
let quiNum = localStorage.getItem('quiNum');


const generateForm = () => {
    for(let i = 1; i<=quiNum; i++){
        // console.log(i);
        quis.innerHTML += `
        <h2 class="my-5 text-white">qustion num ${i}</h2>
            <form class="quiz-form text-light select">
                
                <select class="form-select" aria-label="Default select example">
                   <option selected>select answers number</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                </select> 
                 
                <div class="failedU d-none text-danger text-center">Please choose answers number</div>
                
                <div class="text-center submit">
                    <button class="btn btn-light my-3 ">submit</button>
                </div>
            </form>
        `

    }
    // return document;

}
 
generateForm(quiNum);
let form = document.querySelectorAll('.select');
let input = document.querySelector('input');




form.forEach((form,index) => {
    const handleQuiz = (e) => {
        e.preventDefault();
        // let choise = form.querySelector('.choise');
        if(form.querySelector('select').value === 'select answers number'){
            form.querySelector('.failedU').classList.remove('d-none')
        } else{
            localStorage.setItem(`ansNum${index + 1}`, form.querySelector('select').value)
            form.querySelector('.failedU').classList.add('d-none')
            console.log(form.querySelector('.form-select').value, index)
            let q = form.querySelector('.form-select').value;
            form.classList.add('add');
            form.classList.remove('select');
            form.innerHTML = `
            <div class="my-5">
                    <input class="form-control form-control-lg" type="text" placeholder="Enter Your quistion..." name="name">
                    
                </div> 
                
                <ul class="list-group todos mx-auto text-light">
        
                 </ul>
                 <div class="failedP d-none text-danger text-center">Please Complete Your Data</div>
                 <div class="text-center submit">
                 <button class="btn btn-light my-3 ">submit</button>
             </div>
            `
            let ul = form.querySelectorAll('ul');
            ul.forEach(ul => {
                for(let i = 1; i<=q; i++){
                    ul.innerHTML += `
                    <li class="list-group-item d-flex justify-content-between align-items-center" >
            <input class="form-control form-control-lg" type="text" placeholder="Enter Your answers..." name="name" style="border: none;" autocomplete="off">
            <i class="fa-solid fa-square-check mark"></i>
            </li>
                    `
                };
                let marks = ul.querySelectorAll('.mark');
                ul.addEventListener('click', (e) => {
                    if(e.target.classList.contains('mark')){
                        marks.forEach(mark => mark.classList.remove('checked'));
                        e.target.classList.add('checked')
                    }
                })
            });
            let addForm = document.querySelectorAll('.add');

              addForm.forEach((addform, index) => {
              let btn = addform.querySelector('button')
              const saveData = (e) => {
                   e.preventDefault();
                let question = addform.querySelector('input');
                let marks = Array.from(addform.querySelectorAll('.mark'));
                let checked = marks.find((mark) => mark.classList.contains('checked'));
                let ul = addform.querySelector('ul');
                let emptyAns = Array.from(ul.querySelectorAll('input')).find(emptyans => emptyans.value === '');
        
                if(
                    question.value === '' ||
                    !checked ||
                    emptyAns
                ){
                    addform.querySelector('.failedP').classList.remove('d-none')
                }else{
                    // console.log(e.target);
                    addform.querySelector('.failedP').classList.add('d-none');
                    let quisVal = question.value;
                    let answers = new Array();
                    ul.querySelectorAll('input').forEach(input => answers.push(input.value));
                    let correctAnswer = Array.from(ul.querySelectorAll('.mark')).find(mark => mark.classList.contains('checked')).previousElementSibling.value;
                    localStorage.setItem(`quisVal${index + 1}`, quisVal);
                    localStorage.setItem(`answers${index + 1}`, JSON.stringify(answers));
                    localStorage.setItem(`correctAnswer${index + 1}`, correctAnswer);
                    // .forEach(input => {
                    //   return  input.value;
                    // });
                    // let ansArr = [ ...answers];
                    console.log( answers)
                }
                
              }
          btn.addEventListener('click', saveData)
          })
        }
    }
    form.addEventListener('submit', handleQuiz)
})
let confirm = document.querySelector('.confirm');
let failed = document.querySelector('.failed');
confirm.addEventListener('click', e => {
    e.preventDefault();
    let form = document.querySelectorAll('form');
    let ul = document.querySelectorAll('ul');
    let emptyquis = Array.from(form).find(form => form.querySelector('input').value === '');
    let emptyans = ul.forEach(ul => Array.from(ul.querySelectorAll('input')).find(input => input.value === ''));
    if(emptyquis || emptyans){
        console.log('error');
        failed.classList.remove('d-none')
    }else{
        failed.classList.add('d-none')
        let quissVal = new Array();
    form.forEach(form => quissVal.push(form.querySelector('input').value));
    localStorage.setItem('quissVal', JSON.stringify(quissVal))
    let correctAnswer = new Array();
    ul.forEach(ul => ul.querySelectorAll('.checked').forEach(mark => correctAnswer.push(mark.previousElementSibling.value)))
    localStorage.setItem(`correctAnswer`, JSON.stringify(correctAnswer));
    window.location = 'quespage.html';
    }




    
})



