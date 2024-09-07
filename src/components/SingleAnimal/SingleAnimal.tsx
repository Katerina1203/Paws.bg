import Image from 'next/image';
import Link from 'next/link';
import { getAnimalAd, getUserById } from "@/lib/data";
import { takeAllPhotosForSingleAnimal } from "@/lib/actions"

import ImagesPreview from './ImagesPreview';

import type { ObjectId } from 'mongoose';
type Params = {
	id: string;
}
const SingleAnimal = async ({ id }: Params) => {
	const animal = await getAnimalAd(id);
	const photos = await takeAllPhotosForSingleAnimal(id as unknown as ObjectId);

	if (!animal || !photos) {
		console.error("Animal not found", id);
		return <div>Animal not found.</div>;
	}

	if (!animal) {
		console.error("Animal not found", id);
		return <div>Animal not found.</div>;
	}

	const user = await getUserById(animal.userID);

	if (!user) {
		console.error("User not found");
		return <div>User not found.</div>;
	}

	return (
		<div className="flex items-start gap-12 p-8 min-h-screen flex-col md:flex-row">
			<ImagesPreview photos={photos} />

			<div className="flex-1 flex flex-col gap-4 p-4 rounded bg-popover-background shadow-md shadow-border min-w-full md:min-w-max">
				<div>
					<div className="italic text-[1.2rem] mb-2 flex gap-8 font-bold">
						<div>Информация</div>
					</div>
					<div className="italic text-[1.2rem] mb-2 flex flex-col">
						<div>вид: {animal.type}</div>
						<div>възраст: {animal.age}</div>
						<div>пол: {animal.gender}</div>
					</div>
					<div className="italic text-[1.2rem] mb-2 flex gap-8">
						<div>локация: {animal.city}</div>
					</div>
					<div>
						дата на обявата : {animal.createdAt.toString().slice(4, 16)}
					</div>
				</div>
				<div className="flex gap-8 text-[1.2rem] mb-2">
                   
                </div>
				<Link href={`/user/${user._id}`}>
					<div className="flex items-center gap-4 cursor-pointer">
						<Image
							src={user.img}
							alt={`${user.username}'s profile`}
							className="rounded-full object-cover border-2 border-border"
							width={60}
							height={60}
						/>
						<p>{user.username}</p>
					</div>
				</Link>

				<div className="mt-4 text-base leading-6">
					<div className="font-bold text-lg mb-2">Допълнителна информация</div>
					<p>{animal.description}</p>
				</div>
			</div>
		</div>
	);
};


export default SingleAnimal;
