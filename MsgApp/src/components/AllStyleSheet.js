import {StyleSheet} from 'react-native';


/*****************************/
/********Button Style ********/
/*****************************/
const ButtonStyle = StyleSheet.create({
    Container:{
        borderWidth: 1 ,
        borderColor: 'red',
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        shadowOffset: {height:2},
        margin: 2,
        alignItems:'center',
        justifyContent: 'center',
        width:100,
        height:30,
        backgroundColor:'red',
        borderRadius: 3
    },
    text:{
        color:'white',
        //fontFamily:'Avenir'
    }
})

/*****************************/
/******** View Style ********/
/*****************************/
const ViewStyle = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: 'white'
    }
})



/******** export ********/
export {
    ButtonStyle,
    ViewStyle
}