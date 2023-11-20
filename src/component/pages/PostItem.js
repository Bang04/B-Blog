// import { useRouter } from 'react-router';
import classes from './PostItem.module.css'
import Card from '../ui/Card'
function PostItem(props){

    // const router = useRouter();

    // function showDetailsHandler() {
    //     router.push('/' +props.id);  
    //   }

    return (
        <Card>
            <div className={classes.humbnail}>{props.image}</div>  
            <div className={classes.title}>{props.title}</div>
            <div><p>{props.description}</p></div>
            <div>{props.date}</div>
            <div> <div>#{props.keyword}</div></div>
        </Card>
    )
}

export default PostItem;