import React from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Welcome() {

    return (
        <><View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/Logo.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Welcome</Text>
                <Text style={styles.infoText}>Sign in to continue</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.mButton}
                >
                    <Text style={{ color: "#fff" }}>Sign in with mobile number</Text>
                </TouchableOpacity>
                <Text style={styles.infoText}>or</Text>
                <TouchableOpacity
                    style={styles.fbButton}
                >
                    <FontAwesome name="facebook" size={14} color="white" />
                    <Text style={{ color: "#fff",paddingLeft: 10 }}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
            <View style={styles.footer}>
                <Text style={styles.infoText}>By signing in, you accept our <Text style={styles.linkText}>Terms and Conditions</Text></Text>
            </View></>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
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
        marginBottom: 50
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
        alignItems:"center"
    },
    mButton: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#2A2AC0",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    fbButton: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#3A559F",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent:"center",
    },
    footer: {
        flex: 0.1,
    },
    linkText: {
        color: "#2A2AC0"
    }
});