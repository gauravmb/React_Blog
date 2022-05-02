import createDataContext from "./createDataContext";

const reducer = (state,action) => {
    switch (action.type) {
        case "edit":
            console.log("edit state",state);
            console.log("edit",action.payload);
            // return state.map((blogPost)=>{
            //     console.log("Insoide edit",blogPost);
            //     if(blogPost.id === action.payload.id)
            //         {
            //             return action.blogPost
            //         }else
            //         {
            //             return blogPost;
            //         }
            // });
            break;
        case "delete":
            console.log("delete state",state);
            return state.filter((blogPost)=> blogPost.id !== action.payload);
        case "add":
           return [
            ...state,
            {id: Math.floor(Math.random() * 99999)
            , title:action.payload.title,
            content:action.payload.content
        }];
        default:
            return state;
    } 
};

const addBlogPost = dispatch => {
    return (title,content,callback)=>{
        dispatch({type:"add",payload:{title,content}});
        callback()
    };
};

const deleteBlogPost = dispatch => {
    return (id) =>{
        dispatch({type:"delete",payload:id})
    };
};

const editBlogPost = dispatch => {
    return (id,title,content) =>{
       dispatch({
           type:"edit",
           payload:{id,title,content}
        });
    };
};

export const {Context,Provider} = createDataContext(
    reducer,
    {addBlogPost,deleteBlogPost,editBlogPost},
    [{title:"test",content:"Test 2",id:1}]
    );