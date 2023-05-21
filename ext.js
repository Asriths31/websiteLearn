let mails=[]
let btn=document.getElementById("btn")
let text=document.getElementById("text")
let a=JSON.parse(localStorage.getItem("mails"))
let remove=document.getElementById("delete")
console.log(a)
 
  if(a){
      mails=JSON.parse(localStorage.getItem("mails"))
      dead()
      console.log("www")
   }
btn.addEventListener("click",function(){
    mails.push(text.value)
    text.value="" 
  //console.log(mails)
    localStorage.setItem("mails",JSON.stringify(mails))
    
    dead()})
remove.addEventListener("click",function(){
    console.log("jjjj")
    localStorage.clear()
    mails=[]
    dead()
 })  


function dead(){
    let abc=""
    for(i=0;i<mails.length;i++){
        abc=`<li>
        <a target="blank" href=${mails[i]}>
        ${mails[i]}
        </a>
        </li>`

    }
    
        document.getElementById("saved").innerHTML+=abc
        
}
