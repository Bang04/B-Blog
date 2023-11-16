import classes from './Header.module.css'
function Header(){
    return (
        <nav className={classes.nav}>   
            <div className={classes.header}>
                <div className={classes.logo}><p>Blog</p></div>     
                <div className={classes.right_menu}>
                    <button className={classes.button} type="button">
                        <img class="serach" src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" alt="search--v1"/>
                    </button>
                   
                    <div>
                        <img className={classes.userthum} alt="user thumbnail" src="https://velog.velcdn.com/images/bang04/profile/40358a9d-97d4-4d59-a6f1-c721d98712b2/social_profile.png"></img>
                    </div>
                   
                    <button className={classes.button} >
                        <img class="menu"  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/menu--v1.png" alt="menu--v1"/>
                    </button>
                </div>       
            </div>
        </nav>
    )

}export default Header;