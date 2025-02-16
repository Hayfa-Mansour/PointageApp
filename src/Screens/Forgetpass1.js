import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Forgetpass({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Mot de passe oublié</Text>
      <Text style={styles.subText}>
        Veuillez entrer votre adresse e-mail pour que nous puissions vous aider à récupérer votre mot de passe.
      </Text>

      {/* Champ Adresse e-mail avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={wp('5%')} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          placeholderTextColor="#999"
        />
      </View>

      {/* Bouton Réinitialiser le mot de passe */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate('verify')}
        activeOpacity={0.8}
      >
        <Text style={styles.signInButtonText}>Réinitialiser le mot de passe</Text>
      </TouchableOpacity>

      {/* Bouton de retour à la page de connexion */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={styles.backButtonText}>Retour à la connexion</Text>
      </TouchableOpacity>
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
    right: wp('1%'),
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
    marginRight: wp('3%'),
  },
  input: {
    flex: 1,
    fontSize: wp('4.5%'),
    paddingVertical: hp('1%'),
  },
  signInButton: {
    backgroundColor: '#DC5F00',
    paddingVertical: hp('2.5%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    marginBottom: hp('3%'),
  },
  signInButtonText: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: hp('2%'),
    alignItems: 'center',
  },
  backButtonText: {
    color: '#666',
    fontSize: wp('4%'),
    fontWeight: 'bold',
    textDecorationLine: 'underline', 
  },
});
