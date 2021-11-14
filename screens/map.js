import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions, TextInput, TouchableOpacity, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


export default function Map() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 24.87086,
                    longitude: 67.01622,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={styles.inputContainer}>
                <EvilIcons name="location" size={28} color="#2A2AC0" />
                <TextInput
                    style={styles.input}
                    placeholder="Your Location"
                />
            </View>
            <TouchableOpacity style={styles.mButton}>
                <Text style={{ color: "#fff" }}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    input: {
        width: "80%",
        alignItems: "center",
        paddingLeft: 10,
        marginVertical: 10,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 10,
        position: "absolute",
        top: 40,
    },
    mButton: {
        width: "90%",
        alignItems: "center",
        backgroundColor: "#2A2AC0",
        padding: 12,
        borderRadius: 10,
        marginVertical: 10,
        position: "absolute",
        bottom: 20,
    },
});