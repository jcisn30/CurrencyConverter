import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text } from 'react-native';
import { format } from 'date-fns'

import colors from '../constants/colors';
import { ConversionInput } from '../components/conversionInput';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    logoBackground: {
        width: screen.width * 0.45,
        height: screen.height * 0.45
    },
    logo: {
        position:'absolute',
        width: screen.width * 0.25,
        height: screen.height * 0.25
    },
    textHeader: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 20,
      textAlign: 'center'
    },
    text: {
      color: colors.white,
      fontSize: 13,
      textAlign: 'center'
    },
    inputContainer: {
      marginBottom: 10
    }
});

export default () => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = 0.8345;
  const date = new Date();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/background.png')} style={styles.logoBackground} resizeMode='contain' />
        <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode='contain' />
      </View>

      <Text style={styles.textHeader}>Curreny Converter</Text>

      <View style={styles.inputContainer}>
        <ConversionInput 
          text={baseCurrency}
          value='123'
          onButtonPress={() => alert('todo!')}
          onChangeText={text => console.log('text', text)}
          keyboardType='numeric'
        />
        <ConversionInput 
          text={quoteCurrency}
          value='123'
          onButtonPress={() => alert('todo!')}
          editable={false}
        />
      </View>
      <Text style={styles.text}>{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(new Date(date), 'MMM do, yyyy')}`}</Text>
    </View>
  );
};