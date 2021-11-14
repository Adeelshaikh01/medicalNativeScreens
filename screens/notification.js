import React from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView,TextInput } from 'react-native';
import { Ionicons, EvilIcons,MaterialCommunityIcons   } from '@expo/vector-icons';



export default function Notifications(props) {

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
                <Text style={{ fontSize: 14, fontWeight: "bold",marginVertical: 20 }}>Heartbeat Anomaly</Text>
                <View style={styles.imgBody}>
                    <Image source={require('../assets/images/medical-1.png')} />
                    </View>
                    <Text style={styles.message}>
                    Dear patient,
                    There is a heartbeat anomaly that has been recorded, 
                    and you should book a visit with a specialist as soon as possible.
                    </Text>
                <View style={styles.specialitiesDetail}>
                        <Image
                            style={styles.cardImg}
                            source={require('../assets/images/martin.jpg')}
                        />
                        <View style={styles.specialitiesInfo}>
                            <Text>Dr. Clara Odding</Text>
                            <Text style={styles.drInfo} >Dentist</Text>
                            <Text style={styles.drInfo}>2 Rue de Ermesinde Frisange - Luxembourg 3 km</Text>
                            <View style={styles.reviews}>
                                <Image source={require('../assets/images/stars.png')} />
                                <Text style={{ fontSize: 12, color: "#A1A1A1" }}>(213)</Text>
                            </View>
                        </View>
                    </View>
                    
                    
                     <TouchableOpacity style={styles.mButton}>
                            <Text style={{ color: "#fff" }}>Book a visit</Text>
                        </TouchableOpacity>
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
    
    mButton: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#2A2AC0",
        padding: 12,
        borderRadius: 10,
        marginVertical: 25,
    },
    specialitiesDetail: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        width: "100%",
        alignSelf: "center",
        paddingVertical: 15,
        justifyContent: "center"
    },
    cardImg: {
        width: 80,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
        flex: 0.3
    },
    specialitiesInfo: {
        flex: 0.5,
    },
    reviews: {
        flexDirection: "row",
        alignItems: "center",
    
    },
    drInfo: {
        fontSize: 12,
        color: "#A1A1A1",
        marginVertical: 5
    },
    imgBody:{
        alignItems:"center",
        marginVertical: 30
    },
    message:{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    }
});