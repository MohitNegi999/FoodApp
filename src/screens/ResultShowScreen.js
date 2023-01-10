import React,{useState, useEffect} from "react";
import {Text, StyleSheet,FlatList,Image} from 'react-native';
//api
import yelp from "../api/yelp";

const ResultShowScreen = ({navigation}) =>{
    
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');
    const getResult = async id =>{
        const response = await yelp.get(`./${id}`);
        setResult(response.data);
    };
    useEffect(()=>{
        getResult(id)
    },[]);


    if(!result) return null;

    return(
        <>
            <Text style={styles.textStyling}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return (
                        <Image
                            style = {styles.imageStyling}
                            source={{uri:item}}
                        />
                    )
                }}
            />

        </>
    )
}
const styles = StyleSheet.create({
   
    imageStyling:{
        alignSelf:'center',
        width: 300,
        height: 200,
        margin: 10,
        borderRadius: 5,
        
    },
    textStyling:{
        fontSize: 20,
        fontWeight:'bold',
        textAlign:'center',
    }

})
export default ResultShowScreen;