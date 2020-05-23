import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/Home';

const MainNavigator = createStackNavigator({
  //Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
});

export default createAppContainer(MainNavigator)