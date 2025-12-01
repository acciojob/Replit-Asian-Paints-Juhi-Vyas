let gridItem = document.querySelectorAll(".grid-item")
let changeBtn = document.getElementById("change_button")
let input = document.getElementById("block_id")
let color = document.getElementById("colour_id")


changeBtn.addEventListener("click", ()=>{
	let inputValue = input.value
	let colorValue = color.value
	gridItem[inputValue-1].style.backgroundColor = colorValue
})

