import Logo from '../assets/logo.png'
import themes from '../utils/themes'



const Header = () => {
  return (
    <div style={styles.container}>
        <img src={Logo} alt="Logo" style={styles.img}/>
        <ul style={styles.links}>
            <li>Testimonios</li>
            <li>Contacto</li>
            <li>Servicios</li>
        </ul>
    </div>
  )
}

export default Header

const styles = {
    container: {
        display: 'flex',
        padding: '2em',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `2px solid ${themes.colors.primary}`,
        height: '2em',
        marginBottom: '2em',
    },
    img: {
        height: '3em',
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '20%',
        listStyleType: 'none',
        color: themes.colors.textPrimary,
       fontFamily: themes.fonts.main,   
    }
}