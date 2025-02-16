import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un compte</Text>
      <Text style={styles.subText}>
        Entrez votre nom, votre adresse e-mail et votre mot de passe pour vous inscrire.{' '}
        <Text style={styles.highlightText}>Vous avez déjà un compte ?</Text>
      </Text>

      {/* Champ Nom d'utilisateur avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={wp('5%')} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          placeholderTextColor="#999"
        />
      </View>

      {/* Champ Adresse e-mail avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={wp('5%')} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
      </View>

      {/* Champ Mot de passe avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={wp('5%')} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      {/* Bouton Créer un compte */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'), // Utilisation de wp pour le padding
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
  },
  title: {
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
  highlightText: {
    color: '#DC5F00',
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
    marginRight: wp('3%'), // Espacement ajusté
  },
  input: {
    flex: 1,
    height: hp('6%'),
    fontSize: wp('4.5%'),
  },
  signInButton: {
    backgroundColor: '#DC5F00',
    paddingVertical: hp('1.5%'), 
    paddingHorizontal: wp('6%'), 
    borderRadius: wp('2%'),
    alignItems: 'center',
    marginTop: hp('4%'),
  },
  signInButtonText: {
    color: '#fff',
    fontSize: wp('4.5%'), 
    fontWeight: 'bold',
  },
});

export default Signup;
