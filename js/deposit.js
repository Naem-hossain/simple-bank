

document.getElementById('deposit-btn').addEventListener('click', function(){
    // step:1  get the input vlue
    const inputfield = document.getElementById('input-fild');
    if(isNaN(inputfield.value) || inputfield.value.length === 0){ 
        alert('please input a valid number')
        inputfield.value = '';
    }
    else{
        const inputfield = document.getElementById('input-fild');
        const inputValueString = inputfield.value;
        const inputValue = parseFloat(inputValueString) 
    
        // step :- 2 get the inner text in deposit section
        const depositText = document.getElementById('deposit-text');
        const depositTextString = depositText.innerText;
        const depositAmount = parseFloat(depositTextString)
         const sum = inputValue + depositAmount
        depositText.innerText = sum ;
    
        // step:-3 set the amount in total balance section 
        const totalAmount = document.getElementById('total-amount');
        const totalAmountString = totalAmount.innerText;
        const totalAmountValue = parseFloat(totalAmountString);
        totalAmount.innerText = inputValue + totalAmountValue ;
         
        inputfield.value = '';
    }
    
})