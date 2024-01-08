const input = document.getElementById('text-input');
const buttonCheck = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function allInOne(inputElement){
    const inputData = inputElement.value;
    const clearedString = inputData.replace(/[^a-zA-Z\d:]/g, "").toLowerCase();
    let zeroBaseCharAmount = clearedString.length;

    const proveArray = [];

    if(zeroBaseCharAmount % 2 == 0){
        zeroBaseCharAmount = zeroBaseCharAmount/2;
    }else{
        zeroBaseCharAmount = Math.trunc(zeroBaseCharAmount/2);
    }

    for(let i = 0; i <= (zeroBaseCharAmount - 1); i++){
        
        if(clearedString[i] === clearedString[(clearedString.length - 1) - i]){
            proveArray.push('1'); 
        }else{
            proveArray.push('0');
        }
    }

    if(proveArray.indexOf('0') !== -1){
        console.log("NÃO É");
        resultDiv.textContent = `${inputData} is not a palindrome`;
    }else{
        console.log("É");
        resultDiv.textContent = `${inputData} is a palindrome`;
    } 
}

function verifyAndRun(){
    if(input.value === ""){
        alert('Please input a value');
    }else{
        allInOne(input);
    }
}

buttonCheck.addEventListener('click',()=>{verifyAndRun()});