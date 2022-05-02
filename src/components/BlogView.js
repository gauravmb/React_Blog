import React from "react"
import { StyleSheet,View, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";

const BlogView = ({blogPost,deleteAction}) => {
    return (
        <View style={Style.BlogViewStyle}>
            <Text>{blogPost.title} - {blogPost.id}</Text>
            <TouchableOpacity 
            onPress={deleteAction} style={{alignSelf:"flex-end"}}
            >
             <AntDesign  name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );  
}

export default BlogView;
const Style = StyleSheet.create(
    {
        BlogViewStyle:{
            flexDirection:"row",
            justifyContent:"space-between",
            padding:10,
            borderColor:"black",
            borderTopWidth:1
        }
    }
);