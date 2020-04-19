import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BtnSort = (props)=>{
    return(
        <View style={styles.wrapBtnSort}>
            <TouchableOpacity onPress={props.handleShowSort} style={styles.btnSort}>
                <Image style={styles.imgSort} source={require('../../assets/icons/sort.png')} alt="sort"/>
                <Text style={styles.textSort}>Urutkan</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapBtnSort: {
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center',
    },
    btnSort: {
        flexDirection: 'row',
        backgroundColor: '#5CC4FF',
        paddingHorizontal: 28,
        paddingVertical: 14,
        borderRadius: 200,
        borderColor: 'white',
        borderWidth: .2,
        borderStyle: 'solid'
    },
    textSort: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    imgSort: {
        width: 25,
        height: 16,
        marginRight: 6,
        marginTop: 1
    },
});

export default BtnSort