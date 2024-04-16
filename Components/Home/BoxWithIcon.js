import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // or 'react-native-vector-icons' if not using Expo

const { width } = Dimensions.get('window');

const BoxWithIcon = ({ number }) => {
    const [displayText, setDisplayText] = useState("Initial Text");
    const [button1Color, setButton1Color] = useState('#00284D');
    const [button2Color, setButton2Color] = useState('#FFFFFF');
    const [buttonTextColor, setButtonTextColor] = useState('#FFFFFF');

    const handleButtonClick = (text) => {
        setDisplayText(text);
        // Toggle button colors
        if (button1Color === '#00284D') {
            setButton1Color('#FFFFFF');
            setButton2Color('#00284D');
        } else {
            setButton1Color('#00284D');
            setButton2Color('#FFFFFF');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <FontAwesome name="bicycle" size={width * 0.15} color="#F0F2F4" style={styles.icon} />
                <View>
                    <Text style={styles.number}>{number ? number : '15'}</Text>
                    <Text style={styles.text}>Your Text</Text>
                </View>
            </View>

            <View style={styles.sessionBox}>
                <Text style={styles.sessionText}>Sesiones</Text>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: button1Color }]}
                    onPress={() => handleButtonClick("Button 1 Text")}
                >
                    <Text style={[styles.buttonText, { color: buttonTextColor }]}>Button 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: button2Color }]}
                    onPress={() => handleButtonClick("Button 2 Text")}
                >
                    <Text style={[styles.buttonText, { color: buttonTextColor }]}>Button 2</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textBox}>
                <Text style={styles.textBoxText}>{displayText}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: width * 0.1,
    },
    boxContainer: {
        width: width * 0.9,
        height: width * 0.25,
        backgroundColor: '#00284D',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    icon: {
        marginRight: width * 0.08,
    },
    number: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        color: '#F0F2F4',
    },
    text: {
        fontSize: width * 0.035,
        color: '#F0F2F4',
    },
    sessionBox: {
        width: width * 0.5,
        height: width * 0.1,
        position: 'absolute',
        top: width * 0.2,
        left: -width * 0.5,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sessionText: {
        fontWeight: '500',
        fontSize: width * 0.05,
        color: '#00284D',
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: width * 0.15,
    },
    button: {
        width: width * 0.4,
        height: width * 0.1,
        borderRadius: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: width * 0.02,
    },
    buttonText: {
        fontSize: width * 0.04,
        fontWeight: 'bold',
    },
    textBox: {
        width: width * 0.9,
        height: width * 0.1,
        backgroundColor: '#FFFFFF',
        borderRadius: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width * 0.15,
        marginBottom: width * 0.1,
    },
    textBoxText: {
        fontSize: width * 0.04,
        color: '#00284D',
    },
});

export default BoxWithIcon;
