import App from "../App";
import {data} from "./data";

class Data {
  //1. La ciudad con mayor población
  mayorPoblacion(): void {
    console.log(
      `--------------- Ciudad con mayor cantidad de población --------------- \n \n`
    );

    let mayor: {"2022": number; name: string}[];

    mayor = data.sort((mayor, cantidad) => {
      return Number(mayor[2022]) < cantidad[2022] ? 1 : -1;
    });

    let resultadoMayor = data.find(() => {
      return mayor;
    });

    console.log(resultadoMayor);
  }

  //2. La ciudad con menor población
  menorPoblacion(): void {
    console.log(
      `--------------- Ciudad con menor cantidad de población --------------- \n \n`
    );

    let menor: {"2022": number; name: string}[];

    menor = data.sort((menor, habitantes) => {
      return Number(menor[2022]) > habitantes[2022] ? 1 : -1;
    });

    let resultadoMenor = data.find(() => {
      return menor;
    });

    console.log(resultadoMenor);
  }

  //3. Todas las ciudades ordenadas alfabéticamente
  ciudadesOrdenadas(): void {
    console.log(
      "-------------------- Ciudades ordenadas alfabeticamente --------------\n \n"
    );

    for (let i: number = 0; i < data.length; i++) {
      data.sort((ordenando, alfabeticamente) =>
        ordenando.name.localeCompare(alfabeticamente.name)
      );
      console.log(data[i]);
    }
  }

  //4. Todas las ciudades ordenadas de mayor a menor cantidad de población
  ciudadesDeMayorAMenor() {
    console.log(
      "------------- Ciudades ordenadas de mayor a menor -----------\n \n"
    );
    let ordenMayorAMenor: {"2022": number; name: string}[];

    for (let i: number = 0; i < data.length; i++) {
      ordenMayorAMenor = data.sort((comparando, poblacion) => {
        return Number(comparando[2022]) < poblacion[2022] ? 1 : -1;
      });

      console.log(ordenMayorAMenor[i]);
    }
  }
}

export {Data};
