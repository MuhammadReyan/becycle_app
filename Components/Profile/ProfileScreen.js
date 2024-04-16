import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import BottomTabs from '../Home/BottomTab';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.becycleText, { fontSize: width * 0.08 }]}>be cycle</Text>
            <View style={{position:'relative',top:-380,left:-70}}>
                <Text style={[styles.heading, { fontSize: width * 0.05 }]}>
                <Icon name="chevron-left" size={15} color="black" />
                  {" "} {" "}  Información personal
                    </Text>
             
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.row}>
                    <Text style={[styles.label, { fontSize: width * 0.045 }]}>Nombre:</Text>
                    <Text style={[styles.value, { fontSize: width * 0.045 }]}>Daniela Pérez</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, { fontSize: width * 0.045 }]}>Correo:</Text>
                    <Text style={[styles.value, { fontSize: width * 0.045 }]}>daniela@hotmail.com</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, { fontSize: width * 0.045 }]}>Celular:</Text>
                    <Text style={[styles.value, { fontSize: width * 0.045 }]}>4421143497</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, { fontSize: width * 0.045 }]}>Género:</Text>
                    <Text style={[styles.value, { fontSize: width * 0.045 }]}>Femenino</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, { fontSize: width * 0.045 }]}>Fecha de nacimiento:</Text>
                    <Text style={[styles.value, { fontSize: width * 0.045, marginLeft: -40 }]}>10/10/1998</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={[styles.buttonText, { fontSize: width * 0.035 }]}>¿Quieres cambiar algún dato? Por favor contacta a soporte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
                <Text style={[styles.bottomButtonText, { fontSize: width * 0.04 }]}>Ver reservas</Text>
            </TouchableOpacity>

            <View style={{ position: 'absolute', bottom: -10 }}>
                <BottomTabs  />
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
        paddingHorizontal: width * 0.10,
    },
    becycleText: {
        color: '#00284D',
        marginBottom: height * 0.55,
        marginLeft: -220
    },
    headingContainer: {
        marginTop: height * 0.03, // Move heading to the top
        marginBottom: height * 0.02, // Add margin bottom for spacing
        marginLeft: -150,

    },
    heading: {
        fontWeight: '700',
        marginBottom: height * 0.02,
    },
    contentContainer: {
        marginBottom: height * 0.03,
        marginTop: -300, // Move content container up
        
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: height * 0.02,
        gap: 100
    },
    label: {
        fontWeight: 700,
        color: "#00284D",
        marginLeft: 80,
        marginTop:20



    },
    value: {
        width: '70%',
        marginTop:20



    },
    button: {
        borderRadius: width * 0.1,
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.015,
        marginBottom: height * 0.03,
    },
    buttonText: {
        color: '#00284D',
        textAlign: 'center',
    },
    bottomButton: {
        backgroundColor: '#00284D',
        borderRadius: width * 0.1,
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.020,
        marginBottom: height * 0.02,
        marginTop: 10,
        width: '120%'
    },
    bottomButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

export default ProfileScreen;
