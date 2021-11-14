import React from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function Location(props) {

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/Logo.png')}
            />
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Location</Text>
                <Text style={styles.infoText}>Please enter your location</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.inputContainer}>
                    <EvilIcons name="location" size={28} color="#2A2AC0" />
                    <TextInput
                        style={styles.input}
                        placeholder="Your Location"
                    />
                </View>
                <TouchableOpacity style={styles.mButton}
                onPress={() => props.navigation.navigate('Map')}
                >
                    <Text style={{ color: "#fff" }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    tinyLogo: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginVertical: 20
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    headingText: {
        fontSize: 22,
        color: "#181461",
        fontWeight: "bold"
    },
    infoText: {
        fontSize: 14,
        color: "#181461"
    },
    buttonContainer: {
        width: "100%",
        textAlign: "center",
    },
    mButton: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#2A2AC0",
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    input: {
        width: "100%",
        alignItems: "center",
        paddingLeft: 10,
        marginVertical: 10,
    },
    inputContainer:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 10,
    }
});