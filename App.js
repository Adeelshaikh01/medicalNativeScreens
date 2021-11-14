import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
export default function App() {
  return (
    <View style={styles.container}>
      <PaymentConfirm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF1FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

