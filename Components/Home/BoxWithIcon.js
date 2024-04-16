import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const BoxWithIcon = ({ number }) => {
    const [displayText, setDisplayText] = useState("Aún no tienes clases pasadas");
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
                <Svg width={width * 0.15} height={width * 0.15} viewBox="0 0 52 59">
                    <Path
                        d="M41.2701 50.6248H13.1985C5.92099 50.6248 0 44.4784 0 36.9239C0 32.8614 1.72022 29.0344 4.71924 26.4246C7.71825 23.8149 11.6462 22.7228 15.5028 23.434L43.1438 28.5211C48.2754 29.4651 52 34.0775 52 39.4877C51.9994 45.6282 47.186 50.6248 41.2701 50.6248ZM13.189 25.8438C10.7027 25.8438 8.28155 26.7452 6.34157 28.4339C3.91659 30.5447 2.52539 33.6383 2.52539 36.9239C2.52539 43.0329 7.31283 48.0026 13.1978 48.0026H41.2701C45.7936 48.0026 49.4734 44.1827 49.4734 39.487C49.4734 35.3505 46.6253 31.8244 42.7011 31.1019L15.0608 26.0149C14.4375 25.9002 13.811 25.8438 13.189 25.8438Z"
                        fill="#F0F2F4"
                    />
                    <Path
                        d="M12.9786 42.7103C9.77435 42.7103 7.16687 40.0042 7.16687 36.678C7.16687 33.3518 9.77372 30.645 12.9786 30.645C16.1835 30.645 18.7903 33.3518 18.7903 36.678C18.7903 40.0042 16.1829 42.7103 12.9786 42.7103ZM12.9786 33.2672C11.1668 33.2672 9.69289 34.7972 9.69289 36.678C9.69289 38.5581 11.1668 40.0882 12.9786 40.0882C14.7904 40.0882 16.2643 38.5581 16.2643 36.678C16.2637 34.7966 14.7898 33.2672 12.9786 33.2672Z"
                        fill="#F0F2F4"
                    />
                    <Path
                        d="M24.6595 37.9891H17.5267C16.8295 37.9891 16.2637 37.4017 16.2637 36.678C16.2637 35.9543 16.8289 35.3669 17.5267 35.3669H24.6595C25.3567 35.3669 25.9225 35.9543 25.9225 36.678C25.9225 37.4017 25.3567 37.9891 24.6595 37.9891Z"
                        fill="#F0F2F4"
                    />
                    <Path
                        d="M17.528 26.4482C17.1182 26.4482 16.7165 26.2417 16.4734 25.8609L9.28183 14.5737C8.89724 13.9699 9.05701 13.1564 9.638 12.7572C10.2196 12.3579 11.0039 12.5231 11.3879 13.1269L18.5801 24.4134C18.9647 25.0172 18.8049 25.8307 18.2239 26.2299C18.0092 26.3774 17.7674 26.4482 17.528 26.4482Z"
                        fill="#F0F2F4"
                    />
                    <Path
                        d="M17.5268 15.1617H4.65925C3.96207 15.1617 3.39624 14.5743 3.39624 13.8506C3.39624 13.1269 3.96144 12.5395 4.65925 12.5395H17.5268C18.224 12.5395 18.7898 13.1269 18.7898 13.8506C18.7898 14.5743 18.2246 15.1617 17.5268 15.1617Z"
                        fill="#F0F2F4"
                    />
                    <Path
                        d="M40.199 30.6201C39.5019 30.6201 38.936 30.0334 38.936 29.3097V11.6191C38.936 8.89795 41.0686 6.68352 43.69 6.68352C44.6265 6.68352 45.469 6.06927 45.786 5.15479L47.2763 0.866862C47.5131 0.185094 48.2362 -0.167589 48.893 0.0782402C49.5491 0.32407 49.8889 1.07533 49.652 1.75644L48.1623 6.04371C47.486 7.99396 45.6881 9.30505 43.69 9.30505C42.4617 9.30505 41.4621 10.3428 41.4621 11.6185V29.309C41.4621 30.0334 40.8969 30.6201 40.199 30.6201Z"
                        fill="#F0F2F4"
                    />
                    <Path
                        d="M50.7364 59H1.26301C0.565828 59 0 58.4126 0 57.6889V53.5609C0 50.4956 2.40161 48.0026 5.3539 48.0026H46.6455C49.5978 48.0026 51.9994 50.4963 51.9994 53.5609V57.6889C51.9994 58.4126 51.4342 59 50.7364 59ZM2.52539 56.3778H49.4734V53.5609C49.4734 51.9417 48.2047 50.6247 46.6455 50.6247H5.3539C3.79471 50.6247 2.52602 51.9424 2.52602 53.5609L2.52539 56.3778Z"
                        fill="#F0F2F4"
                    />
                </Svg>
                <View>
                    <Text style={styles.number}>{number ? number : '15'}</Text>
                    <Text style={styles.text}>Clases restantes</Text>
                </View>
            </View>

            <View style={styles.sessionBox}>
                <Text style={styles.sessionText}>Sesiones</Text>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: button1Color }]}
                    onPress={() => handleButtonClick("Aún no reservas una clase")}
                >
                    <Text style={[styles.buttonText, { color: buttonTextColor }]}>Próximas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: button2Color }]}
                    onPress={() => handleButtonClick("Aún no tienes clases pasadas")}
                >
                    <Text style={[styles.buttonText, { color: buttonTextColor }]}>Pasadas</Text>
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
    number: {
        fontSize: width * 0.12,
        fontWeight: 'bold',
        color: '#F0F2F4',
        marginLeft: 10
    },
    text: {
        fontSize: width * 0.025,
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
        marginTop: width * 0.20,
        marginBottom: width * 0.1,
    },
    textBoxText: {
        fontSize: width * 0.04,
        color: '#00284D',
    },
});

export default BoxWithIcon;
