import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { singleScreenApplication } from '../../styles/navigatorStyles';


export default class Splacescreen extends Component {

    static navigatorStyle = singleScreenApplication;

    componentWillMount() {
        
        setTimeout(() => {
            this.props.navigator.push({
                screen: 'reactnativenavigationdemo.Login',
                title: 'Login Screen'
              });
        }, 3000);

    }

    render() {

        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'black', fontWeight:'900', fontSize:35}}>Splace Screen</Text>
            </View>
        );

    }

}