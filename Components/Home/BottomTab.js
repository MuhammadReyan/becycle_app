import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
        marginTop: 7,
        gap: 80,
        marginLeft: -40,
      }}
    >
      <Icon
        icon="home"
        text="Home"
        active={activeTab === "home"}
        onPress={() => handleTabPress("home")}
      />
      <Icon
        icon="shopping-cart"
        text="Compror"
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
    <View style={{ alignItems: "center" }}>
      <FontAwesome5
        name={icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
          color: active ? "#00284D" : "#B8B8B8",
        }}
      />
      <Text style={{ color: active ? "#00284D" : "#555", fontSize: 12 }}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);
