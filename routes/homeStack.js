import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            // headerStyle: {
            //     backgroundColor: '#EEE'
            // }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle: {
            //     backgroundColor: '#EEE'
            // }
        }
    },

};

const HomeStack= createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#EEE',
            height: 80,
        },
        headerTintColor: '#444',
    }
});

export default createAppContainer(HomeStack);