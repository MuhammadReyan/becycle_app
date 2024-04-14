import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';

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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>be cycle</Text>
      </View>

      <View>
      <Text style={styles.heading1}>Crea tu cuenta</Text>
      </View>

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
        <Text style={styles.heading2}>Información básica</Text>
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
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    width: 250,
    height: 56,
    top: 6,
    left: -120,
    alignItems: 'center',
    marginBottom:40
  },
  headerText: {
    // fontFamily:"inter",
    fontWeight: '400',
    fontSize: width * 0.18, 
    lineHeight: width * 0.12, 
    textAlign:'center',
    color:'#00284D'
  },
  heading1: {
    width: 156,
    height: 30,
    top: 160,
    left: 30,
    position: 'absolute',
    fontSize: 16,
    color: '#00284D',
    fontWeight:800,
    marginLeft:-200,
    marginTop:30,
    marginBottom:20
  },
  heading2: {
    width: 300,
    height: 30,
    top: 80,
    left: 30,
    position: 'absolute',
    fontSize: 16,
    color: '#00284D',
    marginTop:60,
    marginBottom:10,
    fontWeight:800,
    marginLeft:-15
    
  },
  formContainer: {
    marginTop: 200,
    alignItems: 'center',
  },
  input: {
    width: 333,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    marginRight:40,
    marginTop:10

  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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
    color:'#FF8C00'
  },
  buttonContainer: {
    width: 347,
    height: 53,
    borderRadius: 30,
    backgroundColor: '#00284D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight:40
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
