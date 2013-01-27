better-repl
================

Improved REPL for Node.js inspired by [CompoundJS](http://compoundjs.com/)

## Install
    $ npm install better-repl

## Usage

    $ repl
    >
    
bette-repl provides the same Node.js REPL with some added functionality.

### c

better-repl adds a global function `c` which prints out every argument its called with and sets a global variable (_0, 
_1, _2, etc.) for each argument. This is very useful in the REPL when playing around with async functions. Instead of 
having to nest complex async functions in one command in the REPL, better-repl allows you to go line by line calling the 
next function.

For example say you have two async functions `async1` and `async2`. Normally you would write

    $ node
    > async1('foo', function(x, y) {
    ... async2(x, y, function(z) {
    ..... console.log(z);
    ..... });
    ... });
    'bar'
    
But with better-repl you don't have to nest anything

    $ repl
    > async1('foo', c);
    _0 = 'foo'
    _1 = 'bar'
    
    > async2(_0, _1, c);
    _0 = 'bar'
    
    > console.log(_0);
    'bar'
