function Pessoa({nome, idade, profissao, hobbie}) {
    return (
        <div>
            <p>{nome}, é verdade que você é {profissao} mas gosta de {hobbie}? Sério mesmo? Mesmo com {idade} anos?</p>
        </div>
    )
}

export default Pessoa