import { Suspense } from "react";
import styles from "./admin.module.css";
import UserAdmin from "@/components/UserAdmin/UserAdmin";

import { auth } from "@/auth";

const AdminPage = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
  
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <UserAdmin />
          </Suspense>
        </div>

      </div>
    </div>
  );
};

export default AdminPage;