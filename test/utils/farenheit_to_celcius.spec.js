/**
 * Author: Jake Seever
 * Date:7 January 2025
 * File: farenheit_to_celcius.spec.js
 * Description: This script tests the farenheit to celcius conversion function.
 */
'use strict';

const { convertFareheitToCelcius } = require('../../src/utils/farenheit_to_celcius'); // Import the farenheit_to_celcius function from the farenheit_to_Celcius.js file

// The describe() function is a test suite that contains one or more tests
describe('Farenheit to Celcius Function', () => {

// Testing the conversion to verify 32 degrees farenheit equals 0 degrees celcius as it should.
  it('should equal 0 after conversion', () => {
    const result = convertFareheitToCelcius(32);
    expect(result).toBe(0.0);
  })

 // Testing the conversion with decimals, rounding to 1 decimal place. 
  it('should equal 37.8 after conversion', () => {
    let result = convertFareheitToCelcius(100);
    expect(result).toBe(37.8);
  }) 

// Testing the conversion with negative numbers using 0 degrees farenheit. 
  it('should equal -18.3 after conversion', () => {
    let result = convertFareheitToCelcius(-1);
    expect(result).toBe(-18.3);
  }) 
});