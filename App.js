import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/redux'

import MainNav from './src/navigation/mainNav'

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" hidden />
      <MainNav/>
    </Provider>
  );
}