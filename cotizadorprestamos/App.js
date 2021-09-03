/**
* @format
* @flow strict-local 
*/ 
import React, { useState, useEffect } from 'react';
import {
   SafeAreaView,
   StyleSheet,
   View,
   Text,
   StatusBar,
} from 'react-native';
import colors from './src/utils/colors';
import FORM from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import { CHAR_LEFT_CURLY_BRACE } from 'picomatch/lib/constants';

export default function App(){ 
  
const [capital,setCapital]=useState(null);
const [interes, setInteres]=useState(null);
const [months, setMonths]=useState(null);
const [total, setTotal]=useState(null);
const [errorMessage, setErrorMessage] = useState('');

useEffect(() => { 
  if (capital && interes && months) calculate(); 
  else reset(); 
}, 
[capital, interes, months]);
const calculate = () => { reset();
  if (!capital) { 
    setErrorMessage('Añade la cantidad que quieres solicitar'); } 
    else if (!interes) { 
      setErrorMessage('Añade el interes del prestamos'); 
    } else if (!months) { 
      setErrorMessage('Seleccióna los meses a pagar'); } 
      else { 
        const i = interes / 100; 
        const fee = capital / ((1 - Math.pow(i + 1, -months)) / i); 
        setTotal({ 
          monthlyFee: fee.toFixed(2).replace('.', ','), 
          totalPayable: (fee * months).toFixed(2).replace('.', ','), 
        }); 
      } 
    };
    const reset = () => { 
      setErrorMessage(''); 
      setTotal(null); 
    };

  return(
     <>
     <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.Header}>
          <Text style={styles.headAPP}>Cotizador de prestamos</Text>
          <FORM
            setCapital={setCapital}
            setInteres={setInteres}
            setMonths={setMonths}
          /> 
      </SafeAreaView> 
      <Result 
      capital={capital} 
      interes={interes} 
      months={months} 
      total={total} 
      errorMessage={errorMessage} 
      />
      <Footer></Footer> 
      </> 
      );
}
const styles = StyleSheet.create({
   Header:{
      backgroundColor:colors.PRIMARY_COLOR,
      height:200,
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
      alignItems:'center' 
    },
    headAPP:{
      fontSize:25,
      fontWeight:'bold',
      color:'#fff',
      marginTop:15,
    },
  }
)