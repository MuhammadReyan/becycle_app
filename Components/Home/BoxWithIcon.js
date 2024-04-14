import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // or 'react-native-vector-icons' if not using Expo

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
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <FontAwesome name="bicycle" size={24} color="black" style={styles.icon} />
                    <View>
                        <Text style={styles.number}>{number ? number : '15'}</Text>
                        <Text style={styles.text}>Your Text</Text>
                    </View>
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
        marginTop: 90,
    },
    boxContainer: {
        width: 334,
        height: 95,
        backgroundColor: '#00284D',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        justifyContent: 'space-between',
        marginLeft: -19
    },
    icon: {
        marginRight: 150,
        color: '#F0F2F4',
        fontSize: 44,
        marginTop: 7,
        marginLeft: 10
    },
    number: {
        fontSize: 44,
        fontWeight: 'bold',
        marginLeft: 15,
        color: '#F0F2F4',
    },
    text: {
        fontSize: 16,
        color: '#F0F2F4',
        marginTop: 1,
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    sessionBox: {
        width: 159,
        height: 35,
        position: 'absolute',
        top: 120,
        left: -200,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sessionText: {
        // fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 29.05,
        color: '#00284D',
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 100,
    },
    button: {
        width: 168,
        height: 42,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginLeft:-10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    textBox: {
        width: 336,
        height: 42,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 130,
        marginBottom:90
    },
    textBoxText: {
        color: '#00284D',
        fontSize: 16,
    },
});

export default BoxWithIcon;
