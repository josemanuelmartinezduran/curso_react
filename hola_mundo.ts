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
    constructor(public modelo:Number, public color:String="Azul", private placa:String){
        this.modelo = Number(modelo)>1990?1988:modelo;
    }

    getPlaca():String{
        return this.placa
    }

    setPlaca(placa:String):void{
        if(placa.length>5 && placa.length<8){
            this.placa = placa;
        }
       return; 
    }

}

const vocho = new Automovil(2024, "Rojo", "TUM2025");
console.log(`El vocho es ${vocho.color} y del año ${vocho.modelo}`);
console.log(`la placa es ${vocho.getPlaca()}`);
};

/* fun(); */

interface myInterface{
    nombre:String;
}

const a:myInterface = {
    nombre: "Jose"
}

/* interface Forma {
    getArea: () => number;
  }
  
  class Rectangle implements Forma {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square implements Forma {
    public constructor(protected width: number) {
      
    }

    public getArea(): number {
        return this.width * this.width;
      }
  
    // getArea gets inherited from Rectangle
  }

const f = ()=>{
    const a_r:Rectangle[] = [new Rectangle(2, 4), new Rectangle(5, 3)];
    a_r.forEach((r:Rectangle)=>{console.log(`El área del rectangulo es ${r.getArea()}`)});
    const a_s:Square[] = [new Square(3), new Square(7)];
    a_s.forEach((s:Square) => {console.log(`El área del cuadrado es: ${s.getArea()}`)});
    const a_f:Forma[] = [new Rectangle(2, 4), new Rectangle(5, 3), new Square(3), new Square(7)]
    a_f.forEach((f:Forma) => {console.log(`El área de la forma es: ${f.getArea()}`)});
}
f();
 */

/* class Generico<T>{
    variable:T;   
}

const f = ()=>{
    const g:Generico<String> = new Generico();
    g.variable = "String";
    const a:Array<number> = new Array();
    a.push(4);
} */

//Singleton

/* class Singleton{
    static a = new Singleton("");
    private constructor(public nombre:String){}
    static getInstance():Singleton{
        return Singleton.a;
    }
}

const f = () => {
    const s:Singleton = Singleton.getInstance();
    const t:Singleton = Singleton.getInstance();
    const u:Singleton = Singleton.getInstance();
    u.nombre = "Prueba de singleton";
    console.log(`El valor de s es ${s.nombre}`)
    console.log(`El valor de t es ${t.nombre}`)
    console.log(`El valor de u es ${u.nombre}`)
    t.nombre = "Cambio de nombre";
    console.log(`El valor de s es ${s.nombre}`)
    console.log(`El valor de t es ${t.nombre}`)
    console.log(`El valor de u es ${u.nombre}`)
}

f(); */

//Decorador
interface Topping{
    getPrice:()=>number;
}

class Helado{
    constructor(protected t:Topping, public nombre){}
    getPrice(){
        console.log(`El precio es: ${this.t.getPrice() + 3}`)
    };
}

class Chocolate implements Topping{
    getPrice():number{
        return 5;
    }
}

class Coco implements Topping{
    constructor(public t:Topping){}
    getPrice():number{
        return this.t.getPrice() + 1;
    }
}

class Mermelada implements Topping{
    constructor(public t:Topping){}
    getPrice():number{
        return this.t.getPrice() + 1.5;
    }
}

const f = ()=>{
    const h:Helado = new Helado(new Mermelada(new Coco(new Coco(new Chocolate))), 
    "Helado de coco");
    console.log(`El helado ${h.nombre} `);
    h.getPrice();
}

f();