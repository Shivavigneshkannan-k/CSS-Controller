const inputs = document.querySelectorAll(".inputs");

function updateProperty(){
    let unit = this.dataset.unit||'';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
}
inputs.forEach(input=>input.addEventListener("change",updateProperty));
inputs.forEach(input=>input.addEventListener("mousemove",updateProperty));

