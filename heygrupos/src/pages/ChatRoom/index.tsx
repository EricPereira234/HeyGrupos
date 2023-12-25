import styles from "./chatroom.module.css";

import Header from "../components/Header"


export default function ChatRoom() {
    return (
        <>
            <Header />
            <div className={styles.cardChat} >
               <div className={styles.carItem} >
                 <div className={styles.nameGrupo} >React.js</div>
                 <label className={styles.msg} >fala eric tudo bem?</label>
               </div>
            </div>
        </>
    )
}