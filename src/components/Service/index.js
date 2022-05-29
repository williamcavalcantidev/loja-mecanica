import Serv from '../../img/logo3.jpg'

import './style.css';

const Services = ({name}) =>{
    return (
        <div className='container-service'>
         <img src={Serv} alt="Service"/>

         <p>{name}</p>
        </div>
    )
}

export default Services;