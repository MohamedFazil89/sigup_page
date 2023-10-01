import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';


const App = () => {
  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://developers.google.com/youtube/v3')
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data)); 
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
     
  };

  return(
    <View>
        <Text style={{fontSize: 30, textAlign: 'center'}}>
        Example of Axios Networking in React Native
      </Text>


        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>



    </View>
  );
};

  
const styles = StyleSheet.create({



});


export default App;
