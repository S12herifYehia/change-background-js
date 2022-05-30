var btn=document.querySelector('.btn')
var div=document.querySelector('.div')

var colors=['red' ,'green' ,'blue']
var  i=0;

btn.onclick=()=>{
    div.style.background=colors[i]
    i++;

    if(i==4){
       div.style.background='white'
    }

}