import styles from "./modal.module.css";

type PlayModalType = {
  closeModal: () => void;
}

export default function Modal({ closeModal }: PlayModalType) {
  return (
    <div className={styles.cardGeral} >
      <div className={styles.cardModal} >
        <label className={styles.tituloModal} >Criar um novo grupo ?</label>
        <input type="text" placeholder="nome do grupo" className={styles.input} />
        <button onClick={closeModal} className={styles.button}>sair</button>
      </div>
    </div>
  )
}