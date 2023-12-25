import styles from "./login.module.css";
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <div className={styles.cardLogin} >
          <div className={styles.cardInputs} >
            <form className={styles.fromLogin} >
                <label className={styles.tituloLogin} >HeyGrupos</label>
                <input type="email" placeholder="exemple@email.com" className={styles.inputsLogin} />
                <input type="password" placeholder="*******" className={styles.inputsLogin} />
                <input type="submit" value={'Salvar'} className={styles.buttonLogin}  />
                <Link to={'/siginup'} >criar conta</Link>
            </form>
          </div>
        </div>
    )
}