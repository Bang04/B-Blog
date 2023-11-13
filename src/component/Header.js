import classes from './Header.module.css'
function Header(){
    return (
        <div className={classes.header}>
            <div className={classes.logo}><p>Blog</p></div>     
            <div className={classes.right_menu}>
                <div>검색</div>
                <div><img className={classes.userthum} alt="user thumbnail" src="https://velog.velcdn.com/images/bang04/profile/40358a9d-97d4-4d59-a6f1-c721d98712b2/social_profile.png"></img></div>
                <div>myInfo</div>
            </div>       
        </div>
    )

}export default Header;