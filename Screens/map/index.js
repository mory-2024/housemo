import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    ScrollView
  } from 'react-native';
  import React, {useState} from 'react';
  import { COLORS } from '../../variables/color';
  
  const SearchResultScreenMap = ({navigation}) => {
  
    return (
      <View style={styles.container}>
        <StatusBar animated={true} backgroundColor="#0b3155" />
          <View
          style={{
            width: '100%',
            height: 30,
            backgroundColor: '#0b3155',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: "bold"}}>Resultats sur carte</Text>
        </View>
                <TouchableOpacity
                style={styles.header}
                onPress={() => navigation.navigate("SearchResultScreen")}>
                <View style={{justifyContent: 'center'}}>
                <Image source={require('../../Assets/chevron-left.png')} />
                </View>
                <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                <Text style={styles.headerText}>Voir la liste</Text>
                </View>
            </TouchableOpacity>
            <Image source={require('../../Assets/maps.png')} style={{width: "100%", height: "100%"}} resizeMode='contain'/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: "100%"
    },
    selection: {
      borderBottomWidth: 1,
      borderBottomColor: COLORS.input_border_color,
    },
    header: {
        flexDirection: 'row',
        top: 10,
        marginHorizontal: 10
      },
      headerText: {
        marginHorizontal: 5,
        color: COLORS.black,
      },
  });
  
  export default SearchResultScreenMap;
  