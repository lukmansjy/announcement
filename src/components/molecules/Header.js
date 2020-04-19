import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Header = ()=>{
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/img/header-background.png')} style={styles.imgHeaderBackground}>
            <View style={styles.headerWrap}>
                <TouchableOpacity style={styles.headerBack} onPress={()=> alert('Maaf fitur back belum dibuat')}>
                        <View style={styles.backNav}>
                            <Image style={styles.imgBack} source={require('../../assets/icons/arrow-back.png')} alt="back"/>
                        </View>
                </TouchableOpacity>
                <View style={styles.headerTitle}>
                    {/* <Text>Pengumuman</Text> */}
                </View>
            </View>
                <View style={styles.headerTitleCenter}>
                    <Text style={styles.textTitle}>Pengumuman</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FF7878'
    },
    headerWrap: {
        flexDirection: 'row',
        flex: 1,
        color: 'grey'
    },
    headerBack: {
        flex: 2,
        alignItems: 'center',
        alignSelf: 'center'
    },
    backNav: {
        height: 31,
        width: 31,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        padding: 8
    },
    headerTitle: {
        flex: 8,
        backgroundColor: 'yellow',
        alignItems: 'center',
        alignSelf: 'center'
    },
    headerTitleCenter: {
        position: 'absolute',
        top: '26%',
        alignSelf: 'center',
    },
    textTitle: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold'
    },
    imgHeaderBackground: {
        width: '100%',
        height: '100%'
    },
    imgBack: {
        flex: 1,
        width: 16,
        alignItems: 'center',
        alignSelf: 'center'
    }
  });