import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Modepasse({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>
        Écrivez s'il vous plaît votre nouveau mot de passe :
      </Text>

      {/* Champ Nouveau mot de passe avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={wp('5%')} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nouveau mot de passe"
          placeholderTextColor="#999"
        />
      </View>

      {/* Champ Confirmez le mot de passe avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={wp('5%')} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmez le mot de passe"
          placeholderTextColor="#999"
        />
      </View>

      {/* Bouton Modifier */}
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('verify')}>
        <Text style={styles.signInButtonText}>Modifier</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: wp('5%'), 
    backgroundColor: '#EEEEEE',
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
