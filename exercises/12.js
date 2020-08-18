const groceryService = require('../lib/groceryService');

const NEW_ITEM_NAMES = ['Toilet paper', 'Macaroni', 'Banana', 'Coffee', 'Chicken'];

/**
 * Exercise 4.
 *
 * Add the list of items above to the service in the given order, if the item is added get the item
 * and log it.
 * 
 * If an item already exists an (async) error is thrown, in that case log that error.
 *
 * - You have to use the Promise API in combination with async/await.
 * - You have to assume the array is a black box, you cannot use specific items.
 * - You don't have to handle errors when getting the item back.
 */
