import styles from './siginup.module.css';

export default function SiginUp() {
    return (
        <div className={styles.cardUp} >
            <div className={styles.cardInputs} >
                <form>
                    <label>HeyGrupos</label>
                    <input type="text" placeholder="seu nome..." />
                    <input type="email" placeholder="exemple@email.com" />
                    <input type="password" placeholder="*******" />
                    <input type="submit" value={'Salvar'} />
                </form>
            </div>
        </div>
    )
}