import PostItem from "./PostItem"
import 'bulma/css/bulma.min.css';

function PostList (props){

    return (
        <div class="is-flex is-flex-direction-row container is-max-desktop" >
            <div class="columns is-flex-wrap-wrap">
                {props.posts.map((post) => (
                    <PostItem 
                        key = {post.id}
                        id={post.id}
                        image={post.image}
                        title = {post.title}
                        descrption = {post.descrption} 
                        date={post.date}
                        keyword = {post.keyword}
                    />
                ))}
               
            </div> 
        </div>
        
    );
}

export default PostList;