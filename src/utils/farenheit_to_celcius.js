/**
 * Author: Jake Seever
 * Date:7 January 2025
 * File: farenheit_to_celcius.js
 * Description: This script converts a farenheit value to celcius.
 */
'use strict'

// Function to convert the farenheit value to a celcius value. 
function convertFareheitToCelcius(farenheit) {
    const celcius = Math.round(((farenheit -32) * 5/9) * 10) /10; //Convert farenheit to celcius and round the number to 1 decimal place.
    return celcius; 
}

module.exports = { convertFareheitToCelcius };