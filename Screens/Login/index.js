import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <ScrollView>
        <View style={styles.logoView}>
          <Image
            source={require('../../Assets/logo-removebg-preview.png')}
            style={styles.logo}
          />
          <Text style={{    textAlign: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 14, top: -10}}>La recherche de maison autrement</Text>
              <Image
            source={require('../../Assets/image3.jpeg')}
            style={{
              alignSelf: 'center',
              width: 380,
              height:200,}}
          />
          <Text style={styles.textRegister}>Connectez-vous</Text>
        </View>
        <View style={{margin: 10}}>
          <Input
            placeholder="Email"
            onChangeText={email => setEmail(email)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            secureTextEntry
            placeholder="Mots de passe"
            onChangeText={password => setPassword(password)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <TouchableOpacity style={styles.forgotPassButton}>
            <Text style={styles.forgotPassText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <Button
          onPress={() => navigation.navigate('PortailScreen')}
          title="Se connecter"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
        <View style={styles.newAccountView}>
          <Text style={styles.confidentialText}>
            Vous n’avez pas de compte ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.forgotPassText}> Créer un compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 40,
    flexDirection: 'row',
    margin: 10,
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
  },
  logoView: {
    alignSelf: 'center',
    marginBottom: 50,
    top: 10,
  },
  logo: {
    marginBottom: 20,
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  textRegister: {
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 24,
  },
  signUpBtn: {
    height: 40,
    borderRadius: 39,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "#0b3155",
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
  },
  confidentialText: {
    textAlign: 'center',
    fontSize: 14,
  },
  forgotPassButton: {
    margin: 10,
    top: -10,
  },
  forgotPassText: {
    color: '#1C4ED8',
    fontSize: 14,
  },
  newAccountView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default Login;
