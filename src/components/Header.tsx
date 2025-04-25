import { Button } from '@mui/material'
import Logo from '../assets/logo.png'
import themes from '../utils/themes'



const Header = () => {
  return (
    <div style={styles.container}>
        <img src={Logo} alt="Logo" style={styles.img}/>
        <ul style={styles.links}>
            <li>Inicio</li>
            <li>Nuestros servicios</li>
            <li>Casos de éxito</li>
            <li>Contacto</li>
        </ul>
        <div>
        <Button
            variant="contained"
            sx={{
                backgroundColor: "#3A0CE2",
                color: themes.colors.textSecondary,
                borderRadius: '20em',
                padding: '1em 4em',
                fontFamily: themes.fonts.main,
                fontWeight: 600,

            }}
        >
            Consultar Presupuesto
        </Button>
            </div>
    </div>
  )
}

export default Header

const styles = {
    container: {
        display: 'flex',
        padding: '2em 4em',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `4px solid #3A0CE2`,
        height: '2em',
        marginBottom: '2em',
    },
    img: {
        height: '3em',
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '30%',
        listStyleType: 'none',
        color: themes.colors.textPrimary,
       fontFamily: themes.fonts.main,   
       fontSize: '1.2em'
    }
}