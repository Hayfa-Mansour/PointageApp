import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';

// Constantes
const TOTAL_LEAVE_DAYS = 30; 
const { width, height } = Dimensions.get('window'); 

const Congé = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [remainingDays, setRemainingDays] = useState(TOTAL_LEAVE_DAYS); 

 
  const calculateDaysDifference = (start, end) => {
    const timeDifference = end.getTime() - start.getTime();
    return Math.ceil(timeDifference / (1000 * 3600 * 24)); 
  };

  
  const handleSubmit = () => {
    const daysRequested = calculateDaysDifference(startDate, endDate);

    if (startDate > endDate) {
      Alert.alert('Erreur', 'La date de début ne peut pas être après la date de fin.');
      return;
    }

    if (daysRequested > remainingDays) {
      Alert.alert('Erreur', `Vous n'avez que ${remainingDays} jours de congé restants.`);
      return;
    }


    setRemainingDays(remainingDays - daysRequested);

  
    Alert.alert(
      'Demande de congé',
      `Votre demande de congé de ${daysRequested} jours a été soumise avec succès.`
    );

    setStartDate(new Date());
    setEndDate(new Date());
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        <View style={styles.remainingDaysContainer}>
          <Text style={styles.remainingDaysText}>
            Il vous reste : {remainingDays} jours / {TOTAL_LEAVE_DAYS} jours
          </Text>
        </View>

    
        <View style={styles.inputContainer}>
          <MaterialIcons name="date-range" size={width * 0.05} color="#555" />
          <TouchableOpacity onPress={() => setShowStartDatePicker(true)} style={styles.dateInput}>
            <Text style={styles.dateText}>
              Début congé : {startDate.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {showStartDatePicker && (
            <DateTimePicker
              value={startDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowStartDatePicker(false);
                if (selectedDate) {
                  setStartDate(selectedDate);
                }
              }}
            />
          )}
        </View>

       
        <View style={styles.inputContainer}>
          <MaterialIcons name="date-range" size={width * 0.05} color="#555" />
          <TouchableOpacity onPress={() => setShowEndDatePicker(true)} style={styles.dateInput}>
            <Text style={styles.dateText}>
              Fin congé : {endDate.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {showEndDatePicker && (
            <DateTimePicker
              value={endDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowEndDatePicker(false);
                if (selectedDate) {
                  setEndDate(selectedDate);
                }
              }}
            />
          )}
        </View>

       
        <View style={styles.inputContainer}>
          <MaterialIcons name="description" size={width * 0.05} color="#555" />
          <TextInput
            style={styles.descriptionInput}
            placeholder="Description"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
        </View>

     
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Soumettre</Text>
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
    padding: width * 0.05, 
  },
  card: {
    backgroundColor: '#FCF1F1',
    borderRadius: width * 0.04, 
    padding: width * 0.05, 
    width: '100%',
    maxWidth: 500, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderColor: "#6A9C89",
    borderWidth: 1,
  },
  remainingDaysContainer: {
    marginBottom: height * 0.02, 
    width: '100%',
    alignItems: 'center',
  },
  remainingDaysText: {
    fontSize: width * 0.045, 
    fontWeight: 'bold',
    color: '#6A9C89',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02, 
    width: '100%',
  },
  dateInput: {
    flex: 1,
    marginLeft: width * 0.02, 
    padding: width * 0.03, 
    backgroundColor: '#fff',
    borderRadius: width * 0.02,
    borderColor: '#6A9C89',
    borderWidth: 1,
  },
  dateText: {
    fontSize: width * 0.04, 
    color: '#555',
  },
  descriptionInput: {
    flex: 1,
    marginLeft: width * 0.02, 
    padding: width * 0.03, 
    backgroundColor: '#fff',
    borderRadius: width * 0.02, 
    borderColor: '#6A9C89',
    borderWidth: 1,
    height: height * 0.15, 
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#6A9C89',
    padding: width * 0.04, 
    borderRadius: width * 0.02, 
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.04, 
    fontWeight: 'bold',
  },
});

export default Congé;