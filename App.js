import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/welcome';
import MobileNumber from './screens/mobileNumber';
import Verification from './screens/verification';
import Location from './screens/Location';
import Map from './screens/map';
import Appointments from './screens/Appointments';
import Dashboard from './screens/dashboard';
import BookAppointment from './screens/bookAppointment';
import DoctorDetails from './screens/doctorDetails';
import Payment from './screens/payment';
import PaymentConfirm from './screens/paymentConfirm';
import Feedback from './screens/feedback';
import MedicalRecords from './screens/medicalRecords';
import Forums from './screens/forums';
import Notifications from './screens/notification';
import { DrawerItems } from './screens/drawerContent';
import FirstIntro from './screens/Intro1';
import SecondIntro from './screens/intro2';
import ThirdIntro from './screens/intro3';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';


export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    
    <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <DrawerItems {...props} />}>
      <Drawer.Group 
      screenOptions={{ headerShown: false}}
      >
        <Drawer.Screen name="FirstIntro" component={FirstIntro} />
        <Drawer.Screen name="SecondIntro" component={SecondIntro} />
        <Drawer.Screen name="ThirdIntro" component={ThirdIntro} />
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="MobileNumber" component={MobileNumber} />
        <Drawer.Screen name="Verification" component={Verification} />
        <Drawer.Screen name="Location" component={Location} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Appointments" component={Appointments} />
        <Drawer.Screen name="MedicalRecords" component={MedicalRecords} />
        <Drawer.Screen name="Forums" component={Forums} />
        <Drawer.Screen name="DoctorDetails" component={DoctorDetails} />
        <Drawer.Screen name="Payment" component={Payment} />
        <Drawer.Screen name="PaymentConfirm" component={PaymentConfirm} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Group>

        <Drawer.Group>
        <Drawer.Screen
          options={({ navigation }) => ({
            title: false,
            headerLeft: () => (
              <FontAwesome5 style={styles.headerLeft} name="bars" size={24} color="#181461" onPress={() => navigation.toggleDrawer()} />
            ),
            headerRight: () => (
              <Ionicons name="person-circle-outline" size={26} style={styles.headerRight} color="#181461" />
            ),
          })}
          name="Dashboard" component={Dashboard} />
        <Drawer.Screen
          options={({ navigation }) => ({
            title: false,
            headerLeft: () => (
              <FontAwesome5 style={styles.headerLeft} name="bars" size={24} color="#181461" onPress={() => navigation.toggleDrawer()} />
            ),
            headerRight: () => (
              <Ionicons name="person-circle-outline" size={26} style={styles.headerRight} color="#181461" />
            ),
          })}
          name="BookAppointment" component={BookAppointment} />
        </Drawer.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  



  );
}

const styles = StyleSheet.create({
  headerRight: {
    paddingRight: 20
  },
  headerLeft: {
    paddingLeft: 20
  },
})

