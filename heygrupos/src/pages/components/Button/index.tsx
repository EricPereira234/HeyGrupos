import styles from "./button.module.css";

import { FaPlusCircle } from "react-icons/fa";

export default function Button(){
    return(
        <div className={styles.cardButtonModal} >
          < FaPlusCircle size={25} />
        </div>
    )
}