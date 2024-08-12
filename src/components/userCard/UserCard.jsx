import { getUser } from "@/lib/data";
import styles from "./userCard.module.css";
import Image from "next/image";

const UserCard = async ({ Id }) => {

  const user = await getUser(Id);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noPhoto.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>

        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default UserCard;