import Head from 'next/head'
import styles from '../styles/Colorer.module.css'



export default function Colorer() {

    const handleClick = (e) => {
        e.preventDefault()
        
    }

    return (
        <div>
            <Head>
                <title>Colorer</title>
            </Head>

            <main className={styles.main}>
                
                <form id="color-form">
                    <input type="color" />
                    <button type="submit" onClick={handleClick}>Submit</button>
                </form>
            </main>
        </div>
    )
}