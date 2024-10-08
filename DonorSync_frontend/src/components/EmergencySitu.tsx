import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Animated, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const EmergencyModeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleSOS = () => {
    Alert.alert(
      'SOS Activated',
      'Contacting Bangladesh Red Crescent Blood Bank!',
      [
        {
          text: 'Call +880-02-9116563',
          onPress: () => callSOS('+880029116563'),
        },
        {
          text: 'Call +880-02-8121497',
          onPress: () => callSOS('+880028121497'),
        },
        {
          text: 'Call +880-02-9139940',
          onPress: () => callSOS('+880029139940'),
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const callSOS = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <LinearGradient colors={['#FFCCCB', '#FFE0B2']} style={styles.gradient}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Emergency Mode</Text>

        <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
          <Text style={styles.sosButtonText}>SOS - Immediate Blood Request</Text>
        </TouchableOpacity>

        <View style={styles.hospitalsContainer}>
          <Text style={styles.hospitalsTitle}>Contact Hospitals</Text>

          <TouchableOpacity style={styles.hospitalButton} onPress={() => callSOS('09666710666')}>
            <Text style={styles.hospitalText}>United Hospital Limited, Primary phone</Text>
            <Text style={styles.hospitalPhone}>09666-710666</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.hospitalButton} onPress={() => callSOS('09610010616')}>
            <Text style={styles.hospitalText}>Square Hospital, Primary phone</Text>
            <Text style={styles.hospitalPhone}>09610-010616</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.hospitalButton} onPress={() => callSOS('09612345666')}>
            <Text style={styles.hospitalText}>Ad-Din Medical College Hospital ~ MaghBazar, Primary phone</Text>
            <Text style={styles.hospitalPhone}>09612-345666</Text>
          </TouchableOpacity>
        </View>
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
  sosButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
    elevation: 5,
  },
  sosButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  hospitalsContainer: {
    marginTop: 30,
  },
  hospitalsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  hospitalButton: {
    backgroundColor: '#FFE0B2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
  },
  hospitalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  hospitalPhone: {
    fontSize: 14,
    color: '#1E90FF',
    marginTop: 5,
  },
});

export default EmergencyModeScreen;
