document.body.style.backgroundColor='#ffffff';
let text = document.getElementById('text');
text.style.color='black';
document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("mode-toggle");
    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "#fff";
            text.style.color='white';
        } else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
            text.style.color= 'black';
        }
    });
});