import {StyleSheet} from 'react-native';
import {colors} from "../../styles/globalstyles";

export const styles = StyleSheet.create({
buttonPrimary:{
backgroundColor:colors.primary,
borderRadius: 5,
margin: 10,
},

buttonSecondary:{
    backgroundColor:colors.secondary,
    borderRadius: 5,
    margin: 10,
},

buttonThird:{
    backgroundColor:colors.third,
    borderRadius: 5,
    margin: 10,
},

text:{
    fontSize: 20,
    textAlign: 'center',
    color:"#ffffff"
}


})