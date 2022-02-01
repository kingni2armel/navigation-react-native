 import { StyleSheet } from "react-native"
 import { colors, mixins} from "../../styles";

 export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        backgroundColor:colors.WHITE,
    },

    input:{
            height:50,
            marginTop:20,
            borderBottomColor:colors.LIGHT,
            borderBottomWidth:1, 
            paddingLeft:25,   
           // ...mixins.boxShadow(colors.BLACK)


    },
    haveAccount:{
            textAlign:'center',
            color:colors.PRIMARY,
            marginTop:10,
    },
    btn:{
            height:50,
            backgroundColor:colors.PRIMARY,
            borderRadius:25,
            marginTop:20,
            justifyContent:'center',
            alignItems:'center',
            ...mixins.boxShadow(colors.BLACK)

            
    },


    textBtn:{
        color:colors.WHITE
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:colors.PRIMARY,
        marginVertical:30,
    },  
});