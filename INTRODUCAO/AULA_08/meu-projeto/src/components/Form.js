function Form() {

    function cadastrouUsuario(e) {
        e.preventDefault()
        console.log("Usuário foi cadastrado!")
    }

    return (
        <div>
            <form onSubmit={cadastrouUsuario}>
                <div>
                    <input type="text" placeholder="Digite aqui o seu texto!" />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form