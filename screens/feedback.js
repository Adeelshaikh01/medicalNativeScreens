import React from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView,TextInput } from 'react-native';
import { Ionicons, EvilIcons,MaterialCommunityIcons   } from '@expo/vector-icons';



export default function Feedback(props) {

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
                <Text style={{ fontSize: 14, fontWeight: "bold",marginVertical: 20 }}>Leave your feedback</Text>
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
                    <View style={styles.imgBody}>
                    <Image source={require('../assets/images/bigStars.png')} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Write your feedback"
                        multiline={true}
                        numberOfLines={8}
                        textAlignVertical={'top'}
                    />
                     <TouchableOpacity style={styles.mButton}
                     onPress={() => props.navigation.navigate('Notifications')}
                     >
                            <Text style={{ color: "#fff" }}>Add feedback</Text>
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
        borderBottomWidth: 1,
        borderBottomColor: "#A1A1A1",
    },
    cardImg: {
        width: 80,
        height: 100,
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
    input: {
        width: "100%",
        padding: 10,
        minHeight: 200,
        backgroundColor: '#fff',
    },
    
});