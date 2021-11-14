import React from "react"
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, EvilIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';



export default function Forums() {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name="chevron-back" size={26} color="#181461" />
                    <Ionicons name="person-circle-outline" size={26} color="#181461" />
                </View>
                <View style={styles.body}>
                    <View style={styles.appointmentsInput}>
                        <Text style={styles.infoText}>Forum Discussions</Text>
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
                                <Text style={styles.upcomingBtn}>Community</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.pastBtn}>E-Consultations</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.pastBtn}>Literature</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.dateColor}>09/04/2020</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Feather name="message-square" size={18} color="#A1A1A1" />
                                    <Text style={styles.msgs}>203</Text>
                                </View>
                            </View>

                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Alcool - Tabac Drogues</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#2A2AC0", fontWeight: "bold", marginRight: 5 }}>See more</Text>
                                    <MaterialCommunityIcons name="greater-than" size={14} color="#2A2AC0" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.dateColor}>09/04/2020</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Feather name="message-square" size={18} color="#A1A1A1" />
                                    <Text style={styles.msgs}>83</Text>
                                </View>
                            </View>

                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Cardiologie et circulation</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#2A2AC0", fontWeight: "bold", marginRight: 5 }}>See more</Text>
                                    <MaterialCommunityIcons name="greater-than" size={14} color="#2A2AC0" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.dateColor}>09/04/2020</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Feather name="message-square" size={18} color="#A1A1A1" />
                                    <Text style={styles.msgs}>66</Text>
                                </View>
                            </View>

                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Diététique - Régimes</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#2A2AC0", fontWeight: "bold", marginRight: 5 }}>See more</Text>
                                    <MaterialCommunityIcons name="greater-than" size={14} color="#2A2AC0" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.dateColor}>09/04/2020</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Feather name="message-square" size={18} color="#A1A1A1" />
                                    <Text style={styles.msgs}>1</Text>
                                </View>
                            </View>

                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Endocrinologie - Diabète</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#2A2AC0", fontWeight: "bold", marginRight: 5 }}>See more</Text>
                                    <MaterialCommunityIcons name="greater-than" size={14} color="#2A2AC0" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.dateColor}>09/04/2020</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Feather name="message-square" size={18} color="#A1A1A1" />
                                    <Text style={styles.msgs}>21</Text>
                                </View>
                            </View>

                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Endocrinologie - Diabète</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#2A2AC0", fontWeight: "bold", marginRight: 5 }}>See more</Text>
                                    <MaterialCommunityIcons name="greater-than" size={14} color="#2A2AC0" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.dateColor}>09/04/2020</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Feather name="message-square" size={18} color="#A1A1A1" />
                                    <Text style={styles.msgs}>20</Text>
                                </View>
                            </View>

                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Endocrinologie - Diabète</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#2A2AC0", fontWeight: "bold", marginRight: 5 }}>See more</Text>
                                    <MaterialCommunityIcons name="greater-than" size={14} color="#2A2AC0" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.appointmentsDetails}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.dateColor}>09/04/2020</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Feather name="message-square" size={18} color="#A1A1A1" />
                                    <Text style={styles.msgs}>13</Text>
                                </View>
                            </View>

                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Endocrinologie - Diabète</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#2A2AC0", fontWeight: "bold", marginRight: 5 }}>See more</Text>
                                    <MaterialCommunityIcons name="greater-than" size={14} color="#2A2AC0" />
                                </View>
                            </View>
                        </View>
                        <View style={styles.appointmentsDetails}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.dateColor}>09/04/2020</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Feather name="message-square" size={18} color="#A1A1A1" />
                                    <Text style={styles.msgs}>23</Text>
                                </View>
                            </View>

                            <View style={styles.innerDetails}>
                                <Text style={{ fontWeight: "bold" }}>Endocrinologie - Diabète</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#2A2AC0", fontWeight: "bold", marginRight: 5 }}>See more</Text>
                                    <MaterialCommunityIcons name="greater-than" size={14} color="#2A2AC0" />
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
    },
    msgs: {
        color: "#A1A1A1",
        fontSize: 12,
    }
});