import React from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView,TextInput } from 'react-native';
import { Ionicons, EvilIcons,MaterialCommunityIcons   } from '@expo/vector-icons';



export default function Payment() {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name="chevron-back" size={26} color="#181461" />
                    <Ionicons name="person-circle-outline" size={26} color="#181461" />
                </View>
                <View style={styles.body}>
                    <Text style={{ fontSize: 16, marginVertical: 20 }}>Dr. Clara Odding Confirmation</Text>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 24 }}>Thu, 09 Apr <Text style={{ color: "#2AC052", fontWeight: "bold" }}>08:00</Text></Text>
                    </View>
                    <View style={styles.locationInfo}>
                        <EvilIcons name="location" size={28} color="#181461" />
                        <Text style={{ width: 150, color: "#A1A1A1", }}>
                            2 Rue de Ermesinde Frisange - Luxembourg 3 km
                        </Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Message"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Reason of the visit"
                    />
                    <Text style={{color:"#181461",fontSize: 24,width:200}}>
                        Check+Scaling 124 &#x20AC;
                    </Text>
                    <Text style={{color:"#181461",fontSize: 14,fontWeight:"bold",marginVertical:15}}>Select the card</Text>
                    <ScrollView horizontal={true} style={styles.cardScroll}>
                    <Image style={styles.img} source={require("../assets/images/Card1.png")}/>
                    <Image style={styles.img} source={require("../assets/images/Card2.png")}/>
                    </ScrollView>
                    <Text style={{color:"#000",fontSize: 14,marginVertical:10}}>
                        Manage Cards <MaterialCommunityIcons name="greater-than" size={14} color="#000" />
                    </Text>
                    <TouchableOpacity style={styles.mButton}>
                            <Text style={{ color: "#fff" }}>Book a new appointment</Text>
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
    cardScroll: {
        overflow: "visible",
        width: "100%"
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
    input: {
        width: "100%",
        alignItems: "center",
        paddingVertical:10,
        marginVertical: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    img:{
        marginRight: 10
    },
    mButton: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#2A2AC0",
        padding: 12,
        borderRadius: 10,
        marginVertical: 10,
    },
});