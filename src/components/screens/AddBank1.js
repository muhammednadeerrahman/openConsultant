import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, FlatList,TextInput, TouchableOpacity, SafeAreaViewBase, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'

const {width, height} = Dimensions.get('screen')

export default function AddBank1({navigation}) {
    const [name,setName]= useState('')
    const [account,setAccount]= useState('')
    const [ifsc,setIfsc]= useState('')
    const [email,setEmail]= useState('')

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
                        <Text style={styles.completeText}>50% Complete</Text>
                    </View>
                    <Text style={styles.bankDetailTitle}>Bank Details</Text>
                </View>
                <View style={styles.detailContainer}>
                    <View style={styles.fill}>
                        <Text style={styles.nameLabel}>Bank Holder Name</Text>
                        <TextInput place value={name} onChangeText={setName} style={styles.input} />
                    </View>
                    <View style={styles.fill}>
                        <Text style={styles.nameLabel}>Account Number</Text>
                        <TextInput value={account} onChangeText={setAccount} style={styles.inputLight} />
                    </View>
                    <View style={styles.fill}>
                        <Text style={styles.nameLabel}>IFSC Code</Text>
                        <TextInput value={ifsc} onChangeText={setIfsc} style={styles.inputLight} />
                    </View>
                </View>
            </View>
            <View style={styles.emailContainer}>
                <View style={styles.emailTop}>
                    <Text style={styles.emailTitle}>Email address</Text>
                    <Text style={styles.emailsubTitle}>Invoices will be sent to this email address.</Text>
                </View>
                <View style={styles.emailFill}>
                    <Image styles={styles.emailImage} source={require('../../assets/images/email.png')} />
                    <TextInput placeholder='billing@untitledui.com' value={email} onChangeText={setEmail} style={styles.emailInput} />
                </View>
                <TouchableOpacity style={styles.addAccountContainer}>
                    <Image styles={styles.addImage}  source={require('../../assets/images/addButton.png')}/>
                    <Text style={styles.addAccount}>Add another</Text>
                </TouchableOpacity>
            </View>
           
            <TouchableOpacity onPress={()=>navigation.navigate('AddBank2')} style={styles.nextButton}>
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
        backgroundColor: '#DADADA',
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
        color: '#101828',
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
        color: '#676767',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Gordita Regular'
        
    },
    emailContainer:{
    },
    emailTop:{
        marginBottom: 12
    },
    emailTitle:{
        color : '#2D2D2D',
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Gordita Medium'
    },
    emailsubTitle:{
        color : '#3E3E3E',
        fontWeight: '400',
        fontSize: 14,
        fontFamily: 'Gordita Regular'
    },
    emailFill:{
        width:width-32,
        flexDirection: 'row',
        height: 40,
        paddingVertical: 10,
        paddingHorizontal:14,
        borderWidth:1,
        borderColor: '#D0D5DD',
        borderRadius: 8

    },
    emailImage:{
        width: 16.67,
        height: 13.33,
        marginRight: 7
    },
    emailInput:{
        color : '#101828',
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Gordita Regular',
        height:13,
        minWidth: '80%'
    },
    addAccountContainer:{
        flexDirection: 'row',
        marginTop: 17.6,
        alignItems: 'center'


    },
    addImage:{
        height: 11.67,
        width: 11.67,
    },
    addAccount:{
        color: '#3E3E3E',
        fontSize: 14,
        fontFamily: 'Gordita Medium',
        fontWeight: '500',
        marginLeft: 7
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

