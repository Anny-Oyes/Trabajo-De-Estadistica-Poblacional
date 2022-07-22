import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {data} from './models/data'
import {Data} from './models/Soluciones'

export default function App() {
  const soluciones = new Data();

  console.log("--------------------------------Areglo original ------------------------------ \n \n");

    console.log(data);
    
    console.log(soluciones.mayorPoblacion() === undefined);
    console.log(soluciones.menorPoblacion() === undefined);
    console.log(soluciones.ciudadesOrdenadas() === undefined);
    console.log(soluciones.ciudadesDeMayorAMenor() === undefined);
    
    


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
