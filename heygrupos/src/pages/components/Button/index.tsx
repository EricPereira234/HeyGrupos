import styles from "./button.module.css";

import { FaPlusCircle } from "react-icons/fa";


interface ButtonProps {
  playModal: ()=> void;
}

export default function Button({playModal}:ButtonProps){
    return(
        <div className={styles.cardButtonModal} >
          < FaPlusCircle size={25}  onClick={playModal} />
        </div>
    )
}