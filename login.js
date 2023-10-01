import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handelname = (text) => {
    setUsername(text);
  };

  const handelPasswordChange = (text) => {
    setPassword(text);
  };

  const handelchange = () => {
    if (username && password !== '') {
      alert('Welcome');
      navigation.navigate('data');
    } else {
      alert('Fill in all the fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Login</Text>
      <TextInput
        aria-label="username"
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={handelname}
      />
      <TextInput
        aria-label="Password"
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handelPasswordChange}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handelchange}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '40%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});
