import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const ChatScreen = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://your_server_ip_or_domain/api/v1/chat', {
        messages: [{ role: 'system', content: prompt }],
      });
      setResponse(res.data);
      // Optional: Clear the input field after sending the message
      setPrompt('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>ChatScreen</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Write here ...'
          value={prompt}
          onChangeText={text => setPrompt(text)}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.responseContainer}>
        <Text style={styles.response}>{response}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  sendText: {
    color: 'white',
    fontWeight: 'bold',
  },
  responseContainer: {
    marginTop: 20,
  },
  response: {
    fontSize: 16,
  },
});

export default ChatScreen;
