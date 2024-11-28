import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>
        {isDarkMode ? 'Modo Oscuro Activado' : 'Modo Claro Activado'}
      </Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: {
    backgroundColor: '#333',
    flex: 1,
  },
  light: {
    backgroundColor: '#fff',
    flex: 1,
  },
  darkText: {
    color: '#fff',
    marginBottom: 10,
  },
  lightText: {
    color: '#000',
    marginBottom: 10,
  },
});

export default ToggleDarkMode;