type NavBarPropType = {
  isDark: boolean,
  toggleTheme: () => void,
}

function NavBar(props: NavBarPropType): JSX.Element {
  const {isDark, toggleTheme} = props;

  return (
    <nav>
      <span className={`toggle ${isDark? 'dark' : ''}`} onClick={() => toggleTheme()}></span>
    </nav>
  );
}

export default NavBar;


