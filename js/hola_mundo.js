var fun = function () {
    var myString = "Hola";
    //myString = 2;
    var myNumber = -15.05;
    var myBoolean = true;
    //-------------------------//
    var myAny;
    myAny = 3;
    myAny = "Hola";
    console.log(myAny);
    //-------------------------//
    var myUndefined;
    console.log(myUndefined);
    //--------------------------//
    var myUnion;
    function imprime(s) {
        console.log(s);
    }
    if (myUnion) {
        imprime("Mi union contiene ".concat(myUnion));
    }
    else {
        imprime("Variable no definida");
    }
    console.log("El contenido de la variable union es ".concat(myUnion));
    var stringForzada = "";
    //Método 1
    if (myUnion)
        stringForzada = myUnion;
    else
        stringForzada = "";
    //Método 2
    stringForzada = myUnion ? myUnion : "";
    //Método 3
    imprime(myUnion ? myUnion : "");
    //Método 4
    imprime(myUnion || "");
    //-------------------------------///
    var myArreglo = [];
    myArreglo[0] = "hola";
    myArreglo[1] = 3;
    console.log(myArreglo);
    var josé = {
        nombre: "Jose",
        edad: 0,
    };
    console.log(josé);
    var f = function (obj) {
        console.log("".concat(obj.nombre, " tiene ").concat(obj.edad, " a\u00F1os"));
    };
    f(josé);
    var emoji = "Hola 🙍";
    console.log(emoji);
    var myEnum = "Lunes";
    console.log(myEnum);
    //-----------------------------------//
    var Automovil = /** @class */ (function () {
        function Automovil(modelo, color) {
            if (color === void 0) { color = "Azul"; }
            this.modelo = Number(modelo) > 1990 ? 1988 : modelo;
            this.color = color;
        }
        return Automovil;
    }());
    var vocho = new Automovil(2024, "Rojo");
    console.log("El vocho es ".concat(vocho.color, " y del a\u00F1o ").concat(vocho.modelo));
};
fun();
