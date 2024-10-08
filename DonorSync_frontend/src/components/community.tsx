import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CommunityEngagementScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [experience, setExperience] = useState('');
  const [story, setStory] = useState('');

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleSubmitExperience = () => {
    if (!experience) {
      Alert.alert('Error', 'Please share your experience.');
      return;
    }
    Alert.alert('Thank you', 'Your experience has been submitted!');
    setExperience(''); // Clear the input after submission
  };

  const handleSubmitStory = () => {
    if (!story) {
      Alert.alert('Error', 'Please share your story.');
      return;
    }
    Alert.alert('Thank you', 'Your story has been submitted!');
    setStory(''); // Clear the input after submission
  };

  return (
    <LinearGradient colors={['#FFDEE9', '#B5FFFC']} style={styles.gradient}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Community Engagement</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.description}>
            Share your experiences or ask questions to help others in the donor community.
          </Text>

          {/* Input Box for Sharing Experiences */}
          <TextInput
            style={styles.inputBox}
            placeholder="Share your experience..."
            value={experience}
            onChangeText={setExperience}
            multiline
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmitExperience}>
            <Text style={styles.buttonText}>Submit Experience</Text>
          </TouchableOpacity>

          {/* Input Box for Sharing Donation Stories */}
          <Text style={styles.subTitle}>Share Your Donation Story</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Share your story..."
            value={story}
            onChangeText={setStory}
            multiline
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmitStory}>
            <Text style={styles.buttonText}>Submit Story</Text>
          </TouchableOpacity>
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
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  inputBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    minHeight: 80, // To make it a bigger box
    textAlignVertical: 'top', // To ensure text starts at the top
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    elevation: 3,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CommunityEngagementScreen;
