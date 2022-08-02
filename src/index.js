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
// Tipagem de variavel
var n = 13;
var n2 = 18;
// Não permite mudança de tipo. Ex.: Number para string.
// n = "string";
console.log(n);
// 2ª PARTE
/**
 * Definição de variável
 * INFERÊNCIA x ANNOTATION
 */
// Inferência
var y = 12;
//Annotation
var z = 12;
/**
 * Tipos
 */
var firstName = "Saci";
var age = 33;
var isAdmin = true;
console.log(firstName);
