import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native'
import AnnouncementDetail from './AnnouncementDetail'

const AnnouncementCart = ()=>{
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.wrapTitle}>
                    <Text style={styles.title}>Gladi Bersih Lomba Tari</Text>
                    <View style={styles.new}></View>
                </View>
                <AnnouncementDetail title="Kevin Himawan" icon={require('../../assets/icons/person.png')}/>
                <AnnouncementDetail title="TK Bintang Kecil Jakarta" icon={require('../../assets/icons/school.png')}/>
            </View>
        </View>
    )
}

export default AnnouncementCart

const styles = StyleSheet.create({
        container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 16,
        marginVertical: 7,
        paddingHorizontal: 22,
        paddingVertical: 14,
        borderRadius: 15
    },
    wrapTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5F5F5F',
        marginBottom: 10
    },
    new: {
        backgroundColor: '#5CC4FF',
        height: 16,
        width: 16,
        borderRadius: 50,
        marginTop: 6
    }
  });