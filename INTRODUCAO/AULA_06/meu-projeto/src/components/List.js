import Item from "./Item"

function List() {
    return (
        <>
            <h1>Jaz aqui uma lista</h1>
            <nav>
                <Item item="Item 1"/>
                <Item item="Item 2"/>
                <Item item="Item 3"/>
            </nav>
        </>
    )
}

export default List