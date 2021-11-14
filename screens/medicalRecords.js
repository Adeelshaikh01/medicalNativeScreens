import React from "react"
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, EvilIcons,AntDesign} from '@expo/vector-icons';



export default function MedicalRecords() {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name="chevron-back" size={26} color="#181461" />
                    <Ionicons name="person-circle-outline" size={26} color="#181461" />
                </View>
                <View style={styles.body}>
                    <View style={styles.appointmentsInput}>
                        <Text style={styles.infoText}>Medical records</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Search"
                            />
                            <EvilIcons name="search" size={28} color="#A1A1A1" />
                        </View>
                    </View>
                    <View style={styles.tabContainer}>
                        <View style={styles.tabBtn}>
                            <TouchableOpacity>
                                <Text style={styles.upcomingBtn}>Clinics</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.pastBtn}>Lab</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.pastBtn}>Medicines</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>09/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Dentist - Clara Odding</Text>
                                <View style={{flexDirection:"row",alignItems: "center"}}>
                                <AntDesign name="download" size={16} color="#2A2AC0" />
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold",marginLeft:5 }}>Download</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>09/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Cardiologist - Steven Pauliner</Text>
                                <View style={{flexDirection:"row",alignItems: "center"}}>
                                <AntDesign name="download" size={16} color="#2A2AC0" />
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold",marginLeft:5 }}>Download</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>09/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Dermatologist - Noemi Shinte</Text>
                                <View style={{flexDirection:"row",alignItems: "center"}}>
                                <AntDesign name="download" size={16} color="#2A2AC0" />
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold",marginLeft:5 }}>Download</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>09/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Ginecologist - Chiara Uber</Text>
                                <View style={{flexDirection:"row",alignItems: "center"}}>
                                <AntDesign name="download" size={16} color="#2A2AC0" />
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold",marginLeft:5 }}>Download</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>09/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Orthopedic - Stefano Lanza</Text>
                                <View style={{flexDirection:"row",alignItems: "center"}}>
                                <AntDesign name="download" size={16} color="#2A2AC0" />
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold",marginLeft:5 }}>Download</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>09/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Cardiologist - Steven Pauliner</Text>
                                <View style={{flexDirection:"row",alignItems: "center"}}>
                                <AntDesign name="download" size={16} color="#2A2AC0" />
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold",marginLeft:5 }}>Download</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>09/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Dermatologist - Noemi Shinte</Text>
                                <View style={{flexDirection:"row",alignItems: "center"}}>
                                <AntDesign name="download" size={16} color="#2A2AC0" />
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold",marginLeft:5 }}>Download</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>09/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Ginecologist - Chiara Uber</Text>
                                <View style={{flexDirection:"row",alignItems: "center"}}>
                                <AntDesign name="download" size={16} color="#2A2AC0" />
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold",marginLeft:5 }}>Download</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <Text style={styles.dateColor}>09/04/2020</Text>
                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Orthopedic - Stefano Lanza</Text>
                                <View style={{flexDirection:"row",alignItems: "center"}}>
                                <AntDesign name="download" size={16} color="#2A2AC0" />
                                <Text style={{ color: "#2A2AC0", fontWeight: "bold",marginLeft:5 }}>Download</Text>
                                </View>
                            </View>
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
        fontSize: 16,
        borderBottomWidth: 2,
        padding: 10,
        borderColor: "#2A2AC0"

    },
    pastBtn: {
        color: "#A1A1A1",
        fontSize: 16,
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
    }
});