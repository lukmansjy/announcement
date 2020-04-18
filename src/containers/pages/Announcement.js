import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Header from "../../components/molecules/Header";
import AnnouncementList from "../organisms/AnnouncementList";

class Announcement extends Component {
    render(){
        return(
            <View style={styles.screen}>
                <View style={styles.headerWrapper}>
                    <Header/>
                </View>
                <View style={styles.contentWrapper}>
                    <ScrollView>
                        <AnnouncementList/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default Announcement


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    headerWrapper: {
        flex: 1,
        backgroundColor: 'red'
    },
    contentWrapper: {
        flex: 9,
    }
  });