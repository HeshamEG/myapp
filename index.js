import React, { Component } from 'react';
import Header from './src/component/Header'
import AlbumList from './src/component/AlbumList'
import { AppRegistry ,Text,View} from 'react-native';
import App from './App';
const AppTest=()=>{
    return(
        <View style={{flex:1}}>
        <Header headersText={'Album'}/>
            <AlbumList/>
        </View>
    )
}
AppRegistry.registerComponent('myapp', () =>AppTest);
