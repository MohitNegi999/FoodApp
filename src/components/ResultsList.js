import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
//component
import ResultDetails from './ResultDetails';
const ResultsList = ({ title, results ,navigation}) => {

  if(!results.length) return null;

  return (
    <View style={styles.viewStyling}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>{navigation.navigate('Result', {id: item.id})}}>
              <ResultDetails style={styles.resultStyling} result={item}/>
            </TouchableOpacity>
          );
        }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,

  },
  viewStyling:{
    marginBottom: 5,
    flex:1,
    marginLeft: 10,
  },
});

export default withNavigation(ResultsList);
