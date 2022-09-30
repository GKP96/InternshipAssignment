//alert("Gautam Kumar Pandey");

let b  = document.getElementById('formbtnn');

b.addEventListener('click',()=>{
    let name = document.getElementById('nameGautam').value;
    let amount = document.getElementById('amount500').value;
    let num = parseInt(amount);
//    window.history.back();
     if(num>=500){
        window.location.href = "thankyou.html"; 
     }  else{
        alert("Minimum required amount is $500");
     }
    
});
