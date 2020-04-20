import React, { Fragment } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AnnouncementBottom = (props)=>{
    const {come} = props
    return(
        <Fragment>
            {come.id === 1 ?
                    <TouchableOpacity style={styles.newAnc}>
                        <Text style={styles.textConfrm}>{come.name}</Text>
                    </TouchableOpacity>
                : null}

                {come.id === 2 ?
                    <TouchableOpacity style={styles.maybeAtted}>
                        <Text style={styles.textMaybeAtted}>{come.name}</Text>
                    </TouchableOpacity>
                : null}

                {come.id === 3 ?
                    <TouchableOpacity style={styles.atted}>
                        <Text style={styles.textAtted}>{come.name}</Text>
                    </TouchableOpacity>
                : null}

                {come.id === 4 ?
                    <TouchableOpacity style={styles.notAtted}>
                        <Text style={styles.textNotAtted}>{come.name}</Text>
                    </TouchableOpacity>
                : null}
        </Fragment>
    )
}

const styles = StyleSheet.create({
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
    },
    maybeAtted: {
        backgroundColor: '#fff2ea',
        padding: 12,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginHorizontal: 1,
        borderTopColor: '#E5E5E5',
        borderTopWidth: 1
    },
    textMaybeAtted: {
        color: '#FFA05F',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    atted: {
        backgroundColor: '#e8f5fc',
        padding: 12,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginHorizontal: 1,
        borderTopColor: '#E5E5E5',
        borderTopWidth: 1
    },
    textAtted: {
        color: '#5CC4FF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    notAtted: {
        backgroundColor: '#ffeded',
        padding: 12,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginHorizontal: 1,
        borderTopColor: '#E5E5E5',
        borderTopWidth: 1
    },
    textNotAtted: {
        color: '#F26B6B',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default AnnouncementBottom