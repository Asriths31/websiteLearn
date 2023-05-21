let mails=[]
let text=document.getElementById("text")
let btn=document.getElementById("btn")
let saved=document.getElementById("saved")
let remove=document.getElementById("remove")
//localStorage.getItem("mails",JSON.stringify(mails))

remove.addEventListener("dblclick",function(){
    localStorage.clear(); 
    mails=[]
    dead()
   
})
btn.addEventListener("click",function(){
    mails.push(text.value)
  text.value=""
  dead()
  window.localStorage.setItem("mails",JSON.stringify(mails))
})

function dead(){
    for(  i=0;i<mails.length;i++){
        ep=`<li> 
        <a href="#">${mails[i]}</a>
        </li>`
    }
    saved.innerHTML+=ep
}
let a=window.JSON.parse(localStorage.getItem("mails"))
if(a){
    mails=a
    dead()
}
