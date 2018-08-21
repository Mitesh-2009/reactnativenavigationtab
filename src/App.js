import { Navigation } from 'react-native-navigation';
import { Dimensions } from 'react-native';
import { registerScreens } from './screens';
let windowWidth = Dimensions.get('window').width

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: 'reactnativenavigationdemo.Splacescreen',
        title: 'Splace Screen',
    },
    animationType: 'slide-down'
})