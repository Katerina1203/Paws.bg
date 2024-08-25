import Organisation from "@/components/organisationCard/Organisation";
import styles from "./organisation.module.css"
const Organisations = () => {
    return <div className={styles.container}>
      <Organisation/>
      <Organisation/>
      <Organisation/>
      <Organisation/>

    </div>;
  };
  
  export default Organisations;


