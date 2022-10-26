import Item from "./Item"

function List() {
    return (
        <>
            <h1>Jaz aqui uma lista</h1>
            <nav>
                <Item item="Item 1" ano={1994}/>
                <Item item="Item 2" ano={1542}/>
                <Item item="Item 3" ano={1986}/>
                <Item item="Item 4" ano={1986}/>
            </nav>
        </>
    )
}

export default List