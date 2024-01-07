import styles from "./chatroom.module.css";
import React, {useState} from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import Modal from "../components/Modal";


export default function ChatRoom() {
  const [modal, setModal] = useState<boolean>(false);
    return (
        <>
            <Header />
            <div className={styles.cardChat} >
               <div className={styles.carItem} >
                 <div className={styles.nameGrupo} >React.js</div>
                 <label className={styles.msg} >fala eric tudo bem?</label>
               </div>
            </div>
            {modal? <Modal closeModal={()=>setModal(false)} /> : <Button playModal={()=> setModal(true)} /> }
    
        </>
    )
}