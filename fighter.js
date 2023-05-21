let players=["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
// let button=document.getElementById("button")
// let start=document.getElementById("vs")
document.getElementById("button").addEventListener("click",function(){
   let randomone=Math.floor(Math.random()*players.length)
   let randomtwo=Math.floor(Math.random()*players.length)
   document.getElementById("vs").textContent=players[randomone]+" "+"vs"+" "+players[randomtwo]
})