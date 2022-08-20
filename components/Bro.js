import Image from "next/image"
import styles from "../styles/Bro.module.css"

export default function Bro () {
    return (<>
    <Image className={styles.tilt+' '+styles.img} src="/viktor.jpg" alt="" width={144} height={144}/>
    <p className={styles.tilt}>U mad bro?</p>
    <Image className={styles.spin+' '+styles.img} src="/axel.jpg" alt="" width={144} height={144}/>
 </>)
}
