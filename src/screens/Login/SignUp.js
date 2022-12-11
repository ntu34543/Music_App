import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';

function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/image/logo1.png')}
        />
        <Text style={styles.soloin}>Sign In</Text>
        <Text style={styles.support}>If you need any support,  CLICK HERE!</Text>
      </View>
      <View style={styles.inputpart}>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter username or email"
          placeholderTextColor="#A7A7A7"
          autoCapitalize="none"
        />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password...."
          placeholderTextColor="#A7A7A7"
          autoCapitalize="none"
        />

      </View>
      <View>
        <Text style={styles.repass}>Recovery Password</Text>
        <TouchableOpacity
          style={styles.buttonRe}

        >
          <Text style={styles.button1}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Image
          style={styles.avatar}
          source={require('../../../assets/image/Group26.png')}
        />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: 'pink',
  },
  container: {
    backgroundColor: 'black',
  },
  logo: {
    alignItems: 'center',
    textAlign: 'center',

  },
  soloin: {
    color: 'white',
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold',
  },
  support: {
    color: 'white',
    marginTop: 20,
  },
  input: {
    color: 'white',
  },
  avatar: {

    resizeMode: 'cover'


  },
  input: {
    marginHorizontal: 50,
    height: 70,
    paddingVertical: 15,
    marginBottom: 20,
    paddingHorizontal: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  inputpart: {
    marginTop: 10,
  },
  repass:{
    color:'#AEAEAE',
    marginLeft: 50,
  },
  button1:{
    color:'#AEAEAE',
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
    width: 230,
    backgroundColor: '#42C83C',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
  },
  buttonRe:{
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,

  }
});

export default SignUp