import {useState} from 'react'

function Form() {

    function cadastrouUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <form onSubmit={cadastrouUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite aqui o seu texto!" onChange={(e)=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="name">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha!" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form