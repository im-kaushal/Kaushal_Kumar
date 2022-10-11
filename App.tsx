
import React, {type PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/routes/Navigation';

const App = () => {

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
});

export default App;
