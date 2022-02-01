import { StyleSheet } from "react-native"
import { colors, mixins} from "../../styles";

export const styles = StyleSheet.create({
  
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
});