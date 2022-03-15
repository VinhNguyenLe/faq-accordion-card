const item = document.querySelectorAll('.item')

for(var i = 0; i < item.length; i++){
    item[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}