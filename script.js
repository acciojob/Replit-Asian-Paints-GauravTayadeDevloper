//your JS code here. If required.
function items() {
	let a =[];
	for(let i=1;i<=9;i++)
		{
			a.push(document.getElementById(String(i)));
		}
	return a;
	}

function resetAll() {
items().forEach(ele => {
    ele.style.backgroundColor = "transparent";
});
}
document.getElementById("change_button").addEventListener("click" , ()=>{
let id =document.getElementById("block_id").value.trim();
let color = document.getElementById("colour_id").value.trim();
	resetAll();
const cell = document.getElementById(id);
if(id && color)
{
	cell.style.backgroundColor = color;
}
	
})

document.getElementById("reset_button").addEventListener("click",resetAll);



