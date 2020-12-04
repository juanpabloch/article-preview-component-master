const btn = document.querySelector("#btn")
const share = document.querySelector("#share")

btn.addEventListener("click", function(e){
    if(share.classList.contains('close')){
        share.classList.add('open')
        share.classList.remove('close')
    }else{
        share.classList.remove('open')
        share.classList.add('close')
    }
})