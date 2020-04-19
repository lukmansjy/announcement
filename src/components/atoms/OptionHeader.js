import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OptionHeader = (props)=>{
    return(
        <View style={styles.sortHeader}>
            <Text style={styles.textSortHeader}>Urutkan</Text>
            <TouchableOpacity style={styles.btnCloseSort} onPress={props.onClose}>
                <Image style={styles.imgClose} source={require('../../assets/icons/close.png')} alt="close"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    sortHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: .5,
        borderStyle: 'solid',
        paddingBottom: 15,
        paddingHorizontal: 24,
        marginBottom: 8
    },
    textSortHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5F5F5F'
    },
    btnCloseSort: {
        padding: 0
    },
    imgClose :{
        width: 14,
        height: 14,
        padding: 8,
        marginTop: 1
    }
});

export default OptionHeader