import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OptionItem = (props)=>{
    return(
        <TouchableOpacity style={styles.sortItem}>
            <Text style={styles.textSortName}>{props.name}</Text>
            <View>
                {props.active ?
                    <Image style={styles.imgSortActive} source={require('../../assets/icons/ceklist.png')} alt="active"/>
                : 
                    <View style={styles.sortNonActive}>
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sortItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 24
    },
    textSortName: {
        fontSize: 16,
        color: '#5F5F5F'
    },
    imgSortActive: {
        width: 22,
        height: 22
    },
    sortNonActive: {
        borderWidth: 2,
        borderColor: '#CACACA',
        borderStyle: 'solid',
        width: 20,
        height: 20,
        borderRadius: 50
    }
});

export default OptionItem