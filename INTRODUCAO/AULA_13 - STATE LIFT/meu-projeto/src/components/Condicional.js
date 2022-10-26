import {useState} from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function validaEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparFormulario(e) {
        e.preventDefault()
        setUserEmail('')
    }

    return (
        <div>
            <form onSubmit={validaEmail}>
                <input type="email" placeholder="Insira o seu e-mail..." onChange={(e) => setEmail(e.target.value)}/><br/>
                <button type="submit">Enviar</button>
                {userEmail && (
                    <div>
                        <p>Cadastro com o E-mail {userEmail} criado!</p>
                        <button onClick={limparFormulario}>Limpar formulário</button>
                    </div>
                )}
            </form>
        </div>
    )
}


export default Condicional