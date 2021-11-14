import React from "react"
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';



export default function Appointments(props) {

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
                    <View style={styles.appointmentsInput}>
                        <Text style={styles.infoText}>My Appointments</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Your Location"
                            />
                            <EvilIcons name="location" size={28} color="#2A2AC0" />
                        </View>
                    </View>
                    <View style={styles.tabContainer}>
                        <View style={styles.tabBtn}>
                            <TouchableOpacity>
                                <Text style={styles.upcomingBtn}>Upcoming</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.pastBtn}>Past</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>09/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Dentist - Clara Odding</Text>
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold" }}>Modify</Text>
                            </View>
                        </View>
                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>22/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Cardiologist - Steven Pauliner</Text>
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold" }}>Modify</Text>
                            </View>
                        </View>
                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>28/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Dermatologist - Noemi Shinte</Text>
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold" }}>Modify</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.mButton}
                            onPress={() => props.navigation.navigate('BookAppointment')}
                        >
                            <Text style={{ color: "#fff" }}>Book a new appointment</Text>
                        </TouchableOpacity>
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
        width: "100%",
    },
    input: {
        width: "90%",
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
        fontSize: 14,
        color: "#000",
        fontWeight: "bold",
        marginVertical: 15
    },
    tabContainer: {
        width: "100%",
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
    },
    tabBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#A1A1A1",
    },
    upcomingBtn: {
        color: "#2A2AC0",
        fontSize: 18,
        borderBottomWidth: 2,
        padding: 10,
        borderColor: "#2A2AC0"

    },
    pastBtn: {
        color: "#A1A1A1",
        fontSize: 18,
        padding: 10,
    },
    appointmentsDetails: {
        marginVertical: 10,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#A1A1A1",
    },
    innerDetails: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dateColor: {
        color: "#A1A1A1",
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