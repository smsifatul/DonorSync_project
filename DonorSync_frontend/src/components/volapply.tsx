import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const VolunteerApply: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Fade-in animation
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // Function to handle opening email
  const sendEmail = () => {
    const email = 'info@uhlbd.com';
    const subject = 'Volunteer Application';
    const body = 'Dear UHL Team, \n\nI would like to apply as a volunteer. Please find my CV attached.\n\nThank you!';
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(url).catch(() => Alert.alert('Error', 'Could not open email client'));
  };

  // Function to handle calling the hotline number
  const callHotline = () => {
    const hotline = 'tel:09666710666';
    Linking.openURL(hotline).catch(() => Alert.alert('Error', 'Could not make a call'));
  };

  return (
    <LinearGradient colors={['#FFCCCB', '#FFE0B2']} style={styles.gradient}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Volunteer Application</Text>
        
        {/* Button to send CV & Info */}
        <TouchableOpacity style={styles.button} onPress={sendEmail}>
          <Text style={styles.buttonText}>Send Your CV & Info</Text>
        </TouchableOpacity>

        {/* Button for the hotline number */}
        <TouchableOpacity style={styles.button} onPress={callHotline}>
          <Text style={styles.buttonText}>Call Our Hotline</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default VolunteerApply;
