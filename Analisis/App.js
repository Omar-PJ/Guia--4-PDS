/**
 * @format
 * @flow strict-local
 */

 import React, {useState,useEffect} from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import colors from './src/utils/colors';
 import Form from './src/components/Forms';
 import Footer from './src/components/Footer';
 import Result from './src/components/Result';
 export default function App(){
   const [nombre, setNombre] = useState(null);
   const [salario, setSalario] = useState(null);
   const [salarioNeto, setSalarioNeto] = useState(null);
   const [errorMessage, setErrorMessage] = useState("");
   useEffect(() =>{
     if (nombre && salario) {
       calculate();
     }
     else{
       reset();
     }},[nombre,salario]);
 
     const calculate = () => {
       reset();
       if (!nombre) {
         setErrorMessage('Debe incluir su nombre');
       }else if(!salario){
         setErrorMessage('Debe incluir su salario base');
       }else{
         const isss = salario*0.03;
         const afp = salario*0.04;
         const renta = salario*0.05;
         const deductions = isss+afp+renta;
         const total = salario - isss - afp - renta ;
         setSalarioNeto({
           montlhyTotal:total.toFixed(2).replace('.',','),
           montlhyDeductions:deductions.toFixed(2).replace('.',','),
         });
       }
     };
 
     const reset = () =>{
       setErrorMessage('');
       setSalarioNeto(null);
     };
 
   return(
     <>
     <StatusBar barStyle="light-content"/>
     <SafeAreaView style={styles.Header}>
       <Text style={styles.HeadApp}>Cálculo de salario</Text>
       <Form 
         setNombre = {setNombre}
         setSalario = {setSalario}
         
       />
     </SafeAreaView>
     <Result 
     nombre={nombre}
     salario={salario}
     salarioNeto = {salarioNeto}
     errorMessage={errorMessage}
     />
     <Footer></Footer>
     </>
   );
 }
 const styles = StyleSheet.create({
   Header:{
     backgroundColor:colors.PRIMARY_COLOR,
     height:240,
     borderBottomLeftRadius:30,
     borderBottomRightRadius:30,
     alignItems:'center'
   },
   HeadApp:{
     fontSize:25,
     fontWeight:'bold',
     color:'#fff',
     marginTop:15,
   }
 })