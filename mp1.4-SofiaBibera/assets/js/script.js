document.getElementById("btnCount").addEventListener("click", function () {
    
    let text = document.getElementById("txtInput").value.trim();
    let output = document.getElementById("txtOutput");

    let count = text.length;

    output.textContent = count;
});