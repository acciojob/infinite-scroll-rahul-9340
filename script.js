//your code here!
let ol = document.getElementById("infi-list");
for(let i=0; i<=10; i++)
{
let li = document.createElement("li")

li.innerText= `list-item ${i}`

ol.appendChild(li)
}

ol.addEventListener("scroll",()=>{
	
let ol = document.getElementById("infi-list");
for(let i=0; i<=10; i++)
{
let li = document.createElement("li")

li.innerText= `list-item ${i}`

ol.appendChild(li)
}
})