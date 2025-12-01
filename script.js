let gridItem = document.querySelectorAll(".grid-item");
let changeBtn = document.getElementById("change_button");
let input = document.getElementById("block_id");
let color = document.getElementById("colour_id");

changeBtn.addEventListener("click", () => {
    let inputValue = Number(input.value);
    let colorValue = color.value;

    gridItem.forEach(box => {
        box.style.backgroundColor = "rgba(0, 0, 0, 0)";
    });

    if (inputValue >= 1 && inputValue <= gridItem.length) {
        gridItem[inputValue - 1].style.backgroundColor = colorValue;
    }
});
