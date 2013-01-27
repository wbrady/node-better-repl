var repl = require('repl');

var r = repl.start({
  prompt: "> ",
  useGlobal: true,
});

r.context.c = function() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(i + " = " + arguments[i]);
    global["_" + i] = arguments[i];
  }
};
