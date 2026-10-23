import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native!</Text>

      <Text style={styles.description}>
        I am learning React Native step by step.
      </Text>

      <Button
        title="Get Started"
        onPress={() => alert('Welcome!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  title: {
    fontSize: 25
  ,
    fontWeight: 'bold',
    color: '#1565c0',
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 25,
    textAlign: 'center',
  },
});
