import classes from './Main.module.css'
import PostCard from './PostCard';

function Main(){
    return (   
        <main>
            <div className={classes.PostCardList}>
                <PostCard />
            </div>
           
                        
        </main> 
   
    );
}

export default Main;
