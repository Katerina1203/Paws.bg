"use client";

import styles from "./links.module.css";
import NavBarLink from "../NavBarLink";
import { useState } from "react";


 const links = [
 
  {
    title: "За Нас",
    path: "/about",
  },
   {
    title: "Животни",
    path: "/animals",
  },
  {
    title: "За Контакт",
    path: "/contact",
  },
  {
    title: "Намери Дом",
    path: "/findHome",
  },
  {
    title: "Организации",
    path: "/organisations",
  },
 
];
const Links = () => 
{
  const [open,SetOpen] = useState();

   
const session=false;
const isAdmin=false;
  return (
<div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavBarLink item={link} key={link.title} />
        ))}
        {
          session?(
            <>
          
            {isAdmin && <NavBarLink item={ { title : "Admin" , path:"/admin"} }/>}
            <button className={styles.logout}>Logout</button>
            </>
  ):(
    <NavBarLink item={{title:"Login" ,path:"/login"}}/>
  )


        }
       </div>
        <button className={styles.menuButton} onClick={()=> SetOpen((prev)=>!prev)}>Menu</button>
        {
          open &&(
          <div className={styles.mobileLinks}>
             {links.map((link) => (
          <NavBarLink item={link} key={link.title} />
        ))}
          </div>
          )
        }
    </div>
   
  );
};

export default Links;