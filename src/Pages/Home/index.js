import './style.css'
import logo2 from '../../img/logo2.jpg'

const Home = () =>{
    return (
        <main className='container-home'>
            <img src={logo2}alt="motor carro"/>

            <div>
                <h1 className='title_home'>DINÂMICA AUTO PEÇAS</h1>
                <p className='texto'>Endereço: Em frente a FBV Faculdade Boa Viagem - R. Jean Emile Favre, 509 - Ipsep, Recife - PE, 51200-040</p>
                <button className='localizacao'><a href='https://www.google.com/maps/place/DIN%C3%82MICA+AUTO+PE%C3%87AS/@-8.1074081,-34.9173235,17z/data=!3m1!4b1!4m5!3m4!1s0x7ab1e5c7a91ba57:0x6432008b4c9baf6b!8m2!3d-8.1073967!4d-34.915145'>
                    Localização</a>
                </button>
            </div>
        </main>
    )
}

export default Home;