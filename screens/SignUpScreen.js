import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSignUp = () => {
    
    console.log('Signing up...');
    navigation.navigate('Home')
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>be cycle</Text>
        </View>

        <Text style={styles.heading1}>Crea tu cuenta</Text>
        <Text style={styles.heading2}>Información básica</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellidos"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="WhatsApp"
            value={whatsapp}
            onChangeText={setWhatsapp}
          />
          <TextInput
            style={styles.input}
            placeholder="Género"
            value={gender}
            onChangeText={setGender}
          />
          <TextInput
            style={styles.input}
            placeholder="Fecha de nacimiento"
            value={dob}
            onChangeText={setDob}
          />
          
          <View style={styles.agreementContainer}>
            <TouchableOpacity
              style={[styles.checkbox, agreed ? styles.checked : null]}
              onPress={() => setAgreed(!agreed)}
            />
            <Text style={styles.agreementText}>
              Acepto los Términos y Condiciones, y el Aviso de Privacidad.
            </Text>
          </View>
          
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
            <Text style={styles.buttonText} onPress={()=>handleSignUp}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: width * 0.05,
  },
  header: {
    alignItems: 'center',
    marginBottom: width * 0.05,
  },
  headerText: {
    fontWeight: '400',
    fontSize: width * 0.18, 
    lineHeight: width * 0.30, 
    textAlign: 'center',
    color: '#00284D'
  },
  heading1: {
    fontSize: 16,
    color: '#00284D',
    fontWeight: '800',
    marginBottom: width * 0.05,
  },
  heading2: {
    fontSize: 16,
    color: '#00284D',
    fontWeight: '800',
    marginBottom: width * 0.02,
  },
  formContainer: {
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: width * 0.04,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.02,
  },
  checkbox: {
    width: 26,
    height: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#00284D',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#00284D',
  },
  agreementText: {
    fontSize: 14,
    color: '#FF8C00'
  },
  buttonContainer: {
    width: '100%',
    height: 53,
    borderRadius: 30,
    backgroundColor: '#00284D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.04,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
