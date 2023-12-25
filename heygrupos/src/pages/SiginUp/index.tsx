import styles from './siginup.module.css';
import { Link } from 'react-router-dom';

export default function SiginUp() {
    return (
        <div className={styles.cardUp} >
            <div className={styles.cardInputs} >
                <form className={styles.fromLogin} >
                    <label className={styles.titulnoLogi} >HeyGrupos</label>
                    <input type="text" placeholder="seu nome..."  className={styles.inputsLogin}  />
                    <input type="email" placeholder="exemple@email.com" className={styles.inputsLogin} />
                    <input type="password" placeholder="*******"  className={styles.inputsLogin} />
                    <input type="submit" value={'Salvar'} className={styles.buttonLogin} />
                    <Link to={'/login'} >faça login</Link>
                </form>
            </div>
        </div>
    )
}