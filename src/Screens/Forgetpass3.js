import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Modepasse({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>
      Écrivez s'il vous plaît votre nouveau mot de passe :
      </Text>

      {/* Champ Adresse e-mail avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nouveau mot de passe"
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmez le mot de passe"
          placeholderTextColor="#999"
        />
      </View>

      {/* Bouton Réinitialiser le mot de passe */}
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
    padding: 20,
    backgroundColor: '#EEEEEE',
  },
  sign: {
    bottom: 225,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  welcomeText: {
    fontSize: 23,
    fontWeight: 'bold',
    bottom: 160,
  
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
    bottom: 150,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  signInButton: {
    backgroundColor: '#DC5F00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop:20
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});