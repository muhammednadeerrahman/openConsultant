import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'

const {width, height} = Dimensions.get('screen')



export default function Bank_Pan({navigation}) {
    const [active,setActive] = useState(1)
    const [bankDetails,setBankDetails] =useState([])

    useEffect(()=>{
        setBankDetails([
            {
                id:1,
                name: 'State Bank of India',
                logo: require('../../assets/images/sbi.png'),
                accountNumber :'4768',
                IFSC : 'SBIN0001888',
                primary: true
            },
            {
                id:2,
                name: 'State Bank of India',
                logo: require('../../assets/images/sbi.png'),
                accountNumber :'4768',
                IFSC : 'SBIN0001888',
                primary: false
            },
            {
                id:3,
                name: 'State Bank of India',
                logo: require('../../assets/images/sbi.png'),
                accountNumber :'4768',
                IFSC : 'SBIN0001888',
                primary: false
            },
            {
                id:4,
                name: 'State Bank of India',
                logo: require('../../assets/images/sbi.png'),
                accountNumber :'4768',
                IFSC : 'SBIN0001888',
                primary: false
            },
          
        ])
    },[])


  return (
    <SafeAreaView style={styles.main}>
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                <Image style={styles.backButtonImage} source={require('../../assets/images/backButton.png')} />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Bank and PAN Details</Text>
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Payment Details</Text>
            <Text style={styles.headerContent}>Manage your billing and payment details.</Text>
        </View>
        <View style={styles.selectionContainer}>
            <View style={styles.chooseContainer}>
                <Text style={styles.ChooseTitle}>Choose Bank</Text>
                <Text style={styles.ChooseSubTitle}>Set Primary and Secondary Accounts</Text>
            </View>
            <FlatList 
            contentContainerStyle={styles.bankLists}
            data={bankDetails}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>setActive(item.id)} style= {active == item.id ?styles.listItemActive :styles.listItem }>
                    <View style={styles.LogoContainer}>
                        <Image style={styles.bankImage} source={item.logo} />
                    </View>
                    <View style={styles.bankDetails}>
                        <View style={styles.subDetails}>
                            <Text style={styles.bankName}>{item.name}</Text>
                            <Text style={styles.bankAccount}>*************{item.accountNumber}</Text>
                            <Text style={styles.bankIFSC}>{item.IFSC}</Text>
                        </View>
                        <View style={styles.setPrimaryContainer}>
                        {item.primary === true ? (
                            <Text style={styles.primaryTitle}>Primary Account</Text>
                        ) : (
                            <Text style={styles.primaryTitle}>Set as Primary Account</Text>
                        )}

                            <TouchableOpacity style={styles.EditButton} >
                                <Text style={styles.EditText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>setActive(item.id)} style= {active == item.id ?styles.circleContainerActive :styles.circleContainer} >
                        <View style={active == item.id ?styles.dotActive:styles.dot}></View>
                    </TouchableOpacity>
                </TouchableOpacity>

            )}
            />
           
            <TouchableOpacity style={styles.newPaymentContainer}>
                <View style={styles.addButtonContainer}>
                    <Image style={styles.addButton} source={require('../../assets/images/addButton.png')} />
                </View>
                <Text style={styles.newPaymentText}>Add new payment method</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.panDetailContainer}>
            <Text style={styles.panDetailsTitle}>PAN Details</Text>
            <View style={styles.details}>
                <Text style={styles.panName} >John Miller</Text>
                <Text style={styles.panNumber} >PAN Number : BNMZ19305F</Text>
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
        width : 16,
        height: 12,

    },
    pageTitle:{
        fontWeight: '500',
        fontSize: 18,
        color: '#000',
        fontFamily: 'Gordita Medium'
        
        
    },
    titleContainer:{
        marginTop: 11.92,
        width : width-31,
        height: 39,
        justifyContent: 'space-between',



    },
    headerTitle:{
        color: '#101828',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Gordita Medium'
    },
    headerContent:{
        color: '#676767',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Gordita Regular'
    },
    selectionContainer:{
        width:width-31,
        padding:16,
        borderWidth:1,
        borderRadius:12,
        marginTop:24,
        borderColor: '#EAECF0',
        minHeight: 20,
        maxHeight: 450,
    },
    chooseContainer:{
        height: 38,
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    ChooseTitle:{
        color: '#101828',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Gordita Medium'
    },
    ChooseSubTitle:{
        color: '#676767',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Gordita Regular'
    },
    bankLists:{
        

    },
    listItem:{
        borderWidth:1,
        borderRadius: 12,
        padding:16,
        borderColor: '#EAECF0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
        
    },
    listItemActive:{
        borderWidth:2,
        borderRadius: 12,
        padding:16,
        borderColor: '#0FA76F',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,

        
    },
    LogoContainer:{
        width:46,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bankImage:{
        width:24,
        height:24,
        aspectRatio: 1/1
    },
    bankDetails:{
        width:'62%',

    },
    subDetails:{


    },
    bankName:{
        color: '#2D2D2D',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Gordita Medium'
    },
    bankAccount:{
        color: '#676767',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Gordita Regular',
        marginBottom:11
    },
    bankIFSC:{
        color: '#676767',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Gordita Regular'
    },
    setPrimaryContainer:{
        flexDirection: 'row',
        marginTop: 12

    },
    primaryTitle:{
        color: '#3E3E3E',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Gordita Medium',
        marginRight: 7
    },
    EditButton:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    EditText:{
        color: '#0FA76F',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Gordita Medium'

    },
    circleContainer:{
        width: 19.2,
        height: 19.2,
        borderRadius: 19.2/2,
        borderWidth: 1,
        borderColor: '#676767'
    },
    circleContainerActive:{
        width: 19.2,
        height: 19.2,
        borderRadius: 19.2/2,
        borderWidth: 1,
        borderColor: '#0FA76F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot:{
        width: 8.64,
        height: 8.64
    },
    dotActive:{
        width: 8.64,
        height: 8.64,
        backgroundColor: '#0FA76F',
        borderRadius: 8.64/2
    },
    newPaymentContainer:{
        flexDirection: 'row',
        marginTop: 11,
        alignItems: 'center',

    },addButtonContainer:{
        width: 20,
        height: 20,
        alignItems:' center',
        justifyContent:'center'
    },
    addButton:{
        width: 11.67,
        height: 11.67
    },
    newPaymentText:{
        color: '#3E3E3E',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Gordita Medium'
    },
    panDetailContainer:{
        marginTop: 32,
        width : width-31,
        height: 91,
        justifyContent: 'space-between'


    },
    panDetailsTitle:{
        color: '#2D2D2D',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Gordita Medium'
    },
    details:{
        height:62,
        padding: 16,
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:"#ECECEC",
        borderRadius: 8

    },
    panName:{
        color: '#2D2D2D',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Gordita Medium'
    },
    panNumber:{
        color: '#475467',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Gordita Regular'
    },
})