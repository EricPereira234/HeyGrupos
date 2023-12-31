import styles from "./header.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";



export default function Header(){
    return(
        <div className={styles.cardHeader} >
          <div className={styles.titulo} ><CiLogout size={18} /> Grupos </div>
          <FaMagnifyingGlass size={18}  className={styles.lupa} />
        </div>
    )
}