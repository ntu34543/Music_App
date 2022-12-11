import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,

  Image,
  View,
} from 'react-native';

function Signin() {
  return (
    <View style={styles.container}>
       <View>
        <Image
          style={styles.backgroundimage}
          source={require('../../../assets/image/Union.png')}
        />
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/image/logo1.png')}
        />
        <Text style={styles.slogan}>Enjoin listening to music</Text>
        <Text style={styles.sentence}>Spotify is a proprietary Swedish audio  {'\n'}streaming  and media services provider </Text>
      </View>
      <View style={styles.buttonSign}>
        <TouchableOpacity
          style={styles.buttonRe}

        >
          <Text style={styles.button1}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
      
        >
          <Text style={styles.buttonSi}>Sign In</Text>
        </TouchableOpacity>

      </View>
      <View>
        <Image
          style={styles.avatar}
          source={require('../../../assets/image/logo.png')}
        />
      </View>
      <View>
        <Image
          style={styles.backgroundimage}
          source={require('../../../assets/image/Union.png')}
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
  backgroundimage:{
position: 'absolute',
  },
  logo: {
    marginTop: 100,
    alignItems: 'center',
    textAlign: 'center',
  },
  slogan: {
    color: 'white',
    fontSize: 24,
    paddingTop: 60,
    fontWeight: '600',
  },
  sentence: {
    color: '#A0A0A0',
    marginTop: 20,

  },
  buttonRegister: {
    backgroundColor: '#42C83C',
  },
  buttonRegister: {
    backgroundColor: '#FFFFFF',
  },
  buttonSign: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  button1: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#42C83C',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,

  },
  buttonSi:{
    color:'white',
    fontSize: 20,
    paddingTop: 10,

  }

});

export default Signin