import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AnnouncementDetail from './AnnouncementDetail'

import {toDateName, getHourStartEnd} from '../../utils'
import AnnouncementBottom from './AnnouncementBottom'

const AnnouncementCart = (props)=>{
    const {title, userBy, school, startTime, endTime, come, read} = props.data

    return(
        <Fragment>
            {props.index === 0 ? 
                <Text style={styles.sortInfo}>Urut berdasarkan "Terbaru dibagikan"</Text>
            : null}
            
            <View style={styles.container}>
                <View style={styles.wrapperContent}>
                    <View style={styles.wrapTitle}>
                        <Text style={styles.title}>{title}</Text>

                        {read ? <View style={styles.new}></View> : null}
                        
                    </View>
                    <AnnouncementDetail title={userBy} icon={require('../../assets/icons/person.png')}/>
                    <AnnouncementDetail title={school} icon={require('../../assets/icons/school.png')}/>
                    <View style={styles.time}>
                        <View style={styles.row50}>
                            <AnnouncementDetail title={toDateName(startTime)} icon={require('../../assets/icons/date.png')}/>
                        </View>
                        <View style={styles.row50}>
                            <AnnouncementDetail title={getHourStartEnd(startTime, endTime)} icon={require('../../assets/icons/time.png')}/>
                        </View>
                    </View>
                </View>

                <AnnouncementBottom come={come} />
                
            </View>
        </Fragment>
    )
}

export default AnnouncementCart

const styles = StyleSheet.create({
    sortInfo: {
        alignSelf: 'center',
        fontSize: 19,
        marginTop: 15,
        color: '#ACACAC',
        marginBottom: 6
    },
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
    }
  });