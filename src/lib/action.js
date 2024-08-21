"use server";
import { revalidatePath } from "next/cache";
import { User, Animal, Photo } from "./models";
import { connectDB } from "./utils";

import path from "path";
import { writeFile } from "fs/promises";
import { signIn, signOut } from "@/auth";
import { log } from "console";


export const uploadAnimalPhotos = async (formData) => {
	await connectDB();
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
	} catch (e) {
		console.log("Error occured ", e)
	}
}
export const createAnimal = async (formData) => {

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

	} catch (e) {
		console.error(e.message);
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

	} catch (e) {
		console.log(e);
		return { error: "Something went wrong!" };
	}
};
export const handleGoogleLogin = async () => {
	"use server";
	await signIn("google",{redirectTo:"/"});
  };
  
  export const handleLogout = async () => {
	"use server";
	await signOut({ redirectTo: "/" });
  };

  //users

  export async function createUser(user)
  {
	try {
		 await User.create(user)
	} catch (e) {
		console.error(e.message)
	}
  }
  export async function getUserWithCredentials(formData) {
	console.log("formData", formData);
  
	try {
	  const response = await signIn("credentials", {
		
		email: formData.get("email"),
		password: formData.get("password"),
		redirect: false,
	  });
	
	  
	  return response;
	} catch (e) {
		console.error(e.message)
	
	}
  }