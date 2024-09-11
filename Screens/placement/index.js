import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Modal
  } from 'react-native';
  import React, {useState} from 'react';
  import {Input, Icon} from '@rneui/themed';
  import {COLORS} from '../../variables/color';
  import Button from '../../components/Button';
  import {Picker} from '@react-native-picker/picker';
  import ImagePicker from 'react-native-image-crop-picker';
  import ImgToBase64 from 'react-native-image-base64';
  
  const PlacementScreen = ({navigation}) => {
    const [selectedMode, setSelectedMode] = useState();
    const [selectedChambre, setSelectedChambre] = useState();
    const [photo, setPhoto] = useState('');
    const [imageBase64, setImageBase64] = useState();
    const [selectedLocation, setSelectedLocation] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const openCamera = async () => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        multiple: true,
        cropping: true,
      }).then(result => {
        setPhoto1(result.path);
      });
    };
  
    const pickImage = async () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(result => {
        setPhoto(result.path);
        console.log(photo);
        ImgToBase64.getBase64String(result.path).then(base64String => {
          setImageBase64('data:image/jpeg;base64,' + base64String);
          console.log('base', imageBase64);
        });
      });
    };
  
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
            <Text style={{color: '#fff', textAlign: 'center'}}>Mettre un logement en location</Text>
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
                          <Picker.Item label="Choisir le type de logement" value="choixLogement" />
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
            <Input
              placeholder="prix"
              numeric={true}
              // onChangeText={nom => setNom(nom)}
              inputContainerStyle={{
                borderColor: COLORS.input_border_color,
              }}
            />
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
            {selectedLocation ? (
            <Input
            placeholder="Latitude : 5.3643 | Longitude : -3.9365"
            // numeric={true}
            // onChangeText={nom => setNom(nom)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
            ) : (
              <></>
            )}
            <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.changeImageButton}
            onPress={() => pickImage()}>
            {imageBase64 ? (
              <Image
                source={{uri: imageBase64}}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
            ) : (
              <>
              <Image
                source={require('../../Assets/logo-removebg-preview.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <View style={{}}>
              <Text style={[styles.imageSubtitle, {fontSize: 16}]}>
                Ajouter une photo de votre logement
              </Text>
            </View>
            </>
            )}
            {/* <Image
              source={require('../../assets/logoSansText.png')}
              style={{width: 100, height: 100, borderRadius: 50}}
            /> */}
          </TouchableOpacity>
        </View>
          </View>
          <Image
            source={require('../../Assets/image3.jpeg')}
            style={{alignSelf: "center", width: 300, height: 100}}
          />
        </ScrollView>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Votre maison a été publié sur l’application MOHOUSE avec succès!</Text>
            <Image
                source={require('../../Assets/icon-removebg-preview.png')}
                style={{width: 100, height: 100}}
              />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => [setModalVisible(!modalVisible), navigation.navigate('PortailScreen')]}>
              <Text style={styles.textStyle}>Valider</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <Button
            onPress={() => setModalVisible(true)}
            title="Publier"
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
    changeImageButton: {
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    editIconView: {
      width: 25,
      height: 25,
      justifyContent: 'center',
      borderRadius: 20,
      top: '19%',
      marginHorizontal: -20,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      marginTop: 150
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: 100
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      textAlign: 'center',
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
  
  export default PlacementScreen;
  