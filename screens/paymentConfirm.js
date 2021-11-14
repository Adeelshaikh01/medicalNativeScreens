import React from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, } from 'react-native';
import { Ionicons, EvilIcons,   } from '@expo/vector-icons';



export default function PaymentConfirm(props) {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="chevron-back" size={26} color="#181461" />
                    </TouchableOpacity>
                    <Ionicons name="person-circle-outline" size={26} color="#181461" />
                </View>
                <View style={styles.body}>
                <View style={{flexDirection: "row",alignItems: "center",marginVertical: 20}}>
                    <Image source={require("../assets/images/greenMark.png")}/>
                <Text style={{ fontSize: 16,fontWeight: "bold",marginLeft:5 }}>Appointment Confirmed!</Text>
                </View>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 24 }}>Thu, 09 Apr <Text style={{ color: "#2AC052", fontWeight: "bold" }}>08:00</Text></Text>
                    </View>
                    <View style={styles.locationInfo}>
                        <EvilIcons name="location" size={28} color="#181461" />
                           <View>
                           <Text style={{ fontSize: 14, marginVertical: 10,color: "#000", }}>Dr. Clara Odding Confirmation</Text>
                            <Text style={{ width: 150, color: "#A1A1A1", }}>
                            2 Rue de Ermesinde Frisange - Luxembourg 3 km
                            </Text>
                           </View>
                    </View>
                        <View style={styles.img}>
                        <Image source={require("../assets/images/paymentConfirm.png")}/>
                        
                        </View>
                    
                    <TouchableOpacity style={styles.mButton}
                    onPress={() => props.navigation.navigate('Feedback')}
                    >
                            <Text style={{ color: "#fff" }}>Add to calendar</Text>
                        </TouchableOpacity>

                        <Text style={{textAlign:"center",marginVertical: 20,fontSize: 12}}>2 days 3 hours before the appointment</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        width: "100%",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#ECF1FA"
    },
    header: {
        flex: 0.1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
        paddingHorizontal: 10,
    },
    body: {
        flex: 0.9,
        width: "90%",
        marginTop: 20
    },
    card: {
        width: 240,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#000"
    },
    locationInfo: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#A1A1A1",
    },
    mButton: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#2A2AC0",
        padding: 12,
        borderRadius: 10,
        marginVertical: 10,
    },
    img:{
        alignItems: 'center',
        justifyContent: "center",
        padding: 50,
    }
});