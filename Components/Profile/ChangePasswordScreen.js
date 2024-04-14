import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BottomTabs from '../Home/BottomTab';

const ChangePasswordScreen = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    const handleSaveChanges = () => {
        // Handle saving changes logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>be cycle</Text>
            <Text style={styles.subtitle}>Cambiar contraseña</Text>
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
           <View style={{marginTop:50}}>
           <BottomTabs/>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 36,
        fontWeight: '700',
        marginBottom: 20,
        width:146,
        height:44,
        top:-30,
        left:-125,
        color:'#00284D'
    },
    subtitle: {
        fontSize: 17,
        marginBottom: 20,
        width:198,
        height:22,
        top:-30,
        left:-76,
        fontWeight:900
    },
    input: {
        width: 333,
        height: 50,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 30,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginLeft:-50
    },
    saveButton: {
        backgroundColor: '#00284D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 170,
        width:347,
        left:-20
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign:'center'
    },
});

export default ChangePasswordScreen;
