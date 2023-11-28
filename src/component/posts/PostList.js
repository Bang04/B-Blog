import  { Route } from "react-router-dom"
import PostItem from "./PostItem"

import 'bulma/css/bulma.min.css';
import classes from "./PostList.module.css";

function PostList (props){
   
    return (
        <div class="columns is-flex-wrap-wrap">
             {props.posts.map((post) => (
                <Route path = "/detail/:id">
                    <PostItem 
                        key = {post.id}
                        id={post.id}
                        image={post.image}
                        title = {post.title}
                        descrption = {post.descrption} 
                        date={post.date}
                        keyword = {post.keyword}
                        />
               </Route>
            ))}
       </div> 
    );
}

export default PostList;