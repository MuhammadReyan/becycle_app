import React from 'react'
import { SafeAreaView, View } from 'react-native'
import HeaderTab from '../Components/Home/HeaderTab'
import { Divider } from 'react-native-elements'
import BottomTabs from '../Components/Home/BottomTab'
import BoxWithIcon from '../Components/Home/BoxWithIcon'


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 10,}}>
                <HeaderTab />
                <BoxWithIcon />
            </View>

            <Divider width={1}  />
              <View style={{marginTop:65}}>
              <BottomTabs/>
           
              </View>
        </SafeAreaView>
    )
}

export default Home
