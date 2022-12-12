const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        // add a cookie (string) to the items array
this.items.push(cookie)

        //add the price (number) to the currentPrice properties
this.currentPrice=this.currentPrice + price },
clear:function() {
        //reset the currentPrice and items properties
        this.currentPrice= 0 
        this.items= []

    },
}

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

   document.querySelector(".hoverText").innerHTML = cart.currentPrice
   console.log(cart)

   document.getElementById("cartItems").innerHTML=cart.items.length
}

let checkout = prompt("Please leave your name and address for billing purposes.")
functioncheckout()
 {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    //window.alert(`You have a total of ${itemCount} items that will cost $${currentPrice}. Thank you for shopping with us`)
    window.alert('Item Count: $ {cart.items.length} Total Cost: $ {cart.currentPrice}')
    prompt("Please provide your name and address. /n Thank you for shopping with us!")

    cart.clear()

}

let changableParagraph = document.getElementById("cartItems")

function darkMode() {
	// add your code here
    
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector("main").style.color = "white"
    document.querySelector("h1").style.color = "white"

}


