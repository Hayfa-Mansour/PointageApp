import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Logo en haut */}
      <Image source={require('../assets/logoo.png')} style={styles.logo} />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('checkin')}>
        <View style={styles.buttonContent}>
          <Icon name="check" size={24} color="#6A9C89" />
          <Text style={styles.buttonText}>Check In</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon name="exit-to-app" size={24} color="#6A9C89" />
          <Text style={styles.buttonText}>Check Out</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon name="event" size={24} color="#6A9C89" />
          <Text style={styles.buttonText}>Demande Congé</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon name="account-balance-wallet" size={24} color="#6A9C89" />
          <Text style={styles.buttonText}>Salaire</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon name="person" size={24} color="#6A9C89" />
          <Text style={styles.buttonText}>Profil</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon name="power-settings-new" size={24} color="#6A9C89" />
          <Text style={styles.buttonText}>Déconnexion</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },
  logo: {
    width: 250,  
    height: 250, 
    resizeMode: 'contain',
    bottom:70,
    right:60
  },
  button: {
    backgroundColor: '#FCF1F1',
    padding: 15,
    borderRadius: 25,
    marginBottom: 30,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderColor: "#FF885B",
    borderWidth: 1,
    bottom:50
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#6A9C89',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Home;
