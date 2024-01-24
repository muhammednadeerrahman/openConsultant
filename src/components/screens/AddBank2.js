import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, FlatList,TextInput, TouchableOpacity, SafeAreaViewBase, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'

const {width, height} = Dimensions.get('screen')

export default function AddBank2({navigation}) {
    const [address,setAddress]= useState('')
    const [city,setCity]= useState('')
    const [state,setState]= useState('')
    const [postcode,setPostcode]= useState('')
    const [country,setCountry]= useState('')
  return (
    <SafeAreaView style={styles.main}>
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image style={styles.backButtonImage} source={require('../../assets/images/backButton.png')} />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Add Bank</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.completeContainer}>
                        <View style={styles.percentageContainer}>
                            <View style={styles.percentageGreen}></View>
                        </View>
                        <Text style={styles.completeText}>100% Complete</Text>
                    </View>
                    <Text style={styles.bankDetailTitle}>Bank Details</Text>
                </View>
                <View style={styles.detailContainer}>
                    <View style={styles.fill}>
                        <Text style={styles.nameLabel}>Address</Text>
                        <TextInput place value={address} onChangeText={setAddress} style={styles.input} />
                    </View>
                    <View style={styles.fill}>
                        <Text style={styles.nameLabel}>City</Text>
                        <TextInput value={city} onChangeText={setCity} style={styles.inputLight} />
                    </View>
                    <View style={styles.fill}>
                        <Text style={styles.nameLabel}>State/Province</Text>
                        <TextInput value={state} onChangeText={setState} style={styles.inputLight} />
                    </View>
                    <View style={styles.twoContainers}>
                        <View style={styles.onebytwoContainer}>
                            <Text style={styles.nameLabel}>State/ Province</Text>
                            <TextInput value={state} onChangeText={setState} style={styles.inputTwo} />
                        </View>
                        <View style={styles.onebytwoContainer}>
                            <Text style={styles.nameLabel}>Postcode</Text>
                            <TextInput value={postcode} onChangeText={setState} style={styles.inputTwo} />
                        </View>
                    </View>
                    <View style={styles.fill}>
                        <Text style={styles.nameLabel}>Country</Text>
                        <TouchableOpacity style={styles.countryButton}>
                            <Image source={require('../../assets/images/india.png')} style={styles.countryImage} />
                            <Text style={styles.country}>India</Text>
                            <Image source={require('../../assets/images/dropdown.png')} style={styles.dropDown} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main:{
        width,
        backgroundColor: '#fff',
        alignItems: 'center',
        flex:1,
        paddingBottom : 40
    },
    scroll:{
        width,
        backgroundColor: '#fff',
        alignItems: 'center',
        minHeight: height-140
        },
    headerContainer:{
        flexDirection : 'row',
        width : width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16.5,
        paddingVertical: 8.72,
        borderBottomWidth: 1,
        borderColor: '#F4F4F4',
        height: 47,
    },
    backButton:{
        width : 16,
        height: 12,
        position: 'absolute',
        left: 16.5,
        center:0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButtonImage:{
    },
    pageTitle:{
        fontWeight: '500',
        fontSize: 18,
        color: '#000',
        fontFamily: 'Gordita Medium' 
    },
    formContainer:{
        width,
        paddingHorizontal: 16,
        marginTop:12,
        height: 375,
        justifyContent: 'space-between'
    },
    topContainer:{
        height: 77,
        justifyContent: 'space-between' 
    },
    completeContainer:{
        height: 31,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    percentageContainer:{
        borderRadius: 6,
        backgroundColor:'#0FA76F',
        height: 6,
        width:width-32,
    },
    percentageGreen:{
        width: '50%',
        height:6,
        borderRadius: 6,
        backgroundColor:'#0FA76F',
    },
    completeText:{
        color: '#3E3E3E',
        height:17,
        fontSize: 12,
        fontFamily: 'Gordita Regular',
        fontWeight: '500'
    },
    bankDetailTitle:{
        color: '#2D2D2D',
        fontSize: 18,
        fontFamily: 'Gordita Medium',
        fontWeight: '500'
    },
    detailContainer:{
    },
    fill:{
        marginBottom: 17.6,
    },
    nameLabel:{
        color: '#2D2D2D',
        fontSize: 14,
        fontFamily: 'Gordita Medium',
        fontWeight: '500',
        marginBottom:8
    },
    input:{
        width: width-32,
        height: 40,
        paddingVertical:11,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        color: '#3E3E3E',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Gordita Regular'
        
    },
    inputLight:{
        width: width-32,
        height: 40,
        paddingVertical:11,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        color: '#101828',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Gordita Regular'
        
    },
    twoContainers:{
        marginBottom: 17.6,
        flexDirection: 'row',
        width:width-32,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    onebytwoContainer:{
        width: '45%',
    },
    inputTwo:{
        width: '100%',
        height: 40,
        paddingVertical:11,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        color: '#101828',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Gordita Regular'
    },
    countryButton:{
        flexDirection: 'row',
        width: width-32,
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        alignItems: 'center'

    },
    countryImage:{
        width:26,
        height:26,
        borderRadius: 26/2,
        marginRight: 8
    },
    country:{
        width:'70%',
        color: '#101828',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Gordita Regular',
        flex:1
    },
    dropDown:{
        width:10,
        height:5,
    },
    nextButton:{
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0FA76F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        height:48,
        width:width-32,

    },
    nextText:{
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Gordita Medium',

    },

})