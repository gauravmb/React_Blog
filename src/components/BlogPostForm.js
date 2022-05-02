import React,{useState} from "react";
import { StyleSheet,TextInput, Text,Button } from "react-native";
import { View } from "react-native";

const BlogPostForm = ({onSubmit,initialBlogPost}) => {
    const [title,setTitle] = useState(initialBlogPost.title);
    const [content,setContent] = useState(initialBlogPost.content);
    return (
        <View style={Style.createStyle}>
            <Text>Enter Title</Text>
            <TextInput style={Style.textInputStyle} placeholder="Title" value={title} onChangeText={(text)=>{
                setTitle(text)
            }}/>
            <Text>Enter Content</Text>
            <TextInput style={Style.textInputStyle} placeholder="Content" value={content} onChangeText={(text)=>{
                setContent(text)
            }}/>
            <Button title="Save" onPress={()=>onSubmit(title,content)}/>
        </View>
    );  
};

BlogPostForm.defaultProps ={
    initialBlogPost:{
        title:"",
        content:""
    }
}

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

export default BlogPostForm;


