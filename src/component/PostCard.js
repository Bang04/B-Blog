import classes from './PostCard.module.css'

function PostCard(){
    return (
        <>
            <div className={classes.PostCard}> 
                <div className={classes.humbnail}>img1</div>  
                <div className={classes.title}>subject1</div>
                <div><p>7살에 프로그래밍을 접했다. 그리고 2022년, 25살에 스타트업 대표가 되었다.</p></div>
                <div>2023년 11월 16일</div>
                <div> <div>#java</div><div>#mysql</div><div>#html</div><div>#css</div></div>
            </div>
            <div className={classes.PostCard}> 
                <div className={classes.humbnail}>img1</div>  
                <div className={classes.title}>subject1</div>
            </div>
            <div className={classes.PostCard}> 
                <div className={classes.humbnail}>img1</div>  
                <div className={classes.title}>subject1</div>
            </div>
            <div className={classes.PostCard}> 
                <div className={classes.humbnail}>img1</div>  
                <div className={classes.title}>subject1</div>
            </div>
            <div className={classes.PostCard}> 
                <div className={classes.humbnail}>img1</div>  
                <div className={classes.title}>subject1</div>
            </div>
            <div className={classes.PostCard}> 
                <div className={classes.humbnail}>img1</div>  
                <div className={classes.title}>subject1</div>
            </div>
            <div className={classes.PostCard}> 
                <div className={classes.humbnail}>img1</div>  
                <div className={classes.title}>subject1</div>
            </div>

                   </>
    
    )
}

export default PostCard;