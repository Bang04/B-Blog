// import divnk from 'next/divnk';
import classes from './MainNavigation.module.css';
import 'bulma/css/bulma.min.css';
import $ from 'jquery';
import serchImage from '../../images/search.png';
import userthumImage from '../../images/social_profile.png';
import menuImage from '../../images/menu.png';

$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });

function MainNavigation() {

  return (

   

    <header class="is-flex is-flex-direction-row container is-max-desktop">
        <nav class="navbar has-background-dark is-flex is-align-self-auto breadcrumb " aria-label="breadcrumbs">
              <div class="navbar-brand">
            <p className={classes.logotxt}>Blog</p>
        </div>
            <ul class="is-flex  is-flex-direction-row margin-right">
                <li class="is-active">
                    <a href="#"> 
                        <figure class="image image is-32x32">
                            <img src={serchImage} alt="serchImage"/>
                        </figure>
                    </a>
                </li>
                <li>
                    <a href="#"> 
                        <figure class="image image is-32x32">
                            <img src={userthumImage}  alt="userthumImage"/>
                        </figure>
                    </a>
                </li>
                <li>
                   <a role="button" class="navbar-burger has-text-white	" data-target="navMenu" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>

                    <div class="navbar-menu" id="navMenu">
                    </div>
                </li>
               
            </ul>
        </nav>
    </header>
  );
}

export default MainNavigation;
