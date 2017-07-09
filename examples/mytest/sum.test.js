import {sum} from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).not.toBe(4);
});

test('object assignment',()=>{
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test("test true null",()=>{
  const true1 = true;
  expect(true1).toBeTruthy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});


test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex', 
  'trash bags', 
  'paper towels', 
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

//mock test ---------------------------------------------
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn();
forEach([0, 9], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(9);

//.mock property-----------------------------------------------------
const myMock = jest.fn();

const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();

console.log(myMock.mock.instances);
// > [ <a>, <b> ]

//-----------------------------------------------------------------
// The function was called exactly once
expect(myMock.mock.calls.length).toBe(2);

// The first arg of the first call to the function was 'first arg'
//expect(myMock.mock.calls[0][0]).toBe('first arg');

// The second arg of the first call to the function was 'second arg'
//expect(myMock.mock.calls[0][1]).toBe('second arg');

// This function was instantiated exactly twice
//expect(myMock.mock.instances.length).toBe(2);

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
//expect(myMock.mock.instances[0].name).toEqual('test');


// Mock Return Values --------------------------------------
const myMock2 = jest.fn();
console.log(myMock2());
// > undefined

myMock2.mockReturnValueOnce(10)
 .mockReturnValueOnce('x')
 .mockReturnValue(true);

console.log(myMock2(), myMock2(), myMock2(), myMock2());
// > 10, 'x', true, true

//
const filterTestFn = jest.fn();
// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false);

const result = [11, 12].filter(filterTestFn);

console.log(result);
// > [11]
console.log(filterTestFn.mock.calls);
// > [ [11], [12] ]

// Mock Implementations------------------------------
const myMockFn = jest.fn(cb => cb(null, true));

myMockFn((err, val) => console.log(val));
// > true

myMockFn((err, val) => console.log(val));
// > true


//------------------------------