import React,{useContext} from "react";
import { StyleSheet, Text} from "react-native";
import { TouchableOpacity } from "react-native";
import { Context } from "./context/BlogContext";
import {Feather} from '@expo/vector-icons';
import { View } from "react-native-web";


const ShowScreen = ({navigation}) => {

    console.log("InsideShowScreen");
    const {state} = useContext(Context)
    const blogPost = state.find((blogPost) => 
        blogPost.id === navigation.getParam("id")
    );
    return (
        <View>
            <Text>Title : {blogPost.title}</Text>
            <Text>Content : {blogPost.content}</Text>
        </View>
    );  
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight:() => (
          <TouchableOpacity onPress={()=>
            navigation.navigate("Edit", {id:navigation.getParam("id")})}>
            <Feather name="edit" size={30} />
          </TouchableOpacity>
        ),
      };
};

const Style = StyleSheet.create(
    {
    }
);

export default ShowScreen;
