import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { singleScreenApplication } from '../../styles/navigatorStyles';


export default class Register extends Component {

    static navigatorStyle = singleScreenApplication;

    componentWillMount() {

    }

    Back = () => {
        this.props.navigator.pop();
    }

    render() {

        return(
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'black', fontWeight:'900', fontSize:35}}>Register Screen</Text>
                    <TouchableOpacity onPress={this.Back}>
                        <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Back To Login</Text>
                    </TouchableOpacity>
                </View>
            
        );

    }

}