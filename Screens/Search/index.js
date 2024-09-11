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
import {Input, Icon} from '@rneui/themed';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';
import {Picker} from '@react-native-picker/picker';

const SearchScreen = ({navigation}) => {
  const [selectedMode, setSelectedMode] = useState();
  const [selectedChambre, setSelectedChambre] = useState();
  const [typeLocation, setTypeLocation] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [commune, setCommune] = useState();
  const [map, setMap] = useState(false);

  console.log("test", typeLocation)

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0b3155" />
      {/* <View
        style={{
          width: '100%',
          height: 30,
          backgroundColor: '#e65f1e',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '25%',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Acheter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '25%',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Louer</Text>
        </TouchableOpacity>
      </View> */}
        <View
        style={{
          width: '100%',
          height: 30,
          backgroundColor: '#0b3155',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Rechercher votre logement</Text>
      </View>
      <TouchableOpacity
                style={styles.header}
                onPress={() => navigation.goBack()}>
                <View style={{justifyContent: 'center'}}>
                <Image source={require('../../Assets/chevron-left.png')} />
                </View>
                <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                <Text style={styles.headerText}>retour</Text>
                </View>
            </TouchableOpacity>
      <ScrollView>
        <View style={{margin: 10}}>
        <View style={[styles.selection, {width: "95%", alignSelf: "center", margin: 10}]}>
                    <Picker
                        selectedValue={selectedMode}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedMode(itemValue)
                        }
                        >
                        <Picker.Item label="Choisir votre type de logement" value="choixLogement" />
                        <Picker.Item label="Appartement" value="appartement" />
                        <Picker.Item label="Villa" value="villa" />
                    </Picker>
          </View>
          <View style={[styles.selection, {width: "95%", alignSelf: "center", margin: 10}]}>
                    <Picker
                        selectedValue={selectedChambre}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedChambre(itemValue)
                        }
                        >
                        <Picker.Item label="Choisir le nombre de pièce" value="choixChambres" />
                        <Picker.Item label="Une pièce" value="1" />
                        <Picker.Item label="Deux pièces" value="2" />
                        <Picker.Item label="Trois pièces" value="3" />
                        <Picker.Item label="Quatre pièces" value="3" />
                    </Picker>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ width: "50%"}}>
                <Input
                placeholder="prix mininmal"
                numeric={true}
                // onChangeText={nom => setNom(nom)}
                inputContainerStyle={{
                  borderColor: COLORS.input_border_color,
                }}
              />
            </View>
            <View style={{  width: "50%"}}>
                <Input
                placeholder="prix maximal"
                numeric={true}
                // onChangeText={nom => setNom(nom)}
                inputContainerStyle={{
                  borderColor: COLORS.input_border_color,
                }}
              />
            </View>
          </View>
          <View style={[styles.selection, {width: "95%", alignSelf: "center", margin: 10}]}>
                    <Picker
                        selectedValue={typeLocation}
                        onValueChange={(itemValue, itemIndex) =>
                            setTypeLocation(itemValue)
                        }
                        >
                        <Picker.Item label="Choisir la localisation" value="choixChambres" />
                        <Picker.Item label="A 500 metres de moi" value="map"/>
                        <Picker.Item label="Choisir par commune" value="commune"/>
                    </Picker>
          </View>
          {typeLocation == 'map' ? (
            <></>
          ) : (
            <View style={[styles.selection, {width: "95%", alignSelf: "center", margin: 10}]}>
            <Picker
                selectedValue={selectedLocation}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLocation(itemValue)
                }
                >
                <Picker.Item label="Choisir la localisation" value="choixChambres" />
                <Picker.Item label="Abobo" value="Abobo" />
                <Picker.Item label="Adjamé" value="Adjamé" />
                <Picker.Item label="Anyama" value="Anyama" />
                <Picker.Item label="Attécoubé" value="Attécoubé" />
                <Picker.Item label="Bingerville" value="Bingerville" />
                <Picker.Item label="Cocody" value="Cocody" />
                <Picker.Item label="Koumassi" value="Koumassi" />
                <Picker.Item label="Marcory" value="Marcory" />
                <Picker.Item label="Plateau" value="Plateau" />
                <Picker.Item label="Port bouët" value="Port bouët" />
                <Picker.Item label="Treichville" value="Treichville" />
                <Picker.Item label="Songon" value="Songon" />
                <Picker.Item label="Yopougon" value="Yopougon" />
            </Picker>
  </View>
          )
        }

          <Image
            source={require('../../Assets/image2-removebg-preview.png')}
            style={{width: 250, height: 150, alignSelf: "center"}}
          />
        </View>
      </ScrollView>
      <Button
          onPress={() => {typeLocation == 'map' ? navigation.navigate('MapSearch') : navigation.navigate('SearchResultScreen') }}
          title="Lancer la recherche"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selection: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input_border_color,
  },
  signUpBtn: {
    height: 40,
    borderRadius: 39,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "#0b3155",
    position: "absolute",
    bottom: 0,
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
  },
  header: {
    flexDirection: 'row',
    top: 10,
    marginHorizontal: 10,
    marginBottom: 20
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
  },
});

export default SearchScreen;
