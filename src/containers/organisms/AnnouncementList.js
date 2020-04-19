import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import AnnouncementCart from '../../components/molecules/AnnouncementCart';

class AnnouncementList extends Component {
    render(){
        return(
            <View>
                {/* <Text style={styles.sortInfo}>Urut berdasarkan "Terbaru dibagikan"</Text> */}
                <FlatList 
                    data={this.props.data}
                    renderItem={
                        ({item, index}) => <AnnouncementCart data={item} index={index} key={item.id}/>
                    }
                    onScroll={this.props.onScroll}
                    keyExtractor= { (item, index) => index.toString() }/>
            </View>
        )
    }
}

export default AnnouncementList


const styles = StyleSheet.create({
    sortInfo: {
        alignSelf: 'center',
        fontSize: 19,
        marginTop: 15,
        color: '#ACACAC',
        marginBottom: 6
    }
  });