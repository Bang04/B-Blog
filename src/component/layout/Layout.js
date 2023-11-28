
import MainNavigation from './MainNavigation';
import classes from './MainNavigation.module.css';

function Layout(props) {
  return (
    <>
     
      <main class="is-flex is-flex-direction-row container is-max-desktop" className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
