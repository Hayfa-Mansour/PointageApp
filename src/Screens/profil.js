import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Dimensions de l'écran

const Profil = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Informations de profil (à remplacer par une vérification côté serveur)
  const profile = {
    email: 'user@example.com',
    password: 'password123',
  };

  // Fonction pour vérifier les informations
  const handleVerify = () => {
    if (email === profile.email && password === profile.password) {
      Alert.alert('Succès', 'Les informations de profil sont correctes.');
    } else {
      Alert.alert('Erreur', 'Email ou mot de passe incorrect.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Vérifier le profil</Text>

        {/* Champ Email */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Champ Mot de passe */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>

        {/* Bouton de vérification */}
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Vérifier</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    padding: width * 0.05, // 5% de la largeur de l'écran
  },
  card: {
    backgroundColor: '#FCF1F1',
    borderRadius: width * 0.04, // 4% de la largeur de l'écran
    padding: width * 0.05, // 5% de la largeur de l'écran
    width: '100%',
    maxWidth: 500, // Largeur maximale pour les grands écrans
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderColor: "#6A9C89",
    borderWidth: 1,
  },
  title: {
    fontSize: width * 0.06, // 6% de la largeur de l'écran
    fontWeight: 'bold',
    color: '#6A9C89',
    marginBottom: height * 0.03, // 3% de la hauteur de l'écran
  },
  inputContainer: {
    width: '100%',
    marginBottom: height * 0.02, // 2% de la hauteur de l'écran
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: width * 0.02, // 2% de la largeur de l'écran
    padding: width * 0.03, // 3% de la largeur de l'écran
    borderColor: '#6A9C89',
    borderWidth: 1,
    fontSize: width * 0.04, // 4% de la largeur de l'écran
    color: '#555',
  },
  button: {
    backgroundColor: '#6A9C89',
    padding: width * 0.04, // 4% de la largeur de l'écran
    borderRadius: width * 0.02, // 2% de la largeur de l'écran
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: height * 0.02, // 2% de la hauteur de l'écran
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.04, // 4% de la largeur de l'écran
    fontWeight: 'bold',
  },
});

export default Profil;