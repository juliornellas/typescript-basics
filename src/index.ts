// 1ª PARTE

/**
 * TSCONFIG.JSON
 * 
 * 1 STEP
 * On terminal, run: tsc --init
 * Generate the tsconfig.json
 * 
 * 2 STEP
 * Following the path structure defined before start, you should define new paths to the folders:
 * "rootDir": "./src",
 * "outDir": "./dist/js", 
 * 
 * 3 STEP
 * On terminal, run: tsc
 * And the compilation is done and the archives will be created, according the STEP 2!
 * 
 * 4 STEP Optional
 * Also, you can define the version of javascript to compile the code. The ES3 version is the oldest able to run in typescript
 * "target": "es2016",
 * 
 * 5 STEP Optional
 * On terminal, run: tsc -w
 * So, it will run permanently
 */

// 2ª PARTE

/**
 * Definição de variável
 * INFERÊNCIA x ANNOTATION
 */

// Inferência
let y = 12;

//Annotation
let z: number = 12;

// Tipagem de variavel
let n: number = 13;

// Não permite mudança de tipo. Ex.: Number para string.
// n = "string";

console.log(n);

/**
 * Tipos
 */
let firstName: string = "Saci";
let age: number = 33;
const isAdmin: boolean = true;

console.log(firstName);

firstName = "Tiradentes";

console.log(firstName);

/**
 * Array
 */
const myNumbers: number[] = [1,2,3];
const names: string[] = ['Chico Bento', 'Magali', 'Cebolinha'];

console.log(myNumbers);

//O typescript Detecta automaticamente os métodos aplicaveis
//Deixando visivel o erro em tempo real
// console.log(myNumbers.toUpperCase());
console.log(firstName.toUpperCase());

/**
 * Tuple
 * Padronização do array
 */
let tupla: [number, string, string[]] = [12, "texto", ["string 1", "string 2"]];
console.log("Tupla",typeof tupla);

const diversos: (boolean | string | number)[] = [true, 'Tiradentes', 14];
console.log("Diversos", typeof diversos);
 
/**
 * Object
 */
const user: {name: string, age:number} = {
    // firstName: "Chico",
    name: "Chico",
    age: 7
}
user.age = 9;
console.log(user);

//Acrescimos fora da estrutura definida, não são permitidos
// user.job = "Contador de histórias";

/**
 * Tipo ANY
 * Permite mudanças ao longo do código.
 * Porém, contra própria filosofia do typescript
 * Considerado má prática, salvo exceções
 */
let a:any = 0; //Ok
a = "Texto";
a = true;
a = {};
console.log("ANY", typeof a)

/**
 * Union Type
 * Solução correta ao Any
 * Possibilidade de tipos de dados diferentes para uma variavel
 */
let id: string | number = 13;
id = "h2rj23r48faf92";
// id = true; //Erro ao mudar para além dos tipos definidos

/**
 * TYPE ALIAS
 * Define-se um nome para um grupo de tipos
 * Facilidade para repetição no codigo
 */
type myTypeId = string | number;

let newId: myTypeId = 12;
newId = "j23HGF33nbd45";
// newId = false; //Erro ao mudar tipo pré-definido
let productId: myTypeId = "a2hj45";
// productId = true; //Erro


/**
 * ENUM
 * Define lista de valores categorizados
 */

//Ex.: Tamanho de algo
enum Size{
    P = "Pequeno",
    M = "Medio",
    G = "Grande"
}

let calca = {
    tipo: "Jeans",
    tamanho: Size.M
}

console.log("Calça", calca)

enum UserResponse {
    No = 0,
    Yes = 1,
    Maybe = 3
}
console.log("Resposta do usuario", UserResponse.Yes);
console.log("Resposta do usuario", UserResponse[1]);
console.log("Resposta do usuario", UserResponse[3]);
console.log("Resposta do usuario", UserResponse.Maybe);
console.log("ENUM UserResponse",UserResponse);

console.log("Tamanho roupa", Size["G"]);
console.log("Tamanho roupa", Size.G);

enum MixedTypes {
    No = 0,
    Yes = "Sim"
}
console.log("MixedTypes", MixedTypes);

/**
 * Literal types
 * Define-se um valor literal/fixo
 */

