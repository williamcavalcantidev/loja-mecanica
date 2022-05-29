import {Link} from 
'react-router-dom';
import './style.css'

const Header = () =>{
    return (
        <main className='container-main'>
            <h1>Oficina</h1>
            <ul>
                <li><Link to='/'><a>Home</a></Link></li>

                <li><Link to= 'Service'><a>Serviços</a></Link></li>
                
                <li><Link to ='contato'><a>Contato</a></Link></li>

            </ul>
        </main>
    )
}

export default Header;