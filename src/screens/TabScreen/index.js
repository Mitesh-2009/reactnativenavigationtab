import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { singleScreenApplication } from '../../styles/navigatorStyles';


export default class TabScreen extends Component {

    onNavigatorEvent(event)
    {
        if (event.type == 'DeepLink') {
            if(event.link == 'sidemenu') {
                this.props.navigator.toggleDrawer({
                    side:'left',
                    to:'closed'
                })
                this.props.navigator.toggleDrawer({
                    side:'right',
                    to:'closed'
                })
                this.props.navigator.resetTo({
                    screen:event.payload.screen,
                    title:event.payload.title,
                    animationType:"slide-horizontal"
                })
            }
        }
    }

    static navigatorStyle = singleScreenApplication;

    constructor(props){
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    componentWillMount() {
        this.props.navigator.setDrawerEnabled({
            side: 'left', 
            enabled: true
          });

        this.props.navigator.setDrawerEnabled({
            side: 'right', 
            enabled: true
        });
        let title = '';
    }

    OpenMenuLeft = () => {
        this.props.navigator.toggleDrawer({
            side:'left',
            to:'open'
        })
    }

    OpenMenuRight = () => {
        this.props.navigator.toggleDrawer({
            side:'right',
            to:'open'
        })
    }

    OpenDetail = () => {
        this.props.navigator.push({
            screen: "reactnativenavigationdemo.TabScreen.TabScreenDetail",
            title: "Tab Detail Screen",
          });
    }

    render() {

        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'black', fontWeight:'900', fontSize:35}}>Tab Screen</Text>
                <TouchableOpacity onPress={this.OpenMenuLeft}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Menu Left</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.OpenMenuRight}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Menu Right</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.OpenDetail}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Tab Detail Screen</Text>
                </TouchableOpacity>
            </View>
        );

    }

}