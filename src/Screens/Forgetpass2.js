import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function Verifycode({ navigation }) {
  const [verificationCode, setVerificationCode] = useState("");
  const [timer, setTimer] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerActive && timer > 0) {
      timerRef.current = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimerActive(false);
      clearTimeout(timerRef.current);
    }

    return () => clearTimeout(timerRef.current);
  }, [timerActive, timer]);

  const handleVerificationCodeChange = (value, index) => {
    if (value.length > 0) {
      const newCode = value.charAt(value.length - 1);
      const updatedCode = verificationCode.split('');
      updatedCode[index] = newCode;
      setVerificationCode(updatedCode.join(''));
      if (index < 3) {
        refs[index + 1].focus();
      }
    } else {
      const updatedCode = verificationCode.split('');
      updatedCode[index] = '';
      setVerificationCode(updatedCode.join(''));
      if (index > 0) {
        refs[index - 1].focus();
      }
    }
  };

  const handleResendCode = () => {
    setTimer(60);
    setTimerActive(true);
  };

  const refs = [];
  const createRefs = (index) => (input) => {
    refs[index] = input;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Vérification par e-mail</Text>
        <Text style={styles.instructions}>
          Entrez le code que vous avez reçu sur votre adresse e-mail
        </Text>
        <View style={styles.codeContainer}>
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleVerificationCodeChange(value, index)}
              ref={createRefs(index)}
            />
          ))}
        </View>
        <TouchableOpacity
          style={[styles.resendButton, timerActive && styles.resendButtonDisabled]}
          disabled={timerActive}
          onPress={handleResendCode}
        >
           <Text style={styles.recuText}>Vous n'avez pas reçu l'e-mail ?
                <Text style={styles.resendButtonText}>
                {timerActive ? `Renvoyer dans ${timer} secondes` : ' Renvoyer le code'}
                </Text>
           </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.suivButton} onPress={() => navigation.navigate("modepasse")}>
          <Text style={styles.suivButtonText}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: '#EEEEEE',
  },
  sign: {
    bottom: 230,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500', // Utilisez '500' comme chaîne de caractères
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    bottom: 170,
    right: 38,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
    bottom: 160,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 40,
  },
  hello: {
    marginBottom: 20,
  },
  hi: {
    color: "#CD5C08",
  },
  codeInput: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 20,
  },
  suivButton: {
    backgroundColor: '#DC5F00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  suivButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recuText:{
    marginBottom:20
  },
  resendButtonText:{
    color: "#DC5F00"
  }
});