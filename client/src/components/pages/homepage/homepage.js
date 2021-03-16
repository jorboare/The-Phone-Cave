import { Link } from 'react-router-dom'
import './homepage.css'


const Homepage = () => {

    return (
        <div className='homepage'>
            <h1>The Phone Cave</h1>
            <Link to='/telefonos'>Smartphones</Link>
            <video playsInline autoPlay muted loop className='homepage-Video'>
                <source src={`https://res.cloudinary.com/jordi-ironhack/video/upload/v1615897629/fotos-webuild/Homepage_frkzos.mp4`} />
            </video>
            <div>

            </div>
        </div>

    )
}

export default Homepage