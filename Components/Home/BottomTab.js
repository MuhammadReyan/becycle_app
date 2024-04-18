import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const { width } = Dimensions.get('window');

export default function BottomTabs() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("home");
  const handleTabPress = (tab) => {
    setActiveTab(tab);
    // Perform navigation logic based on the tab
    if (tab === "shopping-cart") {
      navigation.navigate('Comprar');
    } else if (tab === "calendar") {
      // Navigate to the calendar screen
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Icon
          icon="home"
          text="Home"
          active={activeTab === "home"}
          onPress={() => handleTabPress("home")}
        />
        <Icon
          icon="shopping-cart"
          text="Comprar"
          active={activeTab === "shopping-cart"}
          onPress={() => handleTabPress("shopping-cart")}
        />
        <Icon
          icon="calendar"
          text="Reverser"
          active={activeTab === "calendar"}
          onPress={() => handleTabPress("calendar")}
        />
      </View>
    </ScrollView>
  );
}

const Icon = ({ icon, text, active, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.iconContainer}>
      <FontAwesome5
        name={icon}
        size={width * 0.06}
        style={[
          styles.icon,
          { color: active ? "#00284D" : "#B8B8B8" },
        ]}
      />
      <Text style={[styles.text, { color: active ? "#00284D" : "#555" }]}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingBottom: 10,
    // backgroundColor: '#FFFFFF', // Background color added for better visibility
     marginTop:210,
    gap:70,
 
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    marginBottom: 3,
  },
  text: {
    fontSize: width * 0.035,
  },
});
