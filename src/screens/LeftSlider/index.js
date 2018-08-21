import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { singleScreenApplication } from '../../styles/navigatorStyles';


export default class LeftSlider extends Component {

    constructor(props) {
        super(props);
    }

    static navigatorStyle = singleScreenApplication;

    componentWillMount() {

    }

    render() {

        return(
            <View style={{
                zIndex:1000,
                backgroundColor:'white'
            }}>
            
                <View style={{borderBottomColor:'#fff',
                borderBottomWidth:StyleSheet.hairlineWidth,
                marginTop:20,
                alignItems:'flex-end'
            }}>
                    <TouchableOpacity onPress={()=>{this.props.navigator.toggleDrawer({
                                            side: 'left',
                                            to:'close',
                                            })}} 
                                            style={{
                                                backgroundColor:'blue',
                                                height:40,width:100,
                                                justifyContent:'center',
                                                alignItems:'center'
                                            }}>
                                            <Text style={{
                                                color:"#FFF",
                                                fontSize:16, 
                                                fontWeight:"bold"}}>Menu</Text>
                    </TouchableOpacity>
                    
                    
                
                    
                </View>

                <View >

                    <TouchableOpacity style={{paddingBottom:10}}
                     onPress={()=>   
                        this.props.navigator.handleDeepLink({
                        link: "sidemenu",
                        payload: {screen:"reactnativenavigationdemo.Screen1",title:'Screen1 Screen'}
                        })}>
                        <Text style={{marginLeft:21,color:'#000000',fontSize:16,marginTop:13}}>Screen1</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#F0F0F0',height:1,width:261,marginTop:2,marginHorizontal:10,}}></View>

                    <TouchableOpacity 
                    onPress={()=>   
                        this.props.navigator.handleDeepLink({
                        link: "sidemenu",
                        payload: {screen:"reactnativenavigationdemo.Screen2",title:'Screen2'}
                        })}
                    style={{paddingBottom:10}}>
                        <Text style={{marginLeft:21,color:'#000000',fontSize:16,marginTop:13}}>Screen2</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#F0F0F0',height:1,width:261,marginTop:2,marginHorizontal:10,}}></View>

                    <TouchableOpacity 
                    onPress={()=>{
                        this.props.navigator.handleDeepLink({
                            link: "sidemenu",
                            payload: {screen:"reactnativenavigationdemo.Login",title:'Login Screen'}
                            })
                    }}
                    style={{paddingBottom:10}}>
                        <Text style={{marginLeft:21,color:'#000000',fontSize:16,marginTop:13}}>Log Out</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#F0F0F0',height:1,width:261,marginTop:2,marginHorizontal:10,}}></View>

                </View>
                
                       

            </View>
        );

    }

}