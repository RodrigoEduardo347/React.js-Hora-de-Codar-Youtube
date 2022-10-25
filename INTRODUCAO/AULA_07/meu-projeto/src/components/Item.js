import PropTypes from 'prop-types'

function Item({item, ano}) {
    return (
        <>
            <li>{item} - {ano}</li>
        </>
    )
}

// tipo os argumentos que chegam para a função
Item.propTypes = {
    item: PropTypes.string.isRequired,
    ano: PropTypes.number,
}

// cria itens default para caso não cheguem nenhum item
Item.defaultProps = {
    item: "Faltou o item",
    ano: 0,    
}

export default Item