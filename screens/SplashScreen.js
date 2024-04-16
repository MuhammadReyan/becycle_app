import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const SplashScreen = () => {

  // Navigation
  const navigation = useNavigation();

  const handleLeftButtonPress = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleRightButtonPress = () => {
    navigation.navigate('SignUpScreen');
  };

  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.becycleText}>becycle</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLeftButtonPress}>
          <Text style={styles.buttonText}>Iniciar sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rightButton]} onPress={handleRightButtonPress}>
          <Text style={[styles.buttonText, styles.rightButtonText]}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  becycleText: {
    fontWeight: "400",
    color: "#00284D",
    fontSize: width * 0.2,
    marginTop: height * 0.1,
    marginBottom: height * 0.03,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop:250
  },
  button: {
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.1,
    marginHorizontal: width * 0.03,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#00284D",
  },
  rightButton: {
    backgroundColor: "#00284D",
  },
  buttonText: {
    fontSize: width * 0.04,
    color: "#00284D",
  },
  rightButtonText: {
    color: "#FFFFFF",
  },
});

export default SplashScreen;
