import React from "react"
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome5, EvilIcons, Ionicons, Entypo } from '@expo/vector-icons';



export default function BookAppointment(props) {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.infoText}>Book an appointment</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.appointmentsInput}>
                        <View style={styles.inputContainer}>
                            <EvilIcons name="search" size={28} color="#2A2AC0" />
                            <TextInput
                                style={styles.input}
                                placeholder="Doctor, Specialities ..."
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <EvilIcons name="location" size={28} color="#2A2AC0" />
                            <TextInput
                                style={styles.input}
                                placeholder="Select Area"
                                />
                        </View>
                        <View style={styles.inputContainer}>
                            <EvilIcons name="calendar" size={28} color="#2A2AC0" />
                            <TextInput
                                style={styles.input}
                                placeholder="Select Date"
                                />
                        </View>
                        <TouchableOpacity style={styles.mButton}
                        onPress={() => props.navigation.navigate('DoctorDetails')}
                        >
                            <Text style={{ color: "#fff" }}>Search</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.specialitiesContainer}>
                        <View style={styles.innerHeader}>
                            <Text>All Specialities</Text>
                            <Image
                                style={{width: 20,height: 20}}
                                source={require('../assets/images/filter.png')}
                            />
                        </View>
                        <View style={styles.specialitiesDetail}>
                            <Image
                                style={styles.cardImg}
                                source={require('../assets/images/martin.jpg')}
                            />
                            <View style={styles.specialitiesInfo}>
                                <Text>Dr. Martin Piller</Text>
                                <Text style={styles.drInfo} >Cardiologist</Text>
                                <Text style={styles.drInfo}>Luxembourg Ville - 2 km</Text>
                                <View style={styles.reviews}>
                                    <Image source={require('../assets/images/stars.png')} />
                                    <Text style={{ fontSize: 12, color: "#A1A1A1" }}>(213)</Text>
                                </View>
                            </View>
                            <Entypo name="dots-three-vertical" style={{ flex: 0.1 }} size={18} color="black" />
                        </View>
                        <View style={styles.specialitiesDetail}>
                            <Image
                                style={styles.cardImg}
                                source={require('../assets/images/martin.jpg')}
                            />
                            <View style={styles.specialitiesInfo}>
                                <Text>Dr. Martin Piller</Text>
                                <Text style={styles.drInfo} >Cardiologist</Text>
                                <Text style={styles.drInfo}>Luxembourg Ville - 2 km</Text>
                                <View style={styles.reviews}>
                                    <Image source={require('../assets/images/stars.png')} />
                                    <Text style={{ fontSize: 12, color: "#A1A1A1" }}>(213)</Text>
                                </View>
                            </View>
                            <Entypo name="dots-three-vertical" style={{ flex: 0.1 }} size={18} color="black" />
                        </View>
                        <View style={styles.specialitiesDetail}>
                            <Image
                                style={styles.cardImg}
                                source={require('../assets/images/martin.jpg')}
                            />
                            <View style={styles.specialitiesInfo}>
                                <Text>Dr. Martin Piller</Text>
                                <Text style={styles.drInfo} >Cardiologist</Text>
                                <Text style={styles.drInfo}>Luxembourg Ville - 2 km</Text>
                                <View style={styles.reviews}>
                                    <Image source={require('../assets/images/stars.png')} />
                                    <Text style={{ fontSize: 12, color: "#A1A1A1" }}>(213)</Text>
                                </View>
                            </View>
                            <Entypo name="dots-three-vertical" style={{ flex: 0.1 }} size={18} color="black" />
                        </View>
                        <View style={styles.specialitiesDetail}>
                            <Image
                                style={styles.cardImg}
                                source={require('../assets/images/martin.jpg')}
                            />
                            <View style={styles.specialitiesInfo}>
                                <Text>Dr. Martin Piller</Text>
                                <Text style={styles.drInfo} >Cardiologist</Text>
                                <Text style={styles.drInfo}>Luxembourg Ville - 2 km</Text>
                                <View style={styles.reviews}>
                                    <Image source={require('../assets/images/stars.png')} />
                                    <Text style={{ fontSize: 12, color: "#A1A1A1" }}>(213)</Text>
                                </View>
                            </View>
                            <Entypo name="dots-three-vertical" style={{ flex: 0.1 }} size={18} color="black" />
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
        paddingHorizontal: 20,
        backgroundColor: "#fff"
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
        marginVertical: 5
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
    mButton: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#2A2AC0",
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    specialitiesContainer: {
        width: "90%",
        alignSelf: "center",
        marginTop: 10
    },
    innerHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    specialitiesDetail: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#A1A1A1",
        paddingVertical: 10
    },
    cardImg: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
        flex: 0.3
    },
    specialitiesInfo: {
        flex: 0.7,
    },
    reviews: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    drInfo: {
        fontSize: 12,
        color: "#A1A1A1"
    }
});