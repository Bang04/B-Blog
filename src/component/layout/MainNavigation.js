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
    <header class="is-flex is-flex-direction-row container is-max-desktop">
        <nav class="navbar has-background-dark is-flex is-align-self-auto breadcrumb " aria-label="breadcrumbs">
            <div class="navbar-brand">
                <Link to="/">
                    <p className={classes.logotxt}>Blog</p>
                </Link>
            </div> 
            <ul class="is-flex  is-flex-direction-row margin-right">
                <li class="is-active">
                    <button>
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
