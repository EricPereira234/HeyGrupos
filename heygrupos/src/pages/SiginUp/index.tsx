import styles from './siginup.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SiginUp() {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleCreateUser(e:any){
        e.preventDefault();
        alert('teste');
    }

    return (
        <div className={styles.cardUp} >
            <div className={styles.cardInputs} >
                <form className={styles.fromLogin} onSubmit={handleCreateUser} >
                    <label className={styles.titulnoLogi} >HeyGrupos</label>
                    <input type="text" placeholder="seu nome..." className={styles.inputsLogin}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input type="email" placeholder="exemple@email.com" className={styles.inputsLogin}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="*******" className={styles.inputsLogin} />
                    <input type="submit" value={'Salvar'} className={styles.buttonLogin}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <Link to={'/login'} >faça login</Link>
                </form>
            </div>
        </div>
    )
}