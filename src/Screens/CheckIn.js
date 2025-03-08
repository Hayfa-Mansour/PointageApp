import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import moment from 'moment';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';

const API_KEY = 'AlzaSyk-0BJ-qKkro4Y5zw_mhBjO5kKrC7YicgE';
const API_URL = 'https://maps.gomaps.pro/maps/api/geocode/json';

const { width } = Dimensions.get('window'); 

const Check = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchLocationAndAddress = async () => {
      setCurrentDate(moment().format('HH:mm:ss'));

      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission de localisation refusée.');
          setLoading(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);

        const response = await axios.get(API_URL, {
          params: {
            latlng: `${location.coords.latitude},${location.coords.longitude}`,
            key: API_KEY
          }
        });

        if (response.data && response.data.results.length > 0) {
          const addressComponents = response.data.results[0].address_components;
          let quartier = '';
          let village = '';
          let ville = '';
          let gouvernorat = '';

          addressComponents.forEach((component) => {
            if (component.types.includes('sublocality') || component.types.includes('neighborhood')) {
              quartier = component.long_name;
            }
            if (component.types.includes('administrative_area_level_3')) {
              village = component.long_name;
            }
            if (component.types.includes('locality')) {
              ville = component.long_name;
            }
            if (component.types.includes('administrative_area_level_1')) {
              gouvernorat = component.long_name;
            }
          });

          const formattedAddress = `${quartier ? quartier + ' - ' : ''}${village ? village + ' - ' : ''}${ville ? ville + ' - ' : ''}${gouvernorat}`;
          setAddress(formattedAddress || 'Adresse introuvable');
        } else {
          setAddress('Adresse non trouvée');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de l’adresse :', error);
        setErrorMsg('Erreur lors de la récupération de l’adresse.');
      }
      setLoading(false);
    };

    fetchLocationAndAddress();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <MaterialIcons name="access-time" size={20} color="#555" />
            <Text style={styles.infoText}>Heure actuelle : {currentDate}</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialIcons name="place" size={20} color="#555" />
            {loading ? (
              <ActivityIndicator size="small" color="#007bff" />
            ) : (
              <Text style={styles.infoText}>Localisation : {address || errorMsg}</Text>
            )}
          </View>
        </View>

        {/* Conteneur pour les boutons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Check-in effectué')}>
            <Text style={styles.buttonText}>Check In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Check-out effectué')}>
            <Text style={styles.buttonText}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    padding: 20,
  },
  card: {
    backgroundColor: '#FCF1F1',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderColor: "#6A9C89",
    borderWidth: 1,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#6A9C89',
    padding: 15,
    borderRadius: 10,
    width: '48%', // Largeur relative pour s'adapter à l'écran
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Check;