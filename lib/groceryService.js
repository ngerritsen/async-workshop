const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Manderin' },
  { id: 4, name: 'Chocolate' },
  { id: 5, name: 'Milk' },
  { id: 6, name: 'Noga' },
  { id: 7, name: 'Strawberries' },
  { id: 8, name: 'Chicken' }
];

/**
 * @typedef {Object}  Item
 * @property {number} id
 * @property {string} name 
 */

/**
 * Get's the grocery item with the provided id
 *
 * @param {number}    id 
 * @param {Function}  [callback]
 * @returns {Promise.<(Item|null)>}
 */
function get(id, callback) {
  const item = items.find(item => item.id === id) || null;

  const promise = delay(randomMs())
    .then(() => item);

  return handleCallbackOrPromise(promise, callback);
}
      
/**
 * Set's a new grocery item with the provided name and returns the id.
 *
 * @param {string}    name 
 * @param {Function}  [callback]
 * @returns {Promise.<number>}
 */
function set(name, callback) {
  const promise = delay(randomMs())
    .then(() => {
      const exists = Boolean(items.find(item => item.name === name));

      if (exists) {
        throw new Error(`Item with name ${name} already exists.`);
      }

      const id = getNextId();

      items.push({ name, id });

      return id;
    });

  return handleCallbackOrPromise(promise, callback);
}

/**
 * @returns {number}
 */
function getNextId() {
  return Math.max(...items.map(item => item.id)) + 1;
}

/**
 * @returns {number}
 */
function randomMs() {
  return Math.random() * 1000;
}

/**
 * 
 * @param {Promise}   promise 
 * @param {Function}  [callback] 
 * @returns {(Promise|undefined)}
 */
function handleCallbackOrPromise(promise, callback) {
  if (!callback) return promise;

  promise
    .then(value => callback(null, value))
    .catch(error => callback(error));
}

/**
 * @param {number}  ms
 * @returns {Promise}
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { get, set };
