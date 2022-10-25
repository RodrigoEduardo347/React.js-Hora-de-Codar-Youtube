import style from './Mensagem.module.css'

function Mensagem() {
    console.log(style)
    return (
        <div>
            <p className={style.p1}>Isso aqui é uma mensagem! 1</p>
            <p className={style.p2}>Isso aqui é uma mensagem! 2</p>
            <p className={style.p3}>Isso aqui é uma mensagem! 3</p>
        </div>
    )
}

export default Mensagem