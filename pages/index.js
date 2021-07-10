import Head from 'next/head'
import styles from '../styles/Colorer.module.css'
import Square from '../components/square'
import data from './api/db'

export default function Colorer() {
    return (
        <div>
            <Head>
                <title>Colorer</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.container}>
                    <Square id="sq1" color={data.sq1.color}/>
                    <Square id="sq2" color={data.sq2.color}/>
                    <Square id="sq3" color={data.sq3.color}/>
                    <Square id="sq4" color={data.sq4.color}/>
                    <Square id="sq5" color={data.sq5.color}/>
                    <Square id="sq6" color={data.sq6.color}/>
                    <Square id="sq7" color={data.sq7.color}/>
                    <Square id="sq8" color={data.sq8.color}/>
                    <Square id="sq9" color={data.sq9.color}/>
                    <Square id="sq10" color={data.sq10.color}/>
                    <Square id="sq11" color={data.sq11.color}/>
                    <Square id="sq12" color={data.sq12.color}/>
                    <Square id="sq13" color={data.sq13.color}/>
                    <Square id="sq14" color={data.sq14.color}/>
                    <Square id="sq15" color={data.sq15.color}/>
                    <Square id="sq16" color={data.sq16.color}/>
                </div>
            </main>
        </div>
    )
}