
import {connectDB} from "./utils"
import { Animal, Photo, User } from "./models"

import { unstable_noStore as noStore } from 'next/cache';

export const getAnimals= async() =>{
    try {
        connectDB()
        const animals= await Animal.find()
        return animals
    } catch (error) {
        console.log(error)
      
    }
};

export const getAnimalAd=async(id) =>{
    try {
        connectDB()
        const animal= await Animal.findOne({id})

        return animal
    } catch (error) {
        console.log(error)
    
    }  
};
export const getPhotos= async(id) =>{
    try {
        connectDB()
        const photos= await Photo.find({ownerID:id})
        return photos
    } catch (error) {
        console.log(error)
      
    }
};

export const getUser=async(id) =>{
    noStore();
    try {
        connectDB()
        const user= await User.findById(id)

        return user
    } catch (error) {
        console.log(error)
     
    }  
};
export const getAllUser=async() =>{
    try {
        connectDB()
        const users= await User.find()
        return users
    } catch (error) {
        console.log(error)
      
    }  
};