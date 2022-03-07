import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { FeedScreen } from "../screens/FeedScreen";
import { CatalogScreen } from "../screens/CatalogScreen";
import { AccountScreen } from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);
