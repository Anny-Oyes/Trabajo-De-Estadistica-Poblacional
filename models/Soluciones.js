"use strict";
exports.__esModule = true;
exports.Data = void 0;
var data_1 = require("./data");
var Data = /** @class */ (function () {
    function Data() {
    }
    //1. La ciudad con mayor población
    Data.prototype.mayorPoblacion = function () {
        console.log("--------------- Ciudad con mayor cantidad de poblaci\u00F3n --------------- \n \n");
        var mayor;
        mayor = data_1.data.sort(function (mayor, cantidad) {
            return Number(mayor[2022]) < cantidad[2022] ? 1 : -1;
        });
        var resultadoMayor = data_1.data.find(function () {
            return mayor;
        });
        console.log(resultadoMayor);
    };
    //2. La ciudad con menor población
    Data.prototype.menorPoblacion = function () {
        console.log("--------------- Ciudad con menor cantidad de poblaci\u00F3n --------------- \n \n");
        var menor;
        menor = data_1.data.sort(function (menor, habitantes) {
            return Number(menor[2022]) > habitantes[2022] ? 1 : -1;
        });
        var resultadoMenor = data_1.data.find(function () {
            return menor;
        });
        console.log(resultadoMenor);
    };
    //3. Todas las ciudades ordenadas alfabéticamente
    Data.prototype.ciudadesOrdenadas = function () {
        console.log("-------------------- Ciudades ordenadas alfabeticamente --------------\n \n");
        for (var i = 0; i < data_1.data.length; i++) {
            data_1.data.sort(function (ordenando, alfabeticamente) {
                return ordenando.name.localeCompare(alfabeticamente.name);
            });
            console.log(data_1.data[i]);
        }
    };
    //4. Todas las ciudades ordenadas de mayor a menor cantidad de población
    Data.prototype.ciudadesDeMayorAMenor = function () {
        console.log("------------- Ciudades ordenadas de mayor a menor -----------\n \n");
        var ordenMayorAMenor;
        for (var i = 0; i < data_1.data.length; i++) {
            ordenMayorAMenor = data_1.data.sort(function (comparando, poblacion) {
                return Number(comparando[2022]) < poblacion[2022] ? 1 : -1;
            });
            console.log(ordenMayorAMenor[i]);
        }
    };
    return Data;
}());
exports.Data = Data;
