import PostItem from "./PostItem"
import classes from "./PostItem.module.css"

function PostList (props){
    console.log(props);

    return (
        <div className={classes.postlist}>
            {props.posts?.map((post) => (
                <PostItem 
                    key = {post.id}
                    id={post.id}
                    title = {post.title}
                    descrption = {post.descrption} 
                    keyword = {post.keyword}
                    />
            ))}
       </div> 
    );
}

export default PostList;