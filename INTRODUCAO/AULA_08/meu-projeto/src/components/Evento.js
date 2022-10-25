function Evento({numero}) {

    function clicou() {
        console.log(`Uau! Clicaram em mim! ${numero}`)
    }

    return (
        <div>
            <h1>Clique em mim para ativar um evento!</h1>
            <button onClick={clicou}>Clique aqui</button>
        </div>
    )
}

export default Evento