import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { singleScreenApplication } from '../../styles/navigatorStyles';


export default class Home extends Component {

    onNavigatorEvent(event)
    {
        console.log(event.type)
        if (event.type == 'DeepLink') {
            console.log(event.link)
            if(event.link == 'sidemenu') {
                this.props.navigator.toggleDrawer({
                    side:'left',
                    to:'closed'
                })
                this.props.navigator.toggleDrawer({
                    side:'right',
                    to:'closed'
                })
                this.props.navigator.showModal({
                    screen:event.payload.screen,
                    title:event.payload.title,
                })
            }
        }
    }

    static navigatorStyle = {
        orientation: 'portrait',
        statusBarColor: 'rgba(62,63,143,0.8)',
        statusBarTextColorScheme: 'rgba(255,255,255,0.6)',
    };

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

    OpenModel = () => {
        this.props.navigator.showModal({
            screen: "reactnativenavigationdemo.ModelScreen",
            title: "Modal Screen",
            animationType: 'slide-up'
          });
    }

    OpenDetail = () => {
        this.props.navigator.push({
            screen: "reactnativenavigationdemo.Home.HomeDetail",
            title: "Home Detail Screen",
          });
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

    // Back = () => {
    //     this.props.navigator.push({
    //         screen: 'reactnativenavigationdemo.Login',
    //         title: 'Login Screen',
    //         animated: true,
    //         animationType: 'fade'
    //       });
    // }

    render() {

        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'black', fontWeight:'900', fontSize:35}}>Home Screen</Text>
                <TouchableOpacity onPress={this.OpenMenuLeft}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Menu Left</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.OpenMenuRight}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Menu Right</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.OpenModel}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Model Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.OpenDetail}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Home Detail Screen</Text>
                </TouchableOpacity>
            </View>
        );

    }

}