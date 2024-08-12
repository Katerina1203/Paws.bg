"use server";
import { revalidatePath } from "next/cache";
import { User, Animal, Photo } from "./models";
import { connectDB } from "./utils";

import path from "path";
import { writeFile } from "fs/promises";
export const uploadAnimalPhotos = async (formData) => {
	await connectDB();
	//export const uploadAnimalPhotos = async (formData,animalId)=>{
	const files = formData.getAll("file");


	console.log(files)
	if (!files && !Array.isArray(files)) {
		console.log("Error reading files")
	}
	try {
		let fileNamesAndPath = []

		for (const file of files) {
			const filename = Date.now() + file.name.replaceAll(" ", "_");
			const newPath = path.join(process.cwd(), 'public', 'uploads', filename)
			const buffer = Buffer.from(await file.arrayBuffer());
			
			await writeFile(
				newPath,
				buffer
			);
			fileNamesAndPath.push({filename, newPath})
			console.log('Photo saved to the files');
		}
		for (const fileNameAndPath of fileNamesAndPath) {
			await Photo.create({
				title: fileNameAndPath.filename,
				src: fileNameAndPath.newPath,
			});
			console.log('Photo saved to the database');
		}
	} catch (error) {
		console.log("Error occured ", error)
	}
}
export const addAnimal = async (formData) => {

	console.log(formData);
	try {

		if (!(formData instanceof FormData)) {
			throw new Error('formData is not a valid FormData object');
		}

		const formEntries = Object.fromEntries(formData.entries());


		const { description, type, userID, city, gender, img } = formEntries;
		let { age } = formEntries;


		age = parseFloat(age);


		if (isNaN(age)) {
			throw new Error('Invalid age value. Age must be a number.');
		}


		await connectDB();


		const images = Array.isArray(img)
			? img.map((imageUrl) => ({ imageUrl }))
			: [{ imageUrl: img }];

		const newAnimal = new Animal({
			description,
			type,
			age,
			userID,
			city,
			gender,
			img: images,
		});


		await newAnimal.save();
		console.log('Animal saved to the database');


		revalidatePath('/animals');

	} catch (err) {
		console.error(err.message);
		return { error: 'Something went wrong!' };
	}
};

export const deleteAnimal = async (formData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDb();

		await Post.findByIdAndDelete(id);
		console.log("deleted from db");
		revalidatePath("/animals");

	} catch (err) {
		console.log(err);
		return { error: "Something went wrong!" };
	}
};
