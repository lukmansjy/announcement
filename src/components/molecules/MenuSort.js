import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import OptionHeader from '../atoms/OptionHeader';
import OptionItem from '../atoms/OptionItem';


const MenuSort = (props)=>{
    return(
        <Fragment>
            <View style={styles.backgroundSort}>
            </View>
            <View style={styles.sortMenu}>
                <OptionHeader title="Urutkan" onClose={props.onClose}/>
                <OptionItem name="Terbaru dibagikan" active={false}/>
                <OptionItem name="Tanggal kegiatan terdekat" active={true}/>
                <OptionItem name="Belum dibaca" active={false}/>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    backgroundSort: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        height: '100%',
        width: '100%'
    },
    sortMenu:{
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    }
});

export default MenuSort