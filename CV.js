
/** No pude hacer los eventos desde js. Salta error en la función: funtion (){ 
 
    
document.getElementById('boton').addEventListener('click', function () {
    console.log("creamos");
    document.getElementById("prueba").innerHTML = "hhhhhhhhhhhhhh";
});

document.getElementById('boton-color').addEventListener('click', function () {
    document.body.style.backgroundColor = '#2EAB07';
})
 

document.getElementById('boton').onclick=function(){
    console.log("a ver")
    document.getElementById("prueba").innerHTML = "Hello JavaScript!"
}
*/

window.onload=inicio;
function inicio(){
    document.getElementById("id1").onclick
}

function cambiocolor(){
    var x=document.getElementById("id1").style;
    x.color="red";
    x.backgroundColor="blue";
    x.fontSize="20px";
}