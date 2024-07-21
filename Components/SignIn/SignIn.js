// import React, { Component } from 'react';
// import { Image, StyleSheet, Text, View } from 'react-native';

// class SignIn extends Component {
//     render() {
//         return (
//             <View style={{
//                 flex: 1,
//                 backgroundColor: '#FFFFFF',
//                 alignItems: 'center',
//                 justifyContent:'center'
//             }}>
//             <Image source={require("../../assets/truckblack.jpg")}/>
//             <Text style={{
//                 color: 'black',
//                 fontSize: 35,
//                 marginTop: 10
//             }}>CleanTrack</Text>
//             <Image source={require("../../assets/potted_plant.png")}/>
            
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({})

// export default SignIn;
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Checkbox } from 'react-native-paper';

const SignIn = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  
  const predefinedUsername = 'Ghina';
  const predefinedPassword = 'Pulupulu';

  const navigation = useNavigation();


  const handlerSignIn = () => {
    if (Username === predefinedUsername && Password === predefinedPassword) {
      navigation.navigate("User");
    } else {
      Alert.alert('Error', 'Invalid Username or Password');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={require("../../assets/truckblack.jpg")}/>
          <Text style={styles.logoText}>CleanTrack</Text>
            <View>
              <TextInput 
                  style={styles.input} 
                  placeholder="Masukkan Username"
                  keyboardType="Username-address"
                  autoCapitalize= "none"
                  value={Username}
                  onChangeText={(text) => setUsername(text)}
              />

              <TextInput
                  style={styles.input}
                  placeholder="Masukkan Password"
                  secureTextEntry={true}
                  value={Password}
                  onChangeText={(text) => setPassword(text)}
              />

              <TouchableOpacity style={styles.button} onPress={handlerSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  
  formContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: 300,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#9AD280',
    paddingVertical: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 25,
    width: 150,
    alignSelf: 'center',
    
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SignIn;