import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 25,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        min: 8,
        max: 25,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
);

const photoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    src: {
        type: String,
        required: true,
    },
    animalId: {
        type: mongoose.Schema.ObjectId,
        //   ref: 'Animal',
        //  required: true,
    }
},
    { timestamps: true }
);

const animalSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    userID: {
        // type  :mongoose.Schema.ObjectId,
        type: String,
        required: true,
        ref: 'User',
    },
},
    { timestamps: true }
);
const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    chatRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatRoom',
        required: true,
    },
},
    { timestamps: true }
);

const chatRoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    participants: [
        {
            type: mongoose.Schema.ObjectId,
            required: true,
        },
    ],
},
    { timestamps: true }
);
const signalSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    chatRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatRoom',
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
        },
    },
    { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Animal = mongoose.models.Animal || mongoose.model("Animal", animalSchema);
export const Photo = mongoose.models.Photo || mongoose.model("Photo", photoSchema);
export const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);
export const ChatRoom = mongoose.models.ChatRoom || mongoose.model("ChatRoom", chatRoomSchema);
export const Signal = mongoose.models.Signal || mongoose.model("Signal", signalSchema);