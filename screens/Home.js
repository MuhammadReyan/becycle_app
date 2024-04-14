import React from 'react'
import { SafeAreaView, View } from 'react-native'
import HeaderTab from '../Components/Home/HeaderTab'
import { Divider } from 'react-native-elements'
import BottomTabs from '../Components/Home/BottomTab'
import BoxWithIcon from '../Components/Home/BoxWithIcon'


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 10 }}>
                <HeaderTab />
                <BoxWithIcon />
                <BottomTabs/>
            </View>

            <Divider width={1} />
            {/* <BottomTabs /> */}
        </SafeAreaView>
    )
}

export default Home
