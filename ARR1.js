"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var N = rls.questionInt("ingrese la dimension del arreglo: ");
var arr = new Array(N);
function arrNum(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        arr1[i] = rls.questionInt("ingrese numero en la posicion ".concat(i + 1, ": "));
    }
    var pos = 0;
    var neg = 0;
    var cero = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            cero++;
        }
        else if (arr[i] < 0) {
            neg++;
        }
        else {
            pos++;
        }
    }
    console.log("hay", cero, "ceros");
    console.log("hay", neg, "numeros negativos");
    console.log("hay", pos, "numeros positivos");
}
arrNum(arr);
