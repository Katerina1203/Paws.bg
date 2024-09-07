import SingleAnimal from "@/components/SingleAnimal/SingleAnimal";

interface AnimalPageProps {
	params: {
		id: string;
	};
}

const AnimalPage = ({ params }: AnimalPageProps) => {
	const { id } = params;
	return <>
		<SingleAnimal id={id} />
	</>
};

export default AnimalPage;

