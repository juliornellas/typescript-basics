"use strict";
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
let z = 12;
// Tipagem de variavel
let n = 13;
// Não permite mudança de tipo. Ex.: Number para string.
// n = "string";
console.log(n);
/**
 * Tipos
 */
let firstName = "Saci";
let age = 33;
const isAdmin = true;
console.log(firstName);
firstName = "Tiradentes";
console.log(firstName);
/**
 * Array
 */
const myNumbers = [1, 2, 3];
const names = ['Chico Bento', 'Magali', 'Cebolinha'];
console.log(myNumbers);
//O typescript Detecta automaticamente os métodos aplicaveis
//Deixando visivel o erro em tempo real
// console.log(myNumbers.toUpperCase());
console.log(firstName.toUpperCase());
/**
 * Tuple
 * Padronização do array
 */
let tupla = [12, "texto", ["string 1", "string 2"]];
console.log("Tupla", typeof tupla);
const diversos = [true, 'Tiradentes', 14];
console.log("Diversos", typeof diversos);
/**
 * Object
 */
const user = {
    // firstName: "Chico",
    name: "Chico",
    age: 7
};
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
let a = 0; //Ok
a = "Texto";
a = true;
a = {};
console.log("ANY", typeof a);
/**
 * Union Type
 * Solução correta ao Any
 * Possibilidade de tipos de dados diferentes para uma variavel
 */
let id = 13;
id = "h2rj23r48faf92";
let newId = 12;
newId = "j23HGF33nbd45";
// newId = false; //Erro ao mudar tipo pré-definido
let productId = "a2hj45";
// productId = true; //Erro
/**
 * ENUM
 * Define lista de valores categorizados
 */
//Ex.: Tamanho de algo
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
let calca = {
    tipo: "Jeans",
    tamanho: Size.M
};
console.log("Calça", calca);
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
    UserResponse[UserResponse["Maybe"] = 3] = "Maybe";
})(UserResponse || (UserResponse = {}));
console.log("Resposta do usuario", UserResponse.Yes);
console.log("Resposta do usuario", UserResponse[1]);
console.log("Resposta do usuario", UserResponse[3]);
console.log("Resposta do usuario", UserResponse.Maybe);
console.log("ENUM UserResponse", UserResponse);
console.log("Tamanho roupa", Size["G"]);
console.log("Tamanho roupa", Size.G);
var MixedTypes;
(function (MixedTypes) {
    MixedTypes[MixedTypes["No"] = 0] = "No";
    MixedTypes["Yes"] = "Sim";
})(MixedTypes || (MixedTypes = {}));
console.log("MixedTypes", MixedTypes);
/**
 * Literal types
 * Define-se um valor literal/fixo
 */
let auth;
// auth = "outro valor"; // Mesmo sendo variavel do tipo LET não é possível
//Possivel definir mais de 1 tipo por variavel
let online;
online = null; //Ok
// online = true; //Erro
/**
 * Funções
 */
// Tipar os argumentos não é obrigatorio, ele realiza a função, mas o typescript alerta
function sum(a, b) {
    return a + b;
}
console.log("Função soma", sum(12, 13));
//Tipar o RETURN
function whatsUp(name) {
    return "Ola, " + name + ", tudo bem?";
}
console.log(whatsUp("Boto Cor de Rosa"));
// Retorno vazio
// Fica a criterio declarar o tipo como VOID
// function log(msg: string){
function log(msg) {
    console.log('Log: ', msg);
}
log('Acesso restrito');
//Argumentos opcionais
// Para colocar um argumento opcional basta acrescentar -> ?
function greeting(name, greet) {
    return greet ? console.log(`Ola ${name}, ${greet}`) : console.log(`Olá ${name}`);
}
greeting("Tiradentes");
greeting("Magali", "Saudações alvinegras!");
//Type the function with the interface MathFunctionParams
//Ou seja, NUMS representa a interface MathFunctionParams
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log('MathFunctionParams SUM', sumNumbers({ n1: 1, n2: 2 }));
//In other function
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log('MathFunctionParams MUL', multiplyNumbers({ n1: 4, n2: 2 }));
//In variables
const someNumbers = {
    n1: 13,
    n2: 12
};
console.log('MathFunctionParams VAR', someNumbers);
console.log('MathFunctionParams VAR * MUL', multiplyNumbers(someNumbers));
/**
 * NARROWING
 * Checking type
 */ 
