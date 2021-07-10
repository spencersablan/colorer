import data from '../pages/api/db'
import styles from '../styles/Square.module.css'

export default function Square(props) {

    let squareColor = data[props.id].color

    const handleClick = (e) => {
        e.preventDefault()
        console.log(data[props.id].color)
        squareColor = e.target.colorPicker.value
        console.log(data[props.id].color)
    }

    return (
        <div className={styles.square} style={{background: squareColor}}>
            <form onSubmit={handleClick} id="color-form">
                    <input name="colorPicker" type="color"/>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}

