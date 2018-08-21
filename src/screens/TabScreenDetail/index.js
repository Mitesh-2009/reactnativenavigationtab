import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default class TabScreenDetail extends Component {

    static navigatorStyle = {
        orientation: 'portrait',
        statusBarColor: 'rgba(62,63,143,0.8)',
        statusBarTextColorScheme: 'rgba(255,255,255,0.6)',
        tabBarHidden: true
    };

    constructor(props){
        super(props)
    }

    componentWillMount() {
        // this.props.navigator.setDrawerEnabled({
        //     side: 'left', 
        //     enabled: false
        //   });

        // this.props.navigator.setDrawerEnabled({
        //     side: 'right', 
        //     enabled: false
        // });
    }

    Back = () => {
        this.props.navigator.pop();
    }

    render() {

        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'black', fontWeight:'900', fontSize:35}}>Tab Detail Screen</Text>
                <TouchableOpacity onPress={this.Back}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Back</Text>
                </TouchableOpacity>
            </View>
        );

    }

}