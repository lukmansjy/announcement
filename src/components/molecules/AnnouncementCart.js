import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import AnnouncementDetail from './AnnouncementDetail'

const AnnouncementCart = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.wrapperContent}>
                <View style={styles.wrapTitle}>
                    <Text style={styles.title}>Gladi Bersih Lomba Tari</Text>
                    <View style={styles.new}></View>
                </View>
                <AnnouncementDetail title="Kevin Himawan" icon={require('../../assets/icons/person.png')}/>
                <AnnouncementDetail title="TK Bintang Kecil Jakarta" icon={require('../../assets/icons/school.png')}/>
                <View style={styles.time}>
                    <View style={styles.row50}>
                        <AnnouncementDetail title="20 Desember " icon={require('../../assets/icons/date.png')}/>
                    </View>
                    <View style={styles.row50}>
                        <AnnouncementDetail title="09.00 - 10.00" icon={require('../../assets/icons/time.png')}/>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.newAnc}>
                <Text style={styles.textConfrm}>Konfirmasi Kedatangan</Text>
            </TouchableOpacity>
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
        borderRadius: 15
    },
    wrapperContent:{
        paddingHorizontal: 22,
        paddingTop: 14,
        paddingBottom: 6
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
    },
    time: {
        flex: 1,
        flexDirection: 'row'
    },
    row50: {
        flex: 1
    },
    newAnc: {
        backgroundColor: '#5CC4FF',
        padding: 12,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginHorizontal: 1,
    },
    textConfrm: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
  });