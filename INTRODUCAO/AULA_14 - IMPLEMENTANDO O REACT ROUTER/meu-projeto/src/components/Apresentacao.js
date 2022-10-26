function Apresentacao({name}) {

    function geraTexto() {
        return <p>Seu nome é {name}, certo?</p>
    }

    return <>{name && (geraTexto())}</>
}

export default Apresentacao