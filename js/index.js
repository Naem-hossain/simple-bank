console.log('added javascript')

document.getElementById('login-btn').addEventListener('click', function(){
 const emailFild =  document.getElementById('email-fild');
  const emailValue = emailFild.value;
 const passwordFild = document.getElementById('password-fild');
 const passwordValue = passwordFild.value;
 console.log(emailValue , passwordValue)
 if(emailValue === 'sonarbangla@gmail.com' && passwordValue === 'sonarbangla'){
    window.location.href = 'bank.html'
        // console.log('bangladesh is best')
 }
 else{
    alert('toi password vole gecos.toke ami tejjo sontan gosona korlam.')
 }
})