import React from "react";
import 'bulma/css/bulma.min.css';


function PostDetail(props){
    console.log(props.data);

    return (
        <div>
            <div class="card" >
                <div class="card-image">
                    <figure class="image is-5by2">
                        <img src={props.image} alt={props.title} />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{props.title}</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div class="content">
                        {props.description}
                        <a>@ {props.keyword}</a>.
                        <a href="#"># {props.keyword}</a> 
                        <a href="#"># {props.keyword}</a>
                    <br/>
                    <time datetime={props.date}>{props.date}</time>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostDetail;
