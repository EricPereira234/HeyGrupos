import styles from './siginup.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { db, auth } from '../../services/firebaseConection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function SiginUp() {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  async function handleCreateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nome.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;

        // Cria um documento para o usuário no Firestore
        const userDocRef = doc(db, 'users', uid);
        await setDoc(userDocRef, { nome, email });

        alert('Cadastrado com sucesso!');
        navigate('/login'); 
      } catch (error) {
        console.error('Erro ao criar usuário: '+ error );
        alert('Erro ao criar usuário. Verifique a console para mais detalhes.');
      }
    } else {
      alert('Verifique todos os campos!');
    }
  }

  return (
    <div className={styles.cardUp}>
      <div className={styles.cardInputs}>
        <form className={styles.fromLogin} onSubmit={handleCreateUser}>
          <label className={styles.titulnoLogi}>HeyGrupos</label>
          <input
            type="text"
            placeholder="Seu nome..."
            className={styles.inputsLogin}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="Exemplo@email.com"
            className={styles.inputsLogin}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="*******"
            className={styles.inputsLogin}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value={'Cadastrar'} className={styles.buttonLogin} />
          <Link to={'/login'}>Faça login</Link>
        </form>
      </div>
    </div>
  );
}
