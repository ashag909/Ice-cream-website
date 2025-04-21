document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            if (!this.classList.contains("added")) {
                this.classList.add("added");
                this.dataset.count = 1; // Initialize count
                updateButtonText(this);
            }
        });
    });

    function updateButtonText(button) {
        const count = button.dataset.count;
        button.innerHTML = `<span class="decrease">−</span>&nbsp; &nbsp; ${count} <span class="increase">&nbsp; &nbsp;+</span>`;

        button.onclick = function (event) {
            if (event.target.classList.contains("decrease")) {
                let currentCount = parseInt(button.dataset.count);
                if (currentCount > 1) {
                    button.dataset.count = currentCount - 1;
                    updateButtonText(button);
                } else {
                    button.innerHTML = "Add to Cart";
                    button.classList.remove("added");
                    button.onclick = null; // Reset click event
                }
            } else if (event.target.classList.contains("increase")) {
                let currentCount = parseInt(button.dataset.count);
                button.dataset.count = currentCount + 1;
                updateButtonText(button);
            }
        };
    }
});
