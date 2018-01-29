/**
 * Created by hesham on 1/28/2018.
 */
import React from 'react';
import {View,Text,Image} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
const AlbumDetail=({data})=>{
    const {image,title,artist,thumbnail_image}=data;
    const {imageStyle,headerTextStyle,thumbnailContainerStyle,containerStyle,thumbnailStyle}=styles;
return(
    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
<Image style={thumbnailStyle} source={{uri:thumbnail_image}}/>
            </View>
            <View style={containerStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        {/*<Image SOURCE={props.data.image}/>*/}
        </CardSection>
        <CardSection>
            <Image style={imageStyle} source={{uri:image}}/>
        </CardSection>
    </Card>
)
};
const styles={
    headerContentStyle:{
  flexDirection:'colmn',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        marginLeft:10,
        marginRight:10,

    },imageStyle:{
        height:300,
        flex:1,
        width:null,
        // justifyContent:'end'
    }


};
export default AlbumDetail;