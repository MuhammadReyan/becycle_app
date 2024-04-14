import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomTabs from '../Home/BottomTab';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.becycleText}>be cycle</Text>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Información personal</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.row}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}>Daniela Pérez</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Correo:</Text>
                    <Text style={styles.value}>daniela@hotmail.com</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Celular:</Text>
                    <Text style={styles.value}>4421143497</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Género:</Text>
                    <Text style={styles.value}>Femenino</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Fecha de nacimiento:</Text>
                    <Text style={styles.value}>10 / 10 / 1998</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>¿Quieres cambiar algún dato? Por favor contacta a soporte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
                <Text style={styles.bottomButtonText}>Ver reservas</Text>
            </TouchableOpacity>

            <View>
                <BottomTabs/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    becycleText: {
        width: 146,
        height: 44,
        top: -10,
        left: -125,
        fontSize: 36,
        fontWeight: '600',
        lineHeight: 43.57,
        color:'#00284D',
        bottom:10
    },
    headingContainer: {
        marginBottom: 198,
    },
    heading: {
        fontSize: 18,
        fontWeight: '700',
        width: 198,
        height: 22,
        top: 0,
        left: -76,
    },
    contentContainer: {
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    label: {
        width: 77,
        height: 22,
        fontSize: 18,
        left: -36,
        fontWeight: '700',
        top: -150,
        color: "#00284D",
    },
    value: {
        width: '70%',
        fontSize: 18,
        top: -150,
    },
    button: {
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        top: -90,
        left: -25,
    },
    buttonText: {
        color: '#00284D',
        fontSize: 16,
        width: 232,
        height: 42,
        top: 10,
        textAlign: 'center',
    },
    bottomButton: {
        backgroundColor: '#00284D',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: 347,
        height: 53,
        top: -10,
        left: -20,
    },
    bottomButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ProfileScreen;
