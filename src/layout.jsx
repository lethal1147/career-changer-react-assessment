import Navbar from "./navbar"
import styles from "./style/layout.module.css"

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <div className={styles.contentContainer}>
                {children}
            </div>
        </>
    )
}