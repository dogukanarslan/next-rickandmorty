import styles from "../styles/Sidebar.module.css"
import Link from "next/link"

const Sidebar = (props) => {
  const { selected } = props

  return (
    <div className={styles.sidebar}>
      <Link
        href="/characters"
        className={selected === "/characters" ? styles.active : ""}
      >
        Characters
      </Link>
      <Link
        href="/locations"
        className={selected === "/locations" ? styles.active : ""}
      >
        Locations
      </Link>
      <Link
        href="/episodes"
        className={selected === "/episodes" ? styles.active : ""}
      >
        Episodes
      </Link>
    </div>
  )
}

export default Sidebar
