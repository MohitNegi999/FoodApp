import React from "react";
import {View,Image,Text,StyleSheet} from "react-native";

const ResultDetails = ({result}) =>{
    return(
        <View style={styles.viewStyling}>
             <Image style={styles.imageStyling} source={{uri: result.image_url}}/>
             <Text style={styles.nameStyling}> {result.name}</Text>
             <Text style={styles.reviewStyling}>{result.rating}<Text style={styles.boldStyle}> Stars </Text> {result.review_count} <Text style={styles.boldStyle}>Reviews</Text></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    boldStyle:{
        color: 'grey'
    },
    viewStyling:{
        marginLeft: 10,
    },
    imageStyling:{
        width: 250,
        height: 150,
        margin: 5,
        borderRadius: 5,
        marginBottom: 5,
    },
    nameStyling:{
        fontWeight: 'bold',

    },
    reviewStyling:{
        marginLeft: 5,
        color:'black',
    }
})
export default ResultDetails;