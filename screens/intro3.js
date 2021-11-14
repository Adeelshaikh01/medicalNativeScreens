import React from "react";
import { StyleSheet,View,Text,Image,TouchableOpacity} from "react-native";

export default function ThirdIntro(props){
    return(
        <>
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/Logo.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Discuss in the Forum</Text>
            </View>
           
           <View  style={styles.path}>
           <Image
               style={styles.pathimg}
                source={require('../assets/images/Path.png')}
            />
           </View>
           <Image
                style={styles.cardImg}
                source={require('../assets/images/medical-3.png')}
            />
           <TouchableOpacity style={styles.nextBtn}
           onPress={() => props.navigation.navigate('Welcome')}
           >
               <Text>Next</Text>
           </TouchableOpacity>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: '#ECF1FA',
    },
    tinyLogo: {
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 150
    },
    headingText: {
        fontSize: 22,
        color: "#181461",
        fontWeight: "bold",
        width: 200,
        textAlign: "center"
    },
    cardImg: {
        width: "100%",
        resizeMode: "contain",
        position: 'absolute',
        top: "50%"
    },
    path:{
        width: 900,
    },
    pathimg:{
        width: 600,
        height:200,
        resizeMode: "contain"
    },
    nextBtn:{
        position: "absolute",
        bottom: 0,
        marginBottom: 20,
        right: 0,
        marginRight: 20
    }
});