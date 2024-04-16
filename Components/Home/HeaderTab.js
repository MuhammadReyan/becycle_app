import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HeaderTab = ({ userName }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>be cycle</Text>
            <Text style={styles.userName}>{userName ? userName : 'hello'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        paddingTop: width * 0.08, // Adjusted top padding for better spacing
        paddingBottom: width * 0.05, // Adjusted bottom padding for better spacing
        width: '100%',
    },
    userName: {
        fontWeight: '400',
        fontSize: width * 0.04, // Adjusted font size for better responsiveness
        color: '#00284D',
    },
    headerText: {
        fontWeight: '500',
        fontSize: width * 0.08, // Adjusted font size for better responsiveness
        color: '#00284D',
    },
});

export default HeaderTab;
