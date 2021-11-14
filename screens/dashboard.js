import React from "react"
import { StyleSheet, View, TextInput, Text, Image, ScrollView } from 'react-native';
import { FontAwesome5, EvilIcons, Ionicons } from '@expo/vector-icons';



export default function Dashboard() {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerItems}>
                        <FontAwesome5 name="bars" size={24} color="#181461" />
                        <Ionicons name="person-circle-outline" size={26} color="#181461" />
                    </View>
                    <Text style={styles.infoText}>Dashboard</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.appointmentsInput}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Search"
                            />
                            <EvilIcons name="search" size={22} color="#A1A1A1" />
                        </View>
                    </View>
                    <View style={styles.cardContainer} >
                        <View style={styles.card}>
                             <Text style={styles.cardTitle} >Appointments</Text>   
                             <Image
                                    style={styles.cardImg}
                                    source={require('../assets/images/appointments.png')}
                                />
                        </View>
                        <View style={styles.card}>
                             <Text style={styles.cardTitle} >Records</Text>   
                             <Image
                                    style={styles.cardImg}
                                    source={require('../assets/images/records.png')}
                                />
                        </View>
                        <View style={styles.card}>
                             <Text style={styles.cardTitle} >Forum</Text>   
                             <Image
                                    style={styles.cardImg}
                                    source={require('../assets/images/forum.png')}
                                />
                        </View>
                        <View style={styles.card}>
                             <Text style={styles.cardTitle} >Account Settings</Text>   
                             <Image
                                    style={styles.cardImg}
                                    source={require('../assets/images/accountSetting.png')}
                                />
                        </View>
                        
                    </View>
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
        width: "100%",
        height: 150,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },
    headerItems: {
        width: "100%",
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    body: {
        marginTop: 20,    
        width: "100%",
    },
    input: {
        width: "94%",
        alignItems: "center",
        marginVertical: 10,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    appointmentsInput: {
        width: "90%",
        alignSelf: "center",
    },
    infoText: {
        fontSize: 20,
        color: "#181461",
        fontWeight: "bold",
        marginVertical: 15
    },
    cardContainer:{
        marginVertical: 15,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center"
    },
    card:{
        backgroundColor: "#fff",
        width: "48%",
        height: 250,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    cardTitle:{
        fontSize: 16,
        color: "#181461",
        fontWeight: "bold",
        position: "absolute",
        top: 10,
        left: 10

    },
    cardImg: {
        width: 100,
        height: 100,
        resizeMode: "contain"
      },
});