
var qs = (ele)=>{
    return document.querySelector(ele)
}


 aparece()
function aparece(){
//estrela1
setInterval(() => {
    qs('.image1').style.opacity = '0'    
}, 1000);
setInterval(() => {
    qs('.image1').style.opacity = '1'    
}, 2000);
//estrela2
setInterval(() => {
    qs('.image2').style.opacity = '0'    
}, 2000);
setInterval(() => {
    qs('.image2').style.opacity = '1'    
}, 3000);
//estrela3
setInterval(() => {
    qs('.image3').style.opacity = '0'    
}, 2500);
setInterval(() => {
    qs('.image3').style.opacity = '1'    
}, 2800);
//estrela4
setInterval(() => {
    qs('.image4').style.opacity = '0'    
}, 1000);
setInterval(() => {
    qs('.image4').style.opacity = '1'    
}, 1700);
//estrela5
setInterval(() => {
    qs('.image5').style.opacity = '0'    
}, 1500);
setInterval(() => {
    qs('.image5').style.opacity = '1'    
}, 2900);
//estrela6
setInterval(() => {
    qs('.image6').style.opacity = '0'    
}, 1550);
setInterval(() => {
    qs('.image6').style.opacity = '1'    
}, 2950);
//parabens
setInterval(() => {
    qs('.parabens').style.opacity = '0'    
}, 1000);
setInterval(() => {
    qs('.parabens').style.opacity = '1'
}, 2000);

}

qs('.btn').addEventListener('click',()=>{
    window.location.href= 'index.html'
})