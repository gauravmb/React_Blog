import react from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/IndexScreen";
import ShowScreen from "./src/ShowScreen";
import CreateScreen from "./src/CreateScreen";
import EditScreen from "./src/EditScreen";

const navigator = createStackNavigator({
  Index:IndexScreen,
  Show:ShowScreen,
  Create:CreateScreen,
  Edit:EditScreen
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:"Blog"
  }
})

const App = createAppContainer(navigator)

export default () =>
{
 return (
      <Provider>
        <App/>
      </Provider>
      );
};
