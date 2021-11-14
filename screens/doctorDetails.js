import React from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function DoctorDetails(props) {

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
                    </View>

                    <ScrollView horizontal={true} style={styles.cardScroll}>
                        <View style={styles.cardBody}>
                            <View style={styles.slotBox}>
                                <View>
                                    <Text style={styles.slotHeading}>Thu, 09 Apr</Text>
                                    <Text style={{ fontSize: 12, color: "#A1A1A1" }}>3 Slots Available</Text>
                                </View>
                                <TouchableOpacity style={styles.slotBtn}>
                                    <Text style={{ color: "#fff" }}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                            <TouchableOpacity style={styles.slotOutlineBtn}>
                                    <Text style={{ color: "#000" }}>08:00</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.slotOutlineBtn}>
                                    <Text style={{ color: "#000" }}>12:00</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.slotOutlineBtn}>
                                    <Text style={{ color: "#000" }}>15:00</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={styles.cardBody}>
                            <View style={styles.slotBox}>
                                <View>
                                    <Text style={styles.slotHeading}>Fri, 10 Apr</Text>
                                    <Text style={{ fontSize: 12, color: "#A1A1A1" }}>3 Slots Available</Text>
                                </View>
                                <TouchableOpacity style={styles.slotBtn}>
                                    <Text style={{ color: "#fff" }}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                            <TouchableOpacity style={styles.slotOutlineBtn}>
                                    <Text style={{ color: "#000" }}>09:00</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.slotOutlineBtn}>
                                    <Text style={{ color: "#000" }}>12:00</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.slotOutlineBtn}>
                                    <Text style={{ color: "#000" }}>15:00</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                    <View style={styles.tabContainer}>
                    <TouchableOpacity style={styles.mButton}
                    onPress={() => props.navigation.navigate('Payment')}
                    >
                            <Text style={{ color: "#fff" }}>Book appointment</Text>
                        </TouchableOpacity>
                        <View style={styles.tabBtn}>
                            <TouchableOpacity>
                                <Text style={styles.upcomingBtn}>Doctor</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.pastBtn}>Clinic</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.pastBtn}>Feedbacks</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sections}>
                            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Languages</Text>
                            <View style={{ flexDirection: "row",alignItems: "center" }}>
                                <Image style={styles.flag} source={require('../assets/images/uk-flag.png')} />
                                <Text>English</Text>
                                <Image style={styles.flag} source={require('../assets/images/fr-flag.png')} />
                                <Text>French</Text>
                                <Image style={styles.flag} source={require('../assets/images/ger-flag.png')} />
                                <Text>German</Text>
                            </View>
                        </View>
                        <View style={styles.sections}>
                            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Education</Text>
                            <View >
                                <Text style={styles.infoText}>UCL - Cliniques Saint - Luc(1987-1999) - Docteur</Text>
                                <Text style={styles.infoText}>Cardiologist. Recherche au Laboratoire</Text>
                                <Text style={styles.infoText}>ULG-CHU Start-Tilman (1999-2000). Recherche</Text>
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
    tabContainer: {
        width: "100%",
        width: "90%",
        alignSelf: "center",
        flex:1,
        marginTop: -10
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
    mButton: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#2A2AC0",
        padding: 12,
        borderRadius: 10,
        marginVertical: 10,
    },
    specialitiesDetail: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        width: "90%",
        alignSelf: "center",
        paddingTop: 30
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
    },
    cardScroll:{
        margin: 20,
        width: "100%"
    },
    cardBody:{
        width: 230,
        height: 130,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginRight: 10
    },
    slotBtn:{
        width: "35%",
        alignItems: "center",
        backgroundColor: "#2A2AC0",
        padding: 8,
        borderRadius: 10,
        marginVertical: 10,
    },
    slotBox:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    slotHeading:{ 
        fontSize: 16, 
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10 
    },
    slotOutlineBtn:{
        width: "30%",
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        marginVertical: 10,
    },
    flag:{
        width:17,
        height: 17,
        resizeMode: "contain",
        margin:5,
    },
    sections:{
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#A1A1A1",
    },
    infoText: {
        fontSize: 14,
        color: "#A1A1A1",
        marginVertical: 5
    }
});