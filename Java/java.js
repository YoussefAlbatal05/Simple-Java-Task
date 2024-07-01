
var btns = document.querySelectorAll("#vinyls a") // defining buttons
var priceDivs = document.querySelectorAll(".price") // defining the dive which will carry the price
var totalPriceDivs = document.querySelector("#totalPriceDiv")
var btnTotalPrice = document.querySelector("#totalBtn")
var totalPrice = 0


btns.forEach(function(item , index) { 
      item.onclick = function(e){ // e is equal to item so its like event or function
      e.preventDefault() // to prevent the page from scrolling up every time you press on show price button
      item.getAttribute("price")
      priceDivs[index].innerHTML = item.getAttribute("price") + "$" // index is to access this specific div which is ( priceDivs ) here , cause there is a lot of divs in the code so index will make it specific
      totalPrice += +(item.getAttribute("price"))
    } 
})

btnTotalPrice.onclick = function() {
    totalPriceDivs.innerHTML = "Total Price : " + totalPrice + "$"
} 