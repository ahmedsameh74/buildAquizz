const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(form.name.value.trim() === '' || form.password.value.trim() === ''){
        document.querySelector('.failedP').classList.remove('d-none')
    } else{
        localStorage.setItem('username',form.name.value );
        localStorage.setItem('password', form.password.value);
        setTimeout(() => {
            window.location = "/pages/build.html"
        }, 1500)
    }
})
