import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importation des icônes

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
        <Icon name="user" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
        />
      </View>

      {/* Champ Adresse e-mail avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          keyboardType="email-address"
        />
      </View>

      {/* Champ Mot de passe avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
        />
      </View>

      {/* Bouton Créer un compte */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
  },
  sign: {
    bottom: 145,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    bottom: 80,
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
    bottom: 60,
  },
  highlightText: {
    color: '#DC5F00',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  button: {
    backgroundColor: '#DC5F00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Signup;