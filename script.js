let input_ = document.getElementById('range-input');
let amount = document.getElementById('product-amount');
let amount_mobile = document.getElementById('product-amount-mobile');
let pages = document.getElementById('product-pages');
let check_box = document.getElementById('checked');


check_box.addEventListener('click',()=>{
  if(!check_box.checked){
    normal_price();
  }else if(check_box.checked){
    discounted_price();
  }
})

input_.addEventListener('input',()=>{
  if(!check_box.checked){
    normal_price();
  }else if(check_box.checked){
    discounted_price();
  }
})


function amount_answer(value){
  let discount = 0.25*value;
  let discount_amount = value-discount;
  return (discount_amount.toFixed(2));
}

function normal_price(){
  if(input_.value==1){
    amount.innerHTML = `$8.00`;
    amount_mobile.innerHTML = `$8.00`;
    pages.innerHTML = `10K`;
    input_.style.background = 'linear-gradient(to right, var(--Soft_Cyan) 0%, var(--Light_Grayish_Blue) 0%)';
  }else if(input_.value==2){
    amount.innerHTML = `$12.00`;
    amount_mobile.innerHTML = `$12.00`;
    pages.innerHTML = `50K`;
    input_.style.background = 'linear-gradient(to right, var(--Soft_Cyan) 25%, var(--Light_Grayish_Blue) 25%)';
  }else if(input_.value==3){
    amount.innerHTML = `$16.00`;
    amount_mobile.innerHTML = `$16.00`;
    pages.innerHTML = `100K`;
    input_.style.background = 'linear-gradient(to right, var(--Soft_Cyan) 50%, var(--Light_Grayish_Blue) 50%)';
  }else if(input_.value==4){
    amount.innerHTML = `$24.00`;
    amount_mobile.innerHTML = `$24.00`;
    pages.innerHTML = `500K`;
    input_.style.background = 'linear-gradient(to right, var(--Soft_Cyan) 75%, var(--Light_Grayish_Blue) 75%)';
  }else if(input_.value==5){
    amount.innerHTML = `$36.00`;
    amount_mobile.innerHTML = `$36.00`;
    pages.innerHTML = `1M`;
    input_.style.background = 'linear-gradient(to right, var(--Soft_Cyan) 100%, var(--Light_Grayish_Blue) 100%)';
  }
}

function discounted_price(){
  if(input_.value==1){
    amount.innerHTML = `$${amount_answer(8)}`;
    amount_mobile.innerHTML = `$${amount_answer(8)}`;
    pages.innerHTML = `10K`;
    input_.style.background = 'linear-gradient(to right, var(--Soft_Cyan) 0%, var(--Light_Grayish_Blue) 0%)';
  }else if(input_.value==2){
    amount.innerHTML = `$${amount_answer(12)}`;
    amount_mobile.innerHTML = `$${amount_answer(12)}`;
    pages.innerHTML = `50K`;
    input_.style.background = 'linear-gradient(to right, var(--Soft_Cyan) 25%, var(--Light_Grayish_Blue) 25%)';
  }else if(input_.value==3){
    amount.innerHTML = `$${amount_answer(16)}`;
    amount_mobile.innerHTML = `$${amount_answer(16)}`;
    pages.innerHTML = `100K`;
    input_.style.background = 'linear-gradient(to right, var(--Soft_Cyan) 50%, var(--Light_Grayish_Blue) 50%)';
  }else if(input_.value==4){
    amount.innerHTML = `$${amount_answer(24)}`;
    amount_mobile.innerHTML = `$${amount_answer(24)}`;
    pages.innerHTML = `500K`;
    input_.style.background = 'linear-gradient(to right, var(--Soft_Cyan) 75%, var(--Light_Grayish_Blue) 75%)';
  }else if(input_.value==5){
    amount.innerHTML = `$${amount_answer(36)}`;
    amount_mobile.innerHTML = `$${amount_answer(36)}`;
    pages.innerHTML = `1M`;
    input_.style.background = 'linear-gradient(to right, var(--Soft_Cyan) 100%, var(--Light_Grayish_Blue) 100%)';
  }
}