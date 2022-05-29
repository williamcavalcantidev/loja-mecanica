import './style.css'

const contato = () =>{
    return (
        <div className="container-contato">
            <form>
                <input placeholder="nome completo"/><br></br>
                <input placeholder="Email"/><br></br>
                <input placeholder="Zap"/><br></br>
                <input type='submit'/>

            </form>
        </div>
    )
}

export default contato;