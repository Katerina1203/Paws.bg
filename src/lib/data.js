
import {connectDB} from "./utils"
import { Animal, Photo, User } from "./models"

import { unstable_noStore as noStore } from 'next/cache';

export const getAnimals= async() =>{
    try {
        connectDB()
        const animals= await Animal.find()
        return animals
    } catch (e) {
        console.error(e)   
    }
};

export const getAnimalAd=async(id) =>{
    try {
        connectDB()
        const animal= await Animal.findOne({id})

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

export const getUser=async(id) =>{
    noStore();
    try {
        connectDB()
        const user= await User.findById(id)

        return user
    } catch (e) {
        console.error(e)   
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