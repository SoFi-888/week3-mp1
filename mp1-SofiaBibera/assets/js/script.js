let txtInput = document.querySelector("#txtInput");
let btnReplaceAll = document.querySelector("#btnReplaceAll");
let txtOutput = document.querySelector("#txtOutput");

btnReplaceAll.addEventListener("click", function(){

    let str1 = txtInput.value;
    let output = str1.replace(" ","");
    console.log(output);
    txtOutput.innerText = output;
});