import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const { width } = Dimensions.get('window');

export default function BottomTabs() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("home");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    // Perform navigation logic based on the tab
    switch (tab) {
      case "shopping-cart":
        navigation.navigate('Comprar');
        break;
      case "calendar":
        // Navigate to the calendar screen
        break;
      default:
        navigation.navigate('Home');
        break;
    }
  };

  return (
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
