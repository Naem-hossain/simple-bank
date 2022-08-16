

// step :- add addEventListener to  withdrow btn
document.getElementById('withdrow-btn').addEventListener('click', function(){
     // some condition for input fild 
    const withdrowFild = document.getElementById('withdrow-fild');
    if(isNaN(withdrowFild.value) || withdrowFild.value.length === 0){ 
        alert('please input a valid number')
        withdrowFild.value = '';
    }
    else{
     // step :- 2 get input fild value 
   const withdrowFild = document.getElementById('withdrow-fild');
   const withdrowFildString = withdrowFild.value;
   const withdrowFildAmount = parseFloat(withdrowFildString);
    //   step:- get the text in withdrow section 

   const  withdrowText = document.getElementById('withdrow-text')
   const withdrowTextString = withdrowText.innerText;
   const windowAmount = parseFloat(withdrowTextString);
   const sum = withdrowFildAmount + windowAmount;
   withdrowText.innerText = sum;

//    step:-3 calculate the total amount 

     const totalAmount = document.getElementById('total-amount');
     const totalAmountString = totalAmount.innerText;
     const totalAmountNow = parseFloat(totalAmountString);
     console.log(totalAmountNow)
      const sumTotal = totalAmountNow - withdrowFildAmount;
      totalAmount.innerText = sumTotal;



        // input fild emtey 
   withdrowFild.value = '';
    }
   
})