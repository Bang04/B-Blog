const Header = () =>{
    return (
        <header>
            <div>
                <div className="Logo">
                    <h2>Blog</h2>
                </div>
                <div>
                    <button class='darkmode__btn'>다크모드</button>
                    <button class='search__btn'>검색버튼</button>
                    <button class='thumbnail'>MyInfo</button>
                </div>
            </div>
        </header>
    )
}

export default Header;