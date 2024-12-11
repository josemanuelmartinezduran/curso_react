const fun = () => {
    var myString:string = "Hola";
    //myString = 2;
    var myNumber:number = -15.05;
    var myBoolean:boolean = true;
    //-------------------------//
    var myAny:any;
    myAny = 3;
    myAny = "Hola";
    console.log(myAny);
    //-------------------------//
    var myUndefined:undefined;
    console.log(myUndefined);
    //--------------------------//
    var myUnion:string|undefined;
    function imprime(s:string) {
        console.log(s);
    }
    if (myUnion) {
        imprime(`Mi union contiene ${myUnion}`);
    }
    else {
        imprime("Variable no definida");
    }
    console.log(`El contenido de la variable union es ${myUnion}`)
    let stringForzada:string = "";
    //Método 1
    if(myUnion)
        stringForzada = myUnion;
    else
        stringForzada = ""
    //Método 2
    stringForzada = myUnion?myUnion:""
    //Método 3
    imprime(myUnion?myUnion:"");
    //Método 4
    imprime(myUnion||"");

//-------------------------------///
    const myArreglo:Array<String|Number> = [];
    myArreglo[0]="hola";
    myArreglo[1]=3;
    console.log(myArreglo);
//-----------------------------------//
interface Persona{
    nombre:String;
    edad:Number;
}
const josé:Persona = {
    nombre: "Jose",
    edad:0,
}
console.log(josé);

const f = (obj:Persona)=>{
    console.log(`${obj.nombre} tiene ${obj.edad} años`)
}
f(josé);

const emoji:String= "Hola 🙍";
console.log(emoji);

let myEnum:"Lunes"|"Martes"|"Miércoles" = "Lunes";
console.log(myEnum);

//-----------------------------------//
class Automovil{
    modelo:Number;
    color:String;
    constructor(modelo:Number, color:String="Azul"){
        this.modelo = Number(modelo)>1990?1988:modelo;
        this.color = color;
    }
}

const vocho = new Automovil(2024, "Rojo");
console.log(`El vocho es ${vocho.color} y del año ${vocho.modelo}`);
};
fun();
