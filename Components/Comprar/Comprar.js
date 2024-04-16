import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import BottomTabs from "../Home/BottomTab";
import { useNavigation } from "@react-navigation/native";

const memberships = [
    { title: "1 mes", subtitle: "ilimitado", price: "$200" },
    { title: "3 meses", subtitle: "ilimitados", price: "$200" },
    { title: "6 meses", subtitle: "ilimitados", price: "$200" },
    { title: "12 meses", subtitle: "ilimitados", price: "$200" },

];

const packages = [
    { title: "1 clase", subtitle: "Vigencia 5 días", price: "$200" },
    { title: "3 clases", subtitle: "Vigencia 5 días", price: "$200" },
    { title: "6 clases", subtitle: "Vigencia 5 días", price: "$200" },
    { title: "12 clases", subtitle: "Vigencia 5 días", price: "$200" },
];

const Comprar = () => {


    const renderItem = ({ item }) => {
        return (
            <View style={styles.box}>
                <Text style={styles.boxTitle}>{item.title}</Text>
                <Text style={styles.boxSubtitle}>{item.subtitle}</Text>
                <Text style={styles.boxPrice}>{item.price}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* Heading: Membresías */}
            <Text style={styles.heading}> Membresías</Text>

            {/* Membership Boxes */}
            <View style={{height:600}}>
                <FlatList
                    data={memberships}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.boxContainer}
                />

                {/* Heading: Paquetes */}
                <View >

                <Text style={{ color: '#FF6800',fontWeight:'bold'}} >Paquetes</Text>
                </View>

                {/* Package Boxes */}
             
                <FlatList
                    data={packages}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.boxContainer}
                    />

                    </View>
            
            <View style={{position:"absolute",bottom:-10}}>
            <BottomTabs />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: -100,
        paddingRight: 10,
        alignItems: "center",
        justifyContent:"flex-start"
      

    },
    heading: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
        color: '#FF6800',
        marginLeft: -230,
        marginTop: 30
    },
    boxContainer: {
        alignItems: "center",
        

    },
    box: {
        width: 160,
        height: 130,
        backgroundColor: "#00284D",
        borderRadius: 30,
        margin: 4,
        justifyContent: "center",
        alignItems: "center",

    },
    boxTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
    },
    boxSubtitle: {
        fontSize: 14,
        color: "#FFF",
        textAlign: "center",
    },
    boxPrice: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
    },
});

export default Comprar;
