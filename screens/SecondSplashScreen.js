import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const SecondSplashScreen = () => {

    const navigation =useNavigation()
    const handleNavigate = ()=>{
navigation.navigate('ProfileScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.becycleText, { fontSize: width * 0.2 }]}>becycle</Text>
                <View style={{ width: width * 0.9 }}>
                    <Text style={styles.subtitle}>Has sido agregada a la lista de espera</Text>
                </View>
                <View style={styles.circleContainer}>
                    <View style={[styles.circle, { width: width * 0.4, height: width * 0.4, borderWidth: width * 0.04 }]} />
                    <Icon name="check" size={width * 0.08} color="#FFF" style={styles.checkIcon} />
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={handleNavigate}>Ver reservas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    becycleText: {
        fontWeight: '400',
        color: '#00284D',
        marginBottom: height * 0.08,
    },
    subtitle: {
        fontSize: width * 0.05,
        color: '#FF6800',
        marginBottom: height * 0.02,
        marginLeft:10
    },
    circleContainer: {
        alignItems: 'center',
    },
    circle: {
        borderRadius: width * 0.2,
        marginBottom: height * 0.02,
        borderColor: '#00284D',
        marginTop:70
    },
    checkIcon: {
        marginTop: -width * 0.28,
        color: "#00284D",
        textAlign: 'center'
    },
    buttonContainer: {
        width: width * 0.9,
        height: height * 0.07,
        backgroundColor: '#00284D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.02,
        marginTop: height * 0.25,
    },
    buttonText: {
        fontSize: width * 0.04,
        color: '#FFFFFF',
    },
});

export default SecondSplashScreen;
