import styles from "./login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { auth, db } from '../../services/firebaseConection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [load, setLoad] = useState<boolean>(true);
  const navigate = useNavigate();

  async function SingIne(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // torna false para alterar o nome do botão logar para carregando...
    setLoad(false);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      const userData = {
        uid: uid,
        nome: docSnap.data()?.nome,
        email: userCredential.user.email
      };

      // Armazena os dados do usuário no localStorage
      localStorage.setItem('@heygrupos', JSON.stringify(userData));

      toast.success('Bem Vindo de volta '+userData.nome);

      setLoad(true);
      
      // Redireciona para a página desejada após o login
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer login:');
      alert('Erro ao fazer login. Verifique as credenciais e tente novamente.');
    }
  }

  return (
    <div className={styles.cardLogin}>
      <div className={styles.cardInputs}>
        <form className={styles.fromLogin} onSubmit={SingIne}>
          <label className={styles.tituloLogin}>HeyGrupos</label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            className={styles.inputsLogin}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="*******"
            className={styles.inputsLogin}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.buttonLogin}>{load? 'Logar ': 'Carregando...'}</button>
          <Link to={'/siginup'}>Criar conta</Link>
        </form>
      </div>
    </div>
  );
}