let auth: "autenticado";
// auth = "outro valor"; // Mesmo sendo variavel do tipo LET não é possível

//Possivel definir mais de 1 tipo por variavel
let online: "sim" | null;
online = null; //Ok
// online = true; //Erro

/**
 * Funções
 */
// Tipar os argumentos não é obrigatorio, ele realiza a função, mas o typescript alerta
function sum(a:number , b:number){
    return a + b;
}

console.log("Função soma", sum(12, 13));

//Tipar o RETURN
function whatsUp(name:string): string{
    return "Ola, " + name + ", tudo bem?";
}

console.log(whatsUp("Boto Cor de Rosa"));

// Retorno vazio
// Fica a criterio declarar o tipo como VOID
// function log(msg: string){
function log(msg: string): void{
    console.log('Log: ',msg);
}

log('Acesso restrito');

//Argumentos opcionais
// Para colocar um argumento opcional basta acrescentar -> ?
function greeting(name: string, greet?: string){
    return greet ? console.log(`Ola ${name}, ${greet}`) : console.log(`Olá ${name}`);
}

greeting("Tiradentes")
greeting("Magali", "Saudações alvinegras!")

/**
 * INTERFACES
 * Define os padrões a serem utilizados quando a Interface for aplicada
 */
interface MathFunctionParams {
    n1: number,
    n2: number
}

//Type the function with the interface MathFunctionParams
//Ou seja, NUMS representa a interface MathFunctionParams
function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log('MathFunctionParams SUM', sumNumbers({n1: 1, n2: 2}));

//In other function
function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}
console.log('MathFunctionParams MUL', multiplyNumbers({n1: 4, n2: 2}));

//In variables
const someNumbers: MathFunctionParams = {
    n1: 13,
    n2: 12
}

console.log('MathFunctionParams VAR', someNumbers);
console.log('MathFunctionParams VAR * MUL', multiplyNumbers(someNumbers));

/**
 * GENERICS <>
 * Executar função sem determinar o tipo
 * Dentro de <> pode ser colocado qqr coisa, mto comum T e U
 * Faz referencia no parametro T[]
 */
function arrayItems <T>(arr: T[]){
// function arrayItems (arr: any){
    arr.forEach((item) => {
    // arr.forEach((item: any) => {
        console.log(`Item: ${item}`)
    })
}

const list1: number[] = [1, 2, 3];
const list2: string[] = ["x", "y", "z"];
const list3: (number | string | boolean)[] = [1, "j", true];

arrayItems(list1);
arrayItems(list2);
arrayItems(list3);

/**
 * Classes
 */
class User{

    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`Username: ${this.name}`)
    }

    showUserRole(canShow: boolean){
        return canShow ? 
                console.log(`The user role is ${this.role}`) : 
                console.log('Access denied!')
    }
}

const user1 = new User("Chico Bento", "Admin", true);
console.log('Class User', user1);

user1.showUserName();
user1.showUserRole(true);

console.log('Access name', user1.name)

/**
 * INTERFACES in Class
 * Control the behavior of the Class
 */
interface Vehicle{
    showBrand(): void
}

class Car implements Vehicle{
    #brand:string
    wheels

    constructor(brand: string, wheels: number){
        this.#brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`The brand vehicle is ${this.#brand}`)
    }

    showWheels(){
        console.log(`Wheels are ${this.wheels}`)
    }
}

const car = new Car('Fiat', 4)
car.showBrand();
// console.log(car.brand)
car.showWheels();

/**
 * INHERITANCE
 * Able to access all methods and properties from parent
 */
class SuperCar extends Car{
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}

const ford = new SuperCar('Truck', 4, 2.0);
console.log(ford); //name is private, will not appear
ford.showBrand();

/**
 * DECORATORS
 * Add properties or methods in a class
 * For configuration, go to: tsconfig.json file and uncomment "experimentalDecorators": true
 * Type @ to call the decorators
 */

//constructor decorator
function BaseParameters(){
    return function<T extends {new (...args: any[]):{}}>(constructor: T){
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}
//Call the decorator
@BaseParameters()

class Person{
    name

    constructor(name: string){
        this.name = name
    }
}

const newPerson = new Person("Magali");

console.log(newPerson)