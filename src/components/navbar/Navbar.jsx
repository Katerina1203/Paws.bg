import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image1 from "../../../img/logo.png"
import Image from "next/image"
const Navbar = async () => {


  return (
    <div className={styles.container}>
      <a href="/"> <Image src={Image1} alt="Logo" width={100} height={50} /></a>
      <div> <Links/></div>
    
    </div>
  )
}

export default Navbar