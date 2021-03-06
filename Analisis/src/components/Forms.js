import React from 'react'; 
import {StyleSheet, TextInput, View} from 'react-native'; 
import colors from '../utils/colors'; 
export default function Form(props) {
    const{setNombre, setSalario} = props; 

    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput 
                placeholder="Nombre"
                keyboardType="default"
                style={styles.input}
                onChange={(e)=>setNombre(e.nativeEvent.text)}
            />
            </View>
            <TextInput 
                placeholder="Salario base"
                keyboardType="numeric"
                style={styles.input}
                onChange={(e)=>setSalario(e.nativeEvent.text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({ 
    viewForm: { 
      position: 'absolute', 
      bottom: 0, 
      width: '85%', 
      paddingHorizontal: 50, 
      backgroundColor: colors.PRIMARY_COLOR_DARK, 
      borderRadius: 30, 
      height: 180, 
      justifyContent: 'center', 
    }, 
    viewInputs: { 
      flexDirection: 'row', 
    }, 
    input: { 
        textAlign:'center',
    justifyContent:'center',
      height: 50, 
      backgroundColor: '#fff', 
      borderWidth: 1, 
      borderColor: colors.PRIMARY_COLOR, 
      borderRadius: 5, 
      width: '110%', 
      marginRight: 5, 
      marginLeft: -5, 
      marginBottom: 10, 
      color: '#000', 
      paddingHorizontal: 20, 
    }, 
  });