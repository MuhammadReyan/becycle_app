import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import BottomTabs from '../Home/BottomTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const ChangePasswordScreen = () => {
    const navigation = useNavigation()
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    const handleSaveChanges = () => {
        // Handle saving changes logic here
        navigation.navigate('Home')
        
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.title,{ fontSize: width * 0.08 }]}>be cycle</Text>
            <Text style={styles.subtitle}>
            <Icon name="chevron-left" size={15} color="black"  />
            {" "} {" "}
                Cambiar contraseña</Text>
            <TextInput
                style={styles.input}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                placeholder="Contraseña actual"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Nueva contraseña"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                value={repeatNewPassword}
                onChangeText={setRepeatNewPassword}
                placeholder="Repetir nueva contraseña"
                secureTextEntry
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                <Text style={styles.saveButtonText}>Guardar cambios</Text>
            </TouchableOpacity>
            <View style={styles.bottomTabs}>
                <BottomTabs />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: width * 0.09,
        marginBottom: height * 0.03,
        color: '#00284D',
        position:'absolute',
        top:60,
        left:10
    },
    subtitle: {
        fontSize: width * 0.045,
        marginBottom: height * 0.02,
        position:'absolute',
        fontWeight: 'bold',
        top:130,
        left:10,
        
    },
    input: {
        width: width * 0.9,
        height: height * 0.06,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: width * 0.1,
        paddingHorizontal: width * 0.03,
        marginBottom: height * 0.02,
        marginTop:20,
        top:100
    },
    saveButton: {
        backgroundColor: '#00284D',
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.04,
        borderRadius: width * 0.1,
        marginTop: height * 0.440,
        width:'100%'
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: width * 0.04,
        textAlign: 'center',
    },
    bottomTabs: {
        position: 'absolute',
        bottom: -10,
        width: '100%',
    },
});

export default ChangePasswordScreen;
