/**
 * Created by hesham on 1/26/2018.
 **/
 // import {React} from 'react';
import React, {  Component } from 'react';
import {Text,View} from 'react-native';
 const Header=(props)=>{
     const{textStyle,viewStyle}=styles;
     return(
         <View style={viewStyle}>
             <Text style={textStyle}>{props.headersText}</Text>
         </View>
     );
     };
const styles={
    viewStyle:{
      backgroundColor:'#052d16',
        //move elements up and down
        // justifyContent:'flex-end'
        justifyContent:'center',
        // justifyContent:'flex-start'
alignItems:'center',
        height:60,
        paddingTop:15
    },
  textStyle:{
      fontSize:20
  }
};


export default Header;