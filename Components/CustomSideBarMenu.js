import * as React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from  'firebase';
export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <DrawerItems {...this.props}/>
                </View>
                <View >
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        this.props.navigation.navigate("WelcomeScreen")
                        firebase.auth().signOut()
                    }}>
                        <Text style={styles.text}>
                        Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create(
    {
       container:{
           
           marginTop:100,
           
       },
       text:{
           fontSize:20,
           fontWeight:"bold",
           alignSelf:"center",
           marginTop:20,
           marginBottom:20
           
       },
       inputBox:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        alignSelf:"center",
        borderWidth:1,
        width:"80%",
        fontSize:20,
        textAlign:"center",
        padding:10,
       },
       button:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        padding:10,
        borderWidth:1,
        width:"50%",
        height:100,
        alignSelf:"center",
       }

    }
)