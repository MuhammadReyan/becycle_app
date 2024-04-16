import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SecondSplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.becycleText}>becycle</Text>
                <View style={{width:267, height:58, flexDirection:'row'}}>
                    <Text style={styles.subtitle}>Has sido agregada a la lista de espera</Text>
                </View>
                <View style={styles.circleContainer}>
                    <View style={styles.circle} />
                    <Icon name="check" size={30} color="#FFF" style={styles.checkIcon} />
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Ver reservas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    becycleText: {
        fontSize: width * 0.2,
        fontWeight: '400',
        color: '#00284D',
        marginTop: -90,
        marginBottom: 80,
    },
    subtitle: {
        fontSize: 16,
        color: '#FF6800',
        marginBottom: 20,
    },
    circleContainer: {
        alignItems: 'center',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        borderWidth: 10,
        borderColor: '#00284D'
    },
    checkIcon: {
        position: 'absolute',
        top: '42%',
        left: '50%',
        marginTop: -15,
        marginLeft: -15,
        color: "#00284D",
        textAlign: 'center'
    },
    buttonContainer: {
        width: 347,
        height: 53,
        position: 'absolute',
        top: 580,
        left: -175,
        backgroundColor: '#00284D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});

export default SecondSplashScreen;
