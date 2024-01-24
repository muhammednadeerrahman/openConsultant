import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const {width, height} = Dimensions.get('screen')

export default function Invoice({navigation}) {
    const [invoiceData,setInvoiceData] = useState([])
    const [profileData,setProfileData] = useState({})


    useEffect(()=>{
        setInvoiceData([
            {
                id:'INV0002298',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002299',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002288',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002287',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002226',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002292',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002239',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002238',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002257',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002246',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002233',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002357',
                date : 'jan 6,2022'
            },
            {
                id:'INV0002236',
                date : 'jan 6,2022'
            },
        ])
        setProfileData({
            id: 'Open Consult #2933',
            name:'John Miller' ,
            image: require('../../assets/images/profile.png'),
        })
    },[])

  return (
    <SafeAreaView style={styles.main}>
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                <Image style={styles.backButtonImage} source={require('../../assets/images/backButton.png')} />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Invoices</Text>
        </View>
        <View style={styles.profileDetails}>
            <View style={styles.profileDetLeft} >
                {profileData ?
                <Image style={styles.ProfileImage} source={require('../../assets/images/profile.png')} />
                :
                <Image style={styles.ProfileImage} />
                }
            </View>
            <View style={styles.profileDetRight} >
                <Text style={styles.profileName}>{profileData.name}</Text>
                <Text style={styles.profileId}>{profileData.id}</Text>
            </View>
        </View>
        <View style={styles.InvoiceContainer}>
            <Text style={styles.InvoiceTitle}>Download your Invoices</Text>
            <View style={styles.InvoicesTable}>
                <View style={styles.tableHead}>
                    <View style={styles.letterContainer}>
                        <Text style={styles.letter}>Letter</Text>
                        <Image style={styles.letterImage} source={require('../../assets/images/letter.png')} />
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>Date</Text>
                    </View>
                    </View>
                <FlatList
                contentContainerStyle={styles.InvoiceList}
                data={invoiceData} 
                renderItem={({item})=>(
                    <View style={styles.invoiceItem}>
                        <View style={styles.invoiceIdContainer}>
                            <Text style={styles.invoiceId}>{item.id}</Text>                            
                        </View>
                        <View style={styles.invoiceDateContainer}>
                            <Text style={styles.invoiceDate}>{item.date}</Text>                            
                        </View>
                        <View style={styles.downloadImageContainer}>
                            <TouchableOpacity style={styles.downloadButton}>
                                <Image style={styles.downloadImage} source={require('../../assets/images/download.png')} />
                            </TouchableOpacity>
                        </View>
                            
                    </View>
                    )}
                    />
                </View>
            </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main:{
        width,
        backgroundColor: '#fff',
        alignItems: 'center',
        flex:1
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
    profileDetails:{
        width:width-50,
        marginTop: 16.08,
        flexDirection: 'row',
        alignItems: 'center',
        height: 82.65

    },
    profileDetLeft:{
        width:54,
        height:54,
        borderRadius:54/2,
        overflow: 'hidden'
    },
    ProfileImage:{
        width:54,
        height:54,
        aspectRatio: 1,
        borderRadius:54/2,

    },
    profileDetRight:{
        marginLeft: 7.16
    },
    profileName:{
        fontFamily: 'Gordita Bold',
        fontSize: 16,
        fontWeight: '500',
        color: '#2D2D2D'

    },
    profileId:{
        fontFamily:'Gordita Light',
        fontSize:12,
        fontWeight: '400',
        color: '#858585'
    },
    InvoiceContainer:{
        width:width-48,
        marginTop: 24,
        flex:1

    },
    InvoiceTitle:{
        color: '#1E1E1E',
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Gordita Medium'
    },
    InvoicesTable:{
        marginTop:16

    },
    tableHead:{
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderWidth: 1.08,
        borderColor:'#EEEEEE',

    },
    letterContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12.93,
        paddingHorizontal: 8.62,
        width: '46%'
    },
    letter:{
        color: '#7B7B7B',
        fontSize: 12,
        fontFamily: 'Gordita Regular',
        fontWeight: '500',
        marginRight: 7,


    },
    letterImage:{
        width:10.06,
        height:10.06,
        aspectRatio:1/1
    },
    dateContainer:{
        paddingVertical: 12.93,
        paddingHorizontal: 8.62,
        width: '37%'

    },
    date:{
        color: '#7B7B7B',
        fontSize: 12,
        fontFamily: 'Gordita Regular',
        fontWeight: '500',
    },
    InvoiceList:{
        width:width-48,
        minHeight: 20


    },
    invoiceItem:{
        flexDirection: 'row',
        borderColor:'#EEEEEE',
        borderBottomWidth: 1.08,
        paddingVertical: 12.93,
    },
    invoiceIdContainer: {
        paddingHorizontal: 8.62,
        width: '46%'
    },
    invoiceId:{
        color: '#2D2D2D',
        fontSize: 12,
        fontWeight: '400'

    },
    invoiceDateContainer: {
        paddingHorizontal: 8.62,
        width: '37%'
    },
    invoiceDate:{
        color: '#747474',
        fontSize: 12,
        fontWeight: '400'
    },
    downloadImageContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        width:'17%'
    },
    downloadButton:{
        alignItems: 'center',
        justifyContent: 'center'

    },
    downloadImage:{
        width: 18,
        height: 18,

    },
})
