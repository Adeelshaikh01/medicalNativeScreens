import React from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

export default function MobileNumber() {

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/Logo.png')}
            />
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Mobile Number</Text>
                <Text style={styles.infoText}>The code will be sent to the full mobile number</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TextInput
                    style={styles.input}
                    keyboardType="phone-pad"
                    placeholder="Mobile Number"
                />
                <TouchableOpacity
                    style={styles.mButton}
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
    input:{
        width: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 12,
        paddingLeft: 50,
        borderRadius: 10,
        marginVertical: 10,
    }
});