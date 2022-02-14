function getPin(){
    const pin = Math.round(Math.random()* 10000);
    const pinString = pin +'';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log("hoi nai aber", pin )
        return getPin();
    }
}

function generatePin(){
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
    
}

document.getElementById('key-pad').addEventListener('click', function(e){
    const number = e.target.innerText;
    const calcInput = document.getElementById('type-input');
    if(isNaN(number)){
        if(number == "C"){
         calcInput.value = ''
        }
    }
    else{
    const previousNumber = calcInput.value;
    const  newNumber = previousNumber + number
    calcInput.value = newNumber
    }
});


function verifyPin(){
    const typeInput = document.getElementById('type-input').value;
    const pin = document.getElementById('display-pin').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(typeInput == pin){
        successMessage.style.display ="block";
        failError.style.display ="none";
    }
    else{
        successMessage.style.display ="none";
         failError.style.display ="block";
    }
}