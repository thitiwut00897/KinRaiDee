import { createBottomTabNavigator} from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../screen/main';
import Signup from '../auth/signup';
import Login from '../auth/signin';
import Vagetable from "../screen/Vagetable";
import Deeppage from "../screen/deeppage";
import Notification from "../screen/notification";
import Profile from "../screen/profile";


    const Tab = createBottomTabNavigator(
        {
            Main:{screen:Main},
            Vagetable:{screen:Vagetable},
            Deeppage:{screen:Deeppage},
            Notification:{screen:Notification},
            Profile:{screen:Profile},
        }
    );
    const Stack = createStackNavigator(
        {
            Login:{screen:Login},
            Signup:{screen:Signup},
            Main:{screen:Tab,
                navigationOptions: {headerShown: false,},},
        }
    );

export default createAppContainer(Stack);   


