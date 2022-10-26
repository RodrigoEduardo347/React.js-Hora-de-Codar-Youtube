function OutraLista({ nomes }) {
    return (
        <>
            {
                nomes.length > 0 ?
                    (
                        <div>
                            <h3>Nomes</h3>
                            <nav>
                                <ul>
                                    {nomes.map((nome, index) => {
                                        return <li key={index}>{nome}</li>
                                    })}
                                </ul>
                            </nav>
                        </div>
                    )
                    :
                    (<h1>Nenhum item na lista!</h1>)
            }
        </>
    )
}

export default OutraLista