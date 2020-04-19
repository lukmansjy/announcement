import React, { Fragment } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const AnnouncementDetail = (props)=>{
    return(
        <Fragment>
            <View style={styles.wrapDetail}>
                <Image style={styles.iconDetail} source={props.icon} alt="person"/>
                <Text style={styles.textDetail}>{props.title}</Text>
            </View>
        </Fragment>
    )
}

export default AnnouncementDetail

const styles = StyleSheet.create({
    wrapDetail: {
        flexDirection: 'row',
        marginBottom: 12
    },
    iconDetail: {
        width: 18,
        height: 18
    },
    textDetail: {
        marginLeft: 8,
        fontSize: 16,
        color: '#828282'
    }
  });