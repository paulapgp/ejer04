var miModulo = require("../index.js");

describe("Included matchers:", function() {
  var resultado;

it("and so is a spec", function(){
resultado = miModulo.sumar(4, 5);
expect(resultado).toBe(9);
});
  });
