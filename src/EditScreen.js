import React,{useContext,useState} from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "./components/BlogPostForm";
import { Context } from "./context/BlogContext";

const EditScreen = ({navigation}) => {
    const {state,editBlogPost} = useContext(Context)
    const blogPost = state.find(blogPost => 
        blogPost.id === navigation.getParam("id")
    );
    
    return (
        <BlogPostForm onSubmit={(title,content)=> {
            editBlogPost(navigation.getParam("id"),title,content)}
        } initialBlogPost={blogPost}
        />
    );  
};
const Style = StyleSheet.create(
    {
        createStyle:{
            justifyContent:"center",
            alignContent:"flex-end",
            flexDirection:"column"
        },
        textInputStyle:{
            borderWidth:1,
            borderColor:"black"
        }

    }
);

export default EditScreen;


