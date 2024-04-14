import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HeaderTab = ({ userName }) => {
    return (
        <View style={styles.header}>
            <View>
            <Text style={styles.headerText}>be cycle</Text>
            </View>
           <View>
           <Text style={styles.userName}>{userName ? userName : 'hello'} </Text>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: width * 0.1, 
        left: -width * 0.45, 
        justifyContent:'space-between',
        width:'100%'
    },
    userName: {
        fontWeight: '400',
        fontSize: width * 0.06,
        lineHeight: width * 0.12,
        textAlign: 'center',
        color: '#00284D',
        marginLeft: 80, 
        marginTop:20
    },
    headerText: {
        fontWeight: '500',
        fontSize: width * 0.13,
        lineHeight: width * 0.12,
        textAlign: 'center',
        color: '#00284D',
        
        
    },
});

export default HeaderTab;
