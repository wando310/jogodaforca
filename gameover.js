var opacidade = document.querySelector('.titulo')
setInterval(() => {
   opacidade.style.opacity = '1' 
}, 1000);
setInterval(() => {
    opacidade.style.opacity = '0' 
 }, 2000);
 
 
 document.querySelector('.btn').addEventListener('click',()=>{
   window.location.href= 'index.html'
 })