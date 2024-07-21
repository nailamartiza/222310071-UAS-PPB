import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'

const Splash = ({navigation}) => {
  useEffect(() => {
    // Navigasi ke halaman selanjutnya
    const timer = setTimeout(() => {
        navigation.navigate('SignIn');
    }, 3000);

    // Membersihkan timer saat komponen SplashScreen unmount
    return () => clearTimeout(timer);
}, [navigation]);
  return (
    <View style={{ 
          flex:1, 
          backgroundColor:'#9AD280', 
          alignItems: 'center', 
          justifyContent: 'center'
          }}>
      <Image source={require("../../assets/truck.png")}/>
        <Text style={{ 
          color:'white', 
          fontSize:35, 
          fontWeight:'bold',
          marginTop:-10,
          }}>CleanTrack</Text>
    </View>
  )
}

export default Splash