import styles from './SayMyName.module.css'

function SayMyName(props) {
    return (
        <div>
            <p className = {styles.nome}>Olá {props.nome}, tudo bem com você?</p>
            <p className = {styles.idade}>É verdade que você possui {props.idade} anos?</p>
        </div>
    )
}

export default SayMyName