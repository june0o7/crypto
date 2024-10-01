import React from 'react';
import { View, StyleSheet, LinearGradient } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      {/* Solid background for better approximation */}
      <View style={[styles.background, { backgroundColor: 'rgb(63,94,251)' }]} />
      {/* Gradient overlay */}
      <View style={styles.gradient}>
        <LinearGradient
          colors={['rgba(63,94,251,1)', 'rgba(236,45,83,1)']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default MyComponent;