"use server"
import { revalidatePath } from "next/cache"
import { User, Animal, Photo } from "./models"
import { connectDB } from "./utils"
import path from "path"
import { writeFile } from "fs/promises"
import { signIn, signOut, auth } from "@/auth"

export const createAnimalPost = async (formData) => {
	try {
		await connectDB();
		const session = await auth();

		console.info("[Action] FormData");
		console.info(formData)

		const description = formData.get('description')
		const type = formData.get('type')
		const age = formData.get('age')
		const city = formData.get('city')
		const gender = formData.get('gender')
		const files = formData.getAll('file')

		//TODO: make checks here
		if (!description || !type || !age || !city || !gender || !files || !Array.isArray(files)) {
			throw new Error("Invalid data provided");
		}

		const user = await User.findOne({ email: session.user.email });

		const newAnimal = await Animal.create({
			description,
			type,
			age,
			city,
			gender,
			userID: user._id
		});

		const animal = await newAnimal.save();

		for (const file of files) {
			const filename = Date.now() + file.name.replaceAll(" ", "_");
			const newPath = path.join(process.cwd(), 'public', 'uploads', filename)
			const buffer = Buffer.from(await file.arrayBuffer());
			await writeFile(
				newPath,
				buffer
			);
			await Photo.create({
				title: filename,
				src: newPath,
				animalId: animal._id,
			});
		}
	} catch (e) {
		console.log("Error occurred ", e)
	}

}

export const takeAllPhotosForSingleAnimal = async (id) =>{
	try {
		await connectDB();
		const photos = await Photo.find({ animalId: id });
		return photos
		
	} catch (error) {
		logger.error("Error occurred: ", error)
	}
}

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
}
//users
export const handleGoogleLogin = async () => {
	"use server";
	await signIn("google", { redirectTo: "/" });
}

export const handleLogout = async () => {
	"use server";
	await signOut({ redirectTo: "/" });
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
export async function createUser(user) {
	try {
		
		
		await User.create(user)
	} catch (e) {
		console.log("in error");
		
		console.error(e.message)
	}
}

export const deleteUser = async (formData) => {
	const { id } = Object.fromEntries(formData);
  
	try {
		connectDB();
  
	  await Animal.deleteMany({ userID: id });
	  await User.findByIdAndDelete(id);
	  console.log("deleted data from the db");
	  revalidatePath("/admin");
	} catch (err) {
	  console.log(err);
	  return { error: "Something went wrong!" };
	}
  };
  
 


  export const getSession = async () => {
	try {
	  const session = await auth();
	  return session;
	} catch (error) {
	  console.error('Error fetching session:', error);
	  return null;
	}
  };