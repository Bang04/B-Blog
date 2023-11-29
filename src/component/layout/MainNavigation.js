// import divnk from 'next/divnk';
import { Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import 'bulma/css/bulma.min.css';
import $ from 'jquery';
import serchImage from '../../images/search.png';
import userthumImage from '../../images/social_profile.png';

$(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });

function MainNavigation() {

  return (
    <header class="container">
        <nav class={classes.navibar}>
            <div class="navbar-brand">
                <Link to="/">
                    <p className={classes.logotxt}>Blog</p>
                </Link>
            </div> 
            <ul>
                <li class="is-active">
                    <button class={classes.serchButton}>
                        <figure class="image image is-32x32">
                            <img src={serchImage} alt="serchImage"/>
                        </figure>
                    </button>
                </li>
                <li>
                    <Link to="/myinfo">
                        <figure class="image image is-32x32">
                            <img src={userthumImage}  alt="userthumImage"/>
                        </figure>
                    </Link>
                </li>
                <li>
                   <a role="button" class="navbar-burger has-text-white	" data-target="navMenu" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </li>
               
            </ul>
        </nav>
    </header>
  );
}

export default MainNavigation;
