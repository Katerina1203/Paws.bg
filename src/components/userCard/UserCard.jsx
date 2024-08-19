
import { getUser } from "@/lib/data"
import styles from "./userCard.module.css"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faComments, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {handleLogout} from '@/lib/action' 
// const UserCard = async ({ Id }) => {

//   const user = await getUser(Id);

//   return (
//     <div className={styles.container}>
//       <Image
//         className={styles.avatar}
//         src={user.image ? user.image : "/noPhoto.png"}
//         alt=""
//         width={50}
//         height={50}
//       />
//       <div className={styles.texts}>

//         <span className={styles.username}>{user.username}</span>
//       </div>
//     </div>
//   );
// };

// export default UserCard;
export default function UserCard() {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'A passionate developer and lifelong learner.',
        profilePicture: 'https://via.placeholder.com/150',
    };

    const posts = [
        { id: 1, name: 'Post One', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Post Two', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Post Three', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Post Four', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.profileCard}>
                <div className={styles.imageContainer}>
                    <img
                        src={user.profilePicture}
                        alt={`${user.name}'s profile`}
                        className={styles.profileImage}
                    />
                </div>
                <h1 className={styles.name}>{user.name}</h1>
                <p className={styles.email}>{user.email}</p>
                <p className={styles.bio}>{user.bio}</p>

                <div className={styles.actions}>

                    <div className={styles.dropdown}>
                        <button className={styles.actionButton}>
                            <FontAwesomeIcon icon={faEllipsisVertical} className={styles.icon} />
                        </button>
                        <div className={styles.dropdownContent}>
                            <a href="#">Change Password</a>
                            <a href="#">Privacy Settings</a>
                            <a href="#">Notification Preferences</a>
                        </div>
                    </div>

                    <button className={styles.actionButton}>
                        <FontAwesomeIcon icon={faComments} style={{ color: "#feecec", }} />
                    </button>
<form action={handleLogout}>
                    <button className={styles.actionButton} type="submit">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#feecec", }} />
                    </button>
                    </form>
                </div>
            </div>

            <div className={styles.postsGrid}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.postCard}>
                        <img
                            src={post.image}
                            alt={post.name}
                            className={styles.postImage}
                        />
                        <p className={styles.postName}>{post.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}