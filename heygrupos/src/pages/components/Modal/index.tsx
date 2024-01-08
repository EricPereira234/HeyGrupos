import styles from "./modal.module.css";

import { IoIosLogOut } from "react-icons/io";

type PlayModalType = {
  closeModal: () => void;
}

export default function Modal({ closeModal }: PlayModalType) {
  return (
    <div className={styles.cardGeral} >
      <div className={styles.cardModal} >
        <div className={styles.cardButtonSair} >
          <IoIosLogOut size={25} onClick={closeModal} />
        </div>
        <label className={styles.tituloModal} >Criar um novo grupo ?</label>
        <input type="text" placeholder="nome do grupo" className={styles.input} />
        <button className={styles.button}>Salvar</button>
      </div>
    </div>
  )
}