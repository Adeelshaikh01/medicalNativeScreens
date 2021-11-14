import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {
    DrawerContentScrollView,DrawerItem
} from '@react-navigation/drawer'
import { Entypo,Octicons,FontAwesome5,Feather  } from '@expo/vector-icons';

export function DrawerItems(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View>
                        <View style={styles.specialitiesDetail}>
                            <Image
                                style={styles.cardImg}
                                source={require('../assets/images/martin.jpg')}
                            />
                            <View style={styles.specialitiesInfo}>
                                <Text style={styles.drName}>Sophie Garnier</Text>
                                <Text style={styles.drInfo} >Luxembourg</Text>
                            </View>
                        </View>

                        <View>
                <DrawerItem 
                    onPress={() => props.navigation.navigate('Appointments')}
                    icon={() => (
                        <FontAwesome5 name="calendar-alt" size={16} color="#2A2AC0" />
                    )}
                    label="My Appointments"
                    labelStyle={{
                        marginLeft: -20
                    }}
                />
                <DrawerItem 
                    onPress={() => props.navigation.navigate('BookAppointment')}
                    icon={() => (
                        <FontAwesome5 name="plus-circle" size={16} color="#2A2AC0" />
                    )}
                    label="New Appointment"
                    labelStyle={{
                        marginLeft: -20
                    }}
                />
                <DrawerItem 
                    onPress={() => props.navigation.navigate('MedicalRecords')}
                    icon={() => (
                        <FontAwesome5 name="sticky-note" size={16} color="#2A2AC0" />
                        )}
                        label="Medical Records"
                        labelStyle={{
                            marginLeft: -20
                        }}
                        />
                <DrawerItem 
                    onPress={() => props.navigation.navigate('Forums')}
                    icon={() => (
                        <Feather name="message-square" size={16} color="#2A2AC0" />
                    )}
                    label="Forum"
                    labelStyle={{
                        marginLeft: -20
                    }}
                />
                <DrawerItem 
                    icon={() => (
                        <Octicons name="graph" size={16} color="#2A2AC0" />
                    )}
                    label="Statistics"
                    labelStyle={{
                        marginLeft: -20
                    }}
                />
                <DrawerItem 
                    icon={() => (
                        <FontAwesome5 name="user-circle" size={16} color="#2A2AC0" />
                    )}
                    label="Account Settings"
                    labelStyle={{
                        marginLeft: -20
                    }}
                />
                <DrawerItem 
                    icon={() => (
                        <Entypo name="info" size={16} color="#2A2AC0" />
                    )}
                    label="Help"
                    labelStyle={{
                        marginLeft: -20
                    }}
                />
            </View>
                </View>

            </DrawerContentScrollView>
            <View>
                <DrawerItem 
                    icon={() => (
                        <Entypo name="log-out" size={20} color="#2A2AC0" />  
                    )}
                    label="Logout"
                    labelStyle={{
                        marginLeft: -30
                    }}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    specialitiesDetail: {
        flexDirection: "row",
        backgroundColor: "#ECF1FA",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    cardImg: {
        width: 20,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
        flex: 0.3,

    },
    specialitiesInfo: {
        flex: 0.5,
    },
    drName: {
        fontSize: 14,
        color: "#2A2AC0",
        fontWeight: "bold"
    },
    drInfo: {
        fontSize: 12,
        color: "#A1A1A1"
    }
})