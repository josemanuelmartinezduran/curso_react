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
        function Automovil(modelo, color, placa) {
            if (color === void 0) { color = "Azul"; }
            this.modelo = modelo;
            this.color = color;
            this.placa = placa;
            this.modelo = Number(modelo) > 1990 ? 1988 : modelo;
        }
        Automovil.prototype.getPlaca = function () {
            return this.placa;
        };
        Automovil.prototype.setPlaca = function (placa) {
            if (placa.length > 5 && placa.length < 8) {
                this.placa = placa;
            }
            return;
        };
        return Automovil;
    }());
    var vocho = new Automovil(2024, "Rojo", "TUM2025");
    console.log("El vocho es ".concat(vocho.color, " y del a\u00F1o ").concat(vocho.modelo));
    console.log("la placa es ".concat(vocho.getPlaca()));
};
var a = {
    nombre: "Jose"
};
var Helado = /** @class */ (function () {
    function Helado(t, nombre) {
        this.t = t;
        this.nombre = nombre;
    }
    Helado.prototype.getPrice = function () {
        console.log("El precio es: ".concat(this.t.getPrice() + 3));
    };
    ;
    return Helado;
}());
var Chocolate = /** @class */ (function () {
    function Chocolate() {
    }
    Chocolate.prototype.getPrice = function () {
        return 5;
    };
    return Chocolate;
}());
var Coco = /** @class */ (function () {
    function Coco(t) {
        this.t = t;
    }
    Coco.prototype.getPrice = function () {
        return this.t.getPrice() + 1;
    };
    return Coco;
}());
var Mermelada = /** @class */ (function () {
    function Mermelada(t) {
        this.t = t;
    }
    Mermelada.prototype.getPrice = function () {
        return this.t.getPrice() + 1.5;
    };
    return Mermelada;
}());
var f = function () {
    var h = new Helado(new Mermelada(new Coco(new Coco(new Chocolate))), "Helado de coco");
    console.log("El helado ".concat(h.nombre, " "));
    h.getPrice();
};
f();
