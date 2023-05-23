// Created by: Ethan Cleasby
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-ASSIGNMENT-4-MILKSHAKE-SHACK/sw.js", {
    scope: "/ICS2O-ASSIGNMENT-4-MILKSHAKE-SHACK/",
  })
}

/**
 * This function to change the selectors options when a selection is made.
 */
function toppingType() {

  //Referencing the first selector
  let toppingType = document.getElementById("topping-type").value

  if (toppingType == "whip-cream") {
    document.toppingType.topping.options[0] = new Option("Vanilla", "vanilla", true, false)
    document.toppingType.topping.options[1] = new Option("Chocolate", "chocolate", false, false)
    document.toppingType.topping.options[2] = new Option("Strawberry", "strawberry", false, false)
    document.toppingType.topping.options[3] = new Option("Blueberry", "blueberry", false, false)
    document.toppingType.topping.options[4] = new Option("Peanutbutter Cups", "peanutbutter-cups", false, false)
    document.toppingType.topping.options[5] = new Option("Cookie Dough", "cookie-dough", false, false)
    document.toppingType.topping.options[6] = new Option("Mango", "", false, false)
  }

  else if (toppingType == "cherry") {
    document.toppingType.topping.options[0] = new Option("Vanilla", "vanilla", true, false)
    document.toppingType.topping.options[1] = new Option("Chocolate", "chocolate", false, false)
    document.toppingType.topping.options[2] = new Option("Strawberry", "strawberry", false, false)
    document.toppingType.topping.options[3] = new Option("Blueberry", "blueberry", false, false)
    document.toppingType.topping.options[4] = new Option("Peanutbutter Cups", "peanutbutter-cups", false, false)
    document.toppingType.topping.options[5] = new Option("Cookie Dough", "cookie-dough", false, false)
    document.toppingType.topping.options[6] = new Option("Mango", "", false, false)
  }

  else {
    document.toppingType.topping.options[0] = new Option("Vanilla", "vanilla", true, false)
    document.toppingType.topping.options[1] = new Option("Chocolate", "chocolate", false, false)
    document.toppingType.topping.options[2] = new Option("Strawberry", "strawberry", false, false)
    document.toppingType.topping.options[3] = new Option("Blueberry", "blueberry", false, false)
    document.toppingType.topping.options[4] = new Option("Peanutbutter Cups", "peanutbutter-cups", false, false)
    document.toppingType.topping.options[5] = new Option("Cookie Dough", "cookie-dough", false, false)
    document.toppingType.topping.options[6] = new Option("Mango", "", false, false)
  }
}

//function to calculate the cost
function price() {

  //Referencing the first selector
  let toppingType = document.getElementById("topping-type").value

  //Referencing the third selector
  let milkshakeSize = document.getElementById("milkshake-size").value

  //All price variables 
  var price = 0
  const WHIPCREAMPRICE = 0.80
  const CHERRYPRICE = 0.30
  const BANANAPRICE = 0.60
  const CHOCOLATESAUCEPRICE = 0.60
  const GUMMIESPRICE = 1.50
  const REGULAR = 1
  const LARGE = 1.5
  const EXTRA = 2

  //Whip Cream price
  if (toppingType == "whipcream") {
    price = WHIPCREAMPRICE
    console.log(price)
  }

  //Cherry price
  else if (toppingType == "cherry") {
    price = CHERRYPRICE
    console.log(price)
  }

  //banan price
  else {
    price = BANANAPRICE
    console.log(price)
  }

  //Multiplier if the size is large
  if (milkshakeSize == "large") {
    price = price * LARGE
    console.log(price)
  }
  //Multiplier if the size is extra large
  else if (milkshakeSize == "extra-large") {
    price = price * EXTRA
    console.log(price)
  }

  //Multiplier if the size is regular
  else {
    price == price
  }

  //Processes for the tax percentage and total cost
  const tax = price * 0.13
  const total = price + tax

  //Output of all the information
  document.getElementById("output").innerHTML = "Price before tax: $" + price.toFixed(2) + "<br>" + "<br>" + "Amount paid in tax: $" + tax.toFixed(2) + "<br>" + "<br>" + "Price with 13% taxrate: $" + total.toFixed(2)
}