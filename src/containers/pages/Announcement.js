import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import BtnSort from "../../components/atoms/BtnSort";
import Header from "../../components/molecules/Header";
import MenuSort from "../../components/molecules/MenuSort";
import AnnouncementList from "../organisms/AnnouncementList";

import data from '../../assets/data/db.json'

class Announcement extends Component {
    constructor(){
        super()
        this.state = {
            scrollDirection: 'down',
            showSort: false
        }
    }

    countScoll = 0 // to handel setState scrollDirection
    onScroll = event => {
        var currentOffset = event.nativeEvent.contentOffset.y
        var direction = currentOffset > this.offset ? 'down' : 'up'
        this.offset = currentOffset

        if(direction !== this.state.scrollDirection){
            this.countScoll ++
            if(this.countScoll === 7){
                this.setState({
                    scrollDirection: direction
                })
            }
        }else{
            this.countScoll = 0
        }
    }

    handleShowSort = ()=>{
        this.setState({
            showSort: !this.state.showSort
        })
    }

    render(){
        return(
            <View style={styles.screen}>
                <View style={styles.headerWrapper}>
                    <Header/>
                </View>
                <View style={styles.contentWrapper}>
                    {/* <ScrollView onScroll={this.onScroll}> */}
                        <AnnouncementList data={data} onScroll={this.onScroll}/>
                    {/* </ScrollView> */}

                    {this.state.showSort ? 
                        <MenuSort onClose={this.handleShowSort}/>
                    : null }
                </View>
                {this.state.scrollDirection === 'down' && !this.state.showSort ? 
                    <BtnSort handleShowSort={this.handleShowSort}/> 
                : null}
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
        backgroundColor: 'red',
    },
    contentWrapper: {
        flex: 9,
    }
});