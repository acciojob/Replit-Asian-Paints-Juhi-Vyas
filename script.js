let gridItem = document.querySelectorAll(".grid-item");
let changeBtn = document.getElementById("change_button");
let input = document.getElementById("block_id");
let color = document.getElementById("colour_id");

changeBtn.addEventListener("click", () => {
    let inputValue = input.value.trim();  // read raw value first

    // 🔹 If empty → make ALL transparent
    if (inputValue === "") {
        gridItem.forEach(box => {
            box.style.backgroundColor = "rgba(0, 0, 0, 0)";
        });
        return;
    }

    // 🔹 Convert to number after empty check
    let index = Number(inputValue) - 1;
    let colorValue = color.value;   // hex from Cypress

    // 🔹 Apply color to correct block
    if (index >= 0 && index < gridItem.length) {
        gridItem[index].style.backgroundColor = colorValue;
    }
});
