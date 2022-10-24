function SayMyName(props) {
    return (
        <div>
            <p>Olá {props.nome}, tudo bem com você?</p>
            <p>É verdade que você possui {props.idade} anos?</p>
        </div>
    )
}

export default SayMyName