import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Image } from 'react-native';

export default function Splash ({navigation}){
    
  return (
    <ImageBackground
    style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require('../assets/spl.png')}style={styles.image} />
        <Text style={styles.title}>Pointage Facile</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
          <Text style={styles.buttonText}>Commencer</Text>
        </TouchableOpacity>
      </View>
   </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:"#EEEEEE"
   
  },
  image:{
    justifyContent: 'center',
    width:380,
    height:360,
    marginBottom:20
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#DC5F00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

