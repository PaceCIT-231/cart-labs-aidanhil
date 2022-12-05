let currentPrice=0, itemCount=0

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */
   
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 

   //add 1 to the itemCount variable

itemCount = itemCount+1
console.log(itemCount)


   //add the correct price to the currentPrice variable

   if (cookie == "peanut butter") {
    currentPrice = currentPrice + 20
   } else if (cookie == "sandies"){
    currentPrice = currentPrice + 30
   } else if (cookie == "party press") {
    currentPrice = currentPrice + 35
   } else if (cookie == "chocolate chip") {
    currentPrice = currentPrice + 25
   }

   document.querySelector(".hoverText").innerHTML = currentPrice
   let checkout = reset(currentPrice)

   console.log(currentPrice) 
}

let checkout = prompt("Please leave your name and address for billing purposes.")

 {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    //window.alert(`You have a total of ${itemCount} items that will cost $${currentPrice}. Thank you for shopping with us`)
    window.prompt("Please provide your name and address. /n Thank you for shopping with us!")

}

let changableParagraph = document.getElementById("cartItems")

function darkMode() {
	// add your code here
    
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector("main").style.color = "white"
    document.querySelector("h1").style.color = "white"

}