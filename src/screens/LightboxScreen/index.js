import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';


export default class LightboxScreen extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        
    }

    Back = () => {
        this.props.navigator.dismissLightBox();
    }

    render() {

        return(
            <View style={{
                width: Dimensions.get('window').width * 0.5,
                height: Dimensions.get('window').height * 0.3,
                backgroundColor: '#ffffff',
                borderRadius: 5,
                padding: 16,
                alignItems:'center'
              }}>
                <Text style={{color:'black', fontWeight:'900', fontSize:35}}>Lightbox Screen</Text>
                <TouchableOpacity onPress={this.Back}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Back</Text>
                </TouchableOpacity>
            </View>
        );

    }

}