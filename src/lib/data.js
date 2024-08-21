
import {connectDB} from "./utils"
import { Animal, Photo, User } from "./models"
import { unstable_noStore as noStore } from 'next/cache'
import mongoose from "mongoose"
const { ObjectId } = require('mongoose').Types;


export const createAnimal = async (animalData, userId) => {
    try {
      const animal = new Animal({ ...animalData, userID: userId });
      await animal.save();
      return animal;
    } catch (error) {
      console.error("Error creating animal ad:", error);
    }
  };
  
  export const getAnimals = async () => {
    try {
      await connectDB();
      const animals = await Animal.find();
      return animals;
    } catch (e) {
      console.error(e);
      return [];
    }
  };
  
  export const filterAnimals = async (filters = {}) => {
    try {
      await connectDB();
  
      const query = {};
  
      if (filters.type) {
        query.type = filters.type;
      }
  
      if (filters.city) {
        query.city = filters.city;
      }
  
      if (filters.gender) {
        query.gender = filters.gender;
      }
  
      const animals = await Animal.find(query);
      return animals;
    } catch (e) {
      console.error(e);
      return [];
    }
  };
  


export const getAnimalAd=async(id) =>{
    try {
        connectDB()
        const animal= await Animal.findOne({_id: id})

        return animal
    }catch (e) {
        console.error(e)   
    } 
};
export const getPhotos= async(id) =>{
    try {
        connectDB()
        const photos= await Photo.find({ownerID:id})
        return photos
    } catch (e) {
        console.error(e)   
    }
};

export const getUser=async(email) =>{
    noStore();
    try {
        connectDB()
        const user= await User.findOne({ email: email })

        return user
    } catch (e) {
        console.error(e)   
    }  
};

export const getUserById = async (id) => {
    noStore();
    try {
        await connectDB();

        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.error("Invalid ObjectId format:", id);
            return null;
        }

        const user = await User.findById({_id: id});  
        return user ? user.toObject() : null;
    } catch (e) {
        console.error("Error fetching user by ID:", e);
        return null;
    }
};
export const getAllUser=async() =>{
    try {
        connectDB()
        const users= await User.find()
        return users
    }catch (e) {
        console.error(e)   
    }  
};
export const getAnimalsByUserId = async (userId) => {
    try {
        connectDB();
       
        const animals = await Animal.find({ userID: userId });
        return animals;
    } catch (e) {
        console.error("Error fetching animals:", e);
        throw e;
    }
};
