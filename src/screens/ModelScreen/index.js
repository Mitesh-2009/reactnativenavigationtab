import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default class ModelScreen extends Component {


    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { 
        if (event.type == 'NavBarButtonPress') {
          if (event.id == 'lightbox') {
            this.props.navigator.showLightBox({
                screen: "reactnativenavigationdemo.LightboxScreen", 
                style: {
                  backgroundBlur: "dark", 
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                  tapBackgroundToDismiss: true
                },
            });
          } else if (event.id == 'notification') {
            this.props.navigator.showInAppNotification({
                screen: "reactnativenavigationdemo.Notification", 
                autoDismissTimerSec: 10
            });
          }
        }
      }
    

    componentWillMount() {
        let title = 'Lightbox';
        this.props.navigator.setButtons({
            leftButtons: [{
                title: 'InAppNotification', 
                id: 'notification',
                buttonColor: 'blue', 
                buttonFontSize: 14, 
                buttonFontWeight: '600', 
            }],
            rightButtons: [{
                title: 'LightBox', 
                id: 'lightbox',
                buttonColor: 'blue', 
                buttonFontSize: 14, 
                buttonFontWeight: '600', 
            }],
            animated: true
          });
    }

    Back = () => {
        this.props.navigator.dismissModal({
            animationType: 'slide-down'
          });
    }

    render() {

        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center',backgroundColor: 'rgba(255,255,255,0.0)'}}>
                <Text style={{color:'black', fontWeight:'900', fontSize:35}}>Model Screen</Text>
                <TouchableOpacity onPress={this.Back}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Back To Home</Text>
                </TouchableOpacity>
            </View>
        );

    }

}