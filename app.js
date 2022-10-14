
               // navbar drop down button


const toggleButton = document.getElementsByClassName("toggle-button")[0];
const nav = document.getElementsByClassName ("navbar-links")[0];

toggleButton.addEventListener("click", () => {
   nav.classList.toggle("active")
}); //this will either drop or put up the hamburger menu when clicked upon

               // Crypto Calculator 


const btn = document.getElementsByClassName("input-btn")[0];

btn.addEventListener("click", () => { 

let coinPrice = document.getElementById("coin_price").value;
let amountInvested = document.getElementById("amount_invested").value;
let targetPrice = document.getElementById("target_price").value;

let roi = (targetPrice / coinPrice)* amountInvested;

let total= document.getElementById("potential").value =   roi.toLocaleString('en-US', {
   style: "currency",
   currency: "USD",
 });
let profit = document.getElementById("profit_loss").value =  (roi - (amountInvested *1)).toLocaleString('en-US', {
   style: "currency",
   currency: "USD",
 });
}); 

               //Staking Calculator


const button = document.getElementsByClassName("input-btn2")[0];

button.addEventListener("click", () => { 

   let stakingAmount = document.getElementById("staking_amount").value;
   let apy = document.getElementById("apy").value; 
   let duration = document.getElementById("months").value;

   let yearlyRewards = (apy / 100) * stakingAmount;
   let monthlyRewards = ( yearlyRewards / 12) * duration;
   
   let yield = document.getElementById("yield").value = monthlyRewards.toLocaleString('en-US', {
      maximumFractionDigits: 2
    });
   let sum = document.getElementById("total_amount").value = (monthlyRewards + (stakingAmount *1)).toLocaleString('en-US', {
      maximumFractionDigits: 2
    });
});