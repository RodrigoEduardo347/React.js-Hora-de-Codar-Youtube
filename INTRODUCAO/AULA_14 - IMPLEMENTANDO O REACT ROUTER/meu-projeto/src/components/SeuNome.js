function SeuNome({setName}) {
    return (
        <div>
            <h1>Cadastro</h1>
            <form>
                <input type="text" placeholder="Digite o seu nome..." onChange={(e)=> setName(e.target.value)}></input><br/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default SeuNome