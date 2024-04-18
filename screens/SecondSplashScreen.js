import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const SecondSplashScreen = () => {

    const navigation = useNavigation()
    const handleNavigate = () => {
        navigation.navigate('ProfileScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.becycleText, { fontSize: width * 0.2 }]}>becycle</Text>
                <View style={{ width: width * 0.9, marginLeft: -50 }}>
                    <Text style={styles.subtitle}>
                        Has sido agregada a la
                        <Text style={{ fontSize: width * 0.05, textAlign: "center", color: '#FF6800', marginBottom: 10, alignSelf: "center" }}>
                            {" "}{" "} lista de espera
                        </Text>
                    </Text>
                </View>

                <View style={styles.circleContainer}>
                    <Svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M84.8854 43.1667L92.1979 50.5885L62.026 80.3125C60.0104 82.3281 57.3594 83.3333 54.6979 83.3333C52.0365 83.3333 49.3594 82.3177 47.3229 80.2865L32.8333 66.2448L40.0885 58.7604L54.6354 72.8594L84.8854 43.1667ZM125 62.5C125 96.9635 96.9635 125 62.5 125C28.0365 125 0 96.9635 0 62.5C0 28.0365 28.0365 0 62.5 0C96.9635 0 125 28.0365 125 62.5ZM114.583 62.5C114.583 33.7812 91.2188 10.4167 62.5 10.4167C33.7812 10.4167 10.4167 33.7812 10.4167 62.5C10.4167 91.2188 33.7812 114.583 62.5 114.583C91.2188 114.583 114.583 91.2188 114.583 62.5Z" fill="#00284D" />
                    </Svg>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={handleNavigate}>Ver reservas</Text>
                </TouchableOpacity>
            </View>
        </View >
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
        marginBottom: height * 0.01,
        marginTop:70
    },
    subtitle: {
        fontSize: width * 0.05,
        color: '#FF6800',
        marginBottom: height * 0.01,
        width: '60%',
        marginLeft: 90,
        marginTop:80
    },
    circleContainer: {
        alignItems: 'center',
        marginTop:50
    },
    buttonContainer: {
        width: width * 0.9,
        height: height * 0.07,
        backgroundColor: '#00284D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.30,
        marginTop: height * 0.25,
    },
    buttonText: {
        fontSize: width * 0.04,
        color: '#FFFFFF',
    },
});

export default SecondSplashScreen;
