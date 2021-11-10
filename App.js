import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import MainScreen from './screens/MainScreen';
import WebViewScreen from './screens/WebViewScreen';

export default function App() {

  const [webViewLink, setWebViewLink] = useState('')
  const [userId, setUserId] = useState('')
  const getWebViewAdress = (address, id) => {
    if (address.includes('stackoverflow.com/questions')) {
      setUserId(id)
      setWebViewLink(address)
    } else {
      setUserId('')
      setWebViewLink('')
    }
  }

  const backToMainScreen = () => {
    setWebViewLink('')
  }

  return (
    <View style={styles.container}>
      {webViewLink == '' && <MainScreen style={styles.container} getWebViewAdress={getWebViewAdress} id={userId} />}
      {webViewLink !== '' && <WebViewScreen address={webViewLink} backToMainScreen={backToMainScreen} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  htmlView: {
    marginTop: 40,
    height: '90%'
  },
  button: {
    backgroundColor: '#504f54',
    color: 'white',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18
  }
});

