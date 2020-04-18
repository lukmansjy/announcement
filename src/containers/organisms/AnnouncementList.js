import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native"
import AnnouncementCart from '../../components/molecules/AnnouncementCart'

class AnnouncementList extends Component {
    render(){
        return(
            <View>
                <Text style={styles.sortInfo}>Urut berdasarkan "Terbaru dibagikan"</Text>
                <AnnouncementCart/>
                <AnnouncementCart/>
                <AnnouncementCart/>
                <AnnouncementCart/>
                <AnnouncementCart/>
                <AnnouncementCart/>
            </View>
        )
    }
}

export default AnnouncementList


const styles = StyleSheet.create({
    sortInfo: {
        alignSelf: 'center',
        fontSize: 19,
        marginTop: 12,
        color: '#ACACAC',
        marginBottom: 6
    }
  });