var screen = document.querySelector('#display');
var btn = document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click', (e)=> {
        btntext=e.target.innerText;
        screen.value += btntext
    })
}

function backspc(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}