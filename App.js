import 'react-native-gesture-handler'
import React from 'react'

import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { configureStore } from './src/redux'

import MainNav from './src/navigation/mainNav'
import WebViewService from './src/components/WebViewService';
import services from './src/services'

export default function App() {
  return (
    <Provider store={configureStore(services)}>
      <StatusBar barStyle="dark-content" hidden />
      <MainNav/>
      <WebViewService />
    </Provider>
  );
}