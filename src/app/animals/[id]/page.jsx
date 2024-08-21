import SingleAnimal from "@/components/SingleAnimal/singleAnimal"

const AnimalPage = ({ params }) => {
  const { id } = params;

  
  return <>
    <SingleAnimal id={id} />
  </>

};

export default AnimalPage;
