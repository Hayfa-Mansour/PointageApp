import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';

export default function Login({ navigation }) {
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);

  const handleSignIn = () => {
    if (!rememberMe) {
      // Si la case n'est pas cochée, affichez une erreur
      setError(true);
      Alert.alert('Erreur', 'Vous devez cocher "Conditions" pour continuer.');
    } else {
      // Si la case est cochée, procédez à la connexion
      setError(false);
      Alert.alert('Succès', 'Connexion réussie !');
      navigation.navigate('home'); // Naviguer vers l'écran principal après la validation
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue </Text>
      <Text style={styles.subText}>Entrez votre adresse e-mail pour vous connecter</Text>

      {/* Champ Email avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
      </View>

      {/* Champ Password avec icône */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      {/* Remember Me et Forget Password */}
      <View style={styles.rememberMeContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={rememberMe ? 'checked' : 'unchecked'} // État de la case à cocher
            onPress={() => {
              setRememberMe(!rememberMe);
              setError(false); // Réinitialiser l'erreur lorsque l'utilisateur coche la case
            }}
            color="#CD5C08" // Couleur de la case à cocher
          />
          <Text style={styles.rememberMeText}>Conditions</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('forget')}>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>

      {/* Affichage de l'erreur si la case n'est pas cochée */}
      {error && <Text style={styles.errorText}>Vous devez cocher "Remember Me" pour continuer.</Text>}

      {/* Bouton Sign In */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Connexion</Text>
      </TouchableOpacity>

      {/* Lien Sign Up */}
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
    padding: 20,
    backgroundColor: '#EEEEEE',
  },
  sign: {
    bottom: 150,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  welcomeText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    bottom: 90,
  
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
    bottom: 80,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    color: '#666',
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: '#666',
  },
  signInButton: {
    backgroundColor: '#DC5F00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  signUpLink: {
    color: '#CD5C08',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});