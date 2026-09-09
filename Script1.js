const slider = document.getElementById("loveSlider");
const percentage = document.getElementById("percentage");

slider.addEventListener("input", function () {
    percentage.textContent = slider.value + "%";
});