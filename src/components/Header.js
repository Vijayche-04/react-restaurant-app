import foodRestaruntLogo from "../images/food-restarunt-log.png";

const Title = () => {
    return (
        <div className="logo-container">
            <img src={foodRestaruntLogo} alt="restaurant logo"></img>
        </div>
    );
}

const NavItems = () => {
    return (
        <div className="nav-container">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

const Header = () => (
    <div className="header-container">
        <Title />
        <NavItems />
    </div>
);

export default Header;