import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/home'
import { Password } from './pages/password'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
export function Router (){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color}) => {
                        if(focused){
                            return(<Ionicons size={size} color={color} name="home"/>);
                        }

                        return(<Ionicons size={size} color={color} name="home-outline"/>);
                    }
                }}
            />

            <Tab.Screen
                name="pass"
                component={Password}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color}) => {
                        if(focused){
                            return(<Ionicons size={size} color={color} name="lock-closed"/>);
                        }

                        return(<Ionicons size={size} color={color} name="lock-closed-outline"/>);
                    }
                }}
            />
        </Tab.Navigator>
    )

}