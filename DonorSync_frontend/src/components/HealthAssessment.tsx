import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Animated, Linking, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HealthAssessment = () => {
  const [recentTravel, setRecentTravel] = useState('');
  const [medications, setMedications] = useState('');
  const [fever, setFever] = useState('');
  const [isEligible, setIsEligible] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const checkEligibility = () => {
    if (recentTravel.toLowerCase() === 'yes' || medications.toLowerCase() === 'yes' || fever.toLowerCase() === 'yes') {
      setIsEligible(false);
      Alert.alert('Not Eligible', 'You are not eligible to donate at this time.');
    } else {
      setIsEligible(true);
      Alert.alert('Eligible', 'You are eligible to donate.');
    }
  };

  const handleConsultationLink = () => {
    Linking.openURL('https://www.uhlbd.com/');
  };

  return (
    <LinearGradient colors={['#FFCCCB', '#FFE0B2']} style={styles.gradient}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <ScrollView>
          <Text style={styles.title}>Health Assessment</Text>

          <Text style={styles.label}>Have you traveled recently? (Yes/No)</Text>
          <TextInput
            style={styles.input}
            placeholder="Yes or No"
            value={recentTravel}
            onChangeText={setRecentTravel}
          />

          <Text style={styles.label}>Are you currently taking any medications? (Yes/No)</Text>
          <TextInput
            style={styles.input}
            placeholder="Yes or No"
            value={medications}
            onChangeText={setMedications}
          />

          <Text style={styles.label}>Do you have a fever or feel unwell? (Yes/No)</Text>
          <TextInput
            style={styles.input}
            placeholder="Yes or No"
            value={fever}
            onChangeText={setFever}
          />

          <TouchableOpacity style={styles.button} onPress={checkEligibility}>
            <Text style={styles.buttonText}>Check Eligibility</Text>
          </TouchableOpacity>

          {!isEligible && (
            <View style={styles.consultationContainer}>
              <Text style={styles.consultationText}>
                You may need to consult a medical professional. Please visit our medical consultation page:
              </Text>
              <TouchableOpacity onPress={handleConsultationLink}>
                <Text style={styles.link}>Medical Consultation</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  consultationContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f8d7da',
    borderRadius: 4,
  },
  consultationText: {
    fontSize: 16,
    color: '#721c24',
    marginBottom: 8,
  },
  link: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default HealthAssessment;
