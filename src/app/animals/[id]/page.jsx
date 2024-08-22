
import SingleAnimal from "@/components/SingleAnimal/SingleAnimal";
const AnimalPage = ({ params }) => {
  const { id } = params;
  return <>
    <SingleAnimal  id={id} />
  </>

};

export default AnimalPage;
