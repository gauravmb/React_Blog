import React,{useContext} from "react"
import { StyleSheet,View, Text,FlatList,Button } from "react-native"
import { TouchableOpacity } from "react-native"
import {Context} from "../src/context/BlogContext"
import BlogView from "./components/BlogView"
import {Feather} from '@expo/vector-icons';


const IndexScreen = (props) => {
    const navigation = props.navigation;
    const {state,deleteBlogPost} = useContext(Context);
    return (
        <>
            <FlatList
            data = {state}
            keyExtractor= {(blogPost)=>{
               return blogPost.id;
            }}
            renderItem = {({item})=>{
                return (
                <TouchableOpacity onPress={
                    ()=>
                    navigation.navigate("Show",{id:item.id})
                    
                }>
                    <BlogView blogPost={item} deleteAction={()=>{
                        deleteBlogPost(item.id);
                    }} />
                </TouchableOpacity>
                );
            }}
            />
        </>
    );  
}

export default IndexScreen;

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
}

const Style = StyleSheet.create(
    {

    }
);