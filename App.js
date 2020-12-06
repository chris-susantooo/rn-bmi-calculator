import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [BMI, setBMI] = useState('');

  const clickHandler = () => {
    const bmi = weight / height / height;
    setBMI(bmi.toFixed(6));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Height(m)</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 1.73"
        onChangeText={setHeight}
      />
      <Text style={styles.boldText}>Weight(kg)</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 64"
        onChangeText={setWeight}
      />
      <View style={styles.buttonContainer}>
        <Button title="CALC BMI" onPress={clickHandler} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.outputText}>Your BMI is: {BMI}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  boldText: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 20
  },
  textContainer: {
    marginTop: 20
  },
  outputText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
