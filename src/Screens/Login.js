import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Login({ navigation }) {
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);

  const handleSignIn = () => {
    if (!rememberMe) {
      setError(true);
      Alert.alert('Erreur', 'Vous devez cocher "Conditions" pour continuer.');
    } else {
      setError(false);
      Alert.alert('Succès', 'Connexion réussie !');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue </Text>
      <Text style={styles.subText}>Entrez votre adresse e-mail pour vous connecter</Text>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={wp('5%')} color="#666" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Adresse e-mail" placeholderTextColor="#999" keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={wp('5%')} color="#666" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Mot de passe" placeholderTextColor="#999" secureTextEntry />
      </View>

      <View style={styles.rememberMeContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox status={rememberMe ? 'checked' : 'unchecked'} onPress={() => setRememberMe(!rememberMe)} color="#CD5C08" />
          <Text style={styles.rememberMeText}>Conditions</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('forget')}>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorText}>Vous devez cocher "Conditions" pour continuer.</Text>}

      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('home')}>
        <Text style={styles.signInButtonText}>Connexion</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
        Vous n'avez pas de compte ?{' '}
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('signup')}>
          S'inscrire
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    backgroundColor: '#EEEEEE',
  },
  welcomeText: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    marginBottom: hp('3%'),
    right:wp('1%')
  },
  subText: {
    fontSize: wp('4%'),
    marginBottom: hp('15%'),
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: wp('2%'),
    marginBottom: hp('3%'),
    paddingHorizontal: wp('3%'),
    height: hp('6%'),
  },
  icon: {
    marginRight: wp('2%'),
  },
  input: {
    flex: 1,
    fontSize: wp('4%'),
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    color: '#666',
    marginLeft: wp('2%'),
    fontSize: wp('4%'),
  },
  forgotPasswordText: {
    color: '#666',
    fontSize: wp('4%'),
  },
  signInButton: {
    backgroundColor: '#DC5F00',
    paddingVertical: hp('1.5%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  signInButtonText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },
  signUpText: {
    textAlign: 'center',
    color: '#666',
    fontSize: wp('4%'),
  },
  signUpLink: {
    color: '#CD5C08',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: wp('3.5%'),
    marginBottom: hp('1%'),
    textAlign: 'center',
  },
});
