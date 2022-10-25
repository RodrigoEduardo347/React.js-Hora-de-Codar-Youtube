import Button from "./Evento/Button"

function Evento({numero}) {

    function clicou() {
        console.log(`Clicou no evento 1`)
    }

    function clicouDois() {
        console.log(`Clicou no evento 2`)
    }

    function clicouTres() {
        console.log(`Clicou no evento 3`)
    }

    return (
        <div>
            <h1>Clique em mim para ativar um evento!</h1>
            <Button event={clicou} text="Função 1"/>
            <Button event={clicouDois} text="Função 2"/>
            <Button event={clicouTres} text="Função 3"/>
        </div>
    )
}

export default Evento