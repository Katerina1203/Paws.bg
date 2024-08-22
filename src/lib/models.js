import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        min:4,
        max:25,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        min:8,
        max:25,
    },
    img:{
        type:String,  
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
{timestamps:true}
);

const photoSchema = new mongoose.Schema({
    title: {
      type: String,
    },
    src: {
      type: String,
      required: true,
    },
    animalId:{
      type  :mongoose.Schema.ObjectId,
    //  required: true,
    }
  },
  {timestamps:true}
  );

const animalSchema=new mongoose.Schema({
    description:{
        type:String,
        require:true,      
    },
    type:{
        type:String,
        require:true,      
    },
    age:{
        type:String,
        require :true,
    },
    city:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    userID:{
        // type  :mongoose.Schema.ObjectId,
        type:String,
        require:true,
        ref: 'User',
    },
},
{timestamps:true}
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
    
  },
  {timestamps:true}
);
  
  const chatRoomSchema = new mongoose.Schema({
    animalId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Animal', 
         required: true 
        },
    participants: 
    [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
         required: true
        }],
    messages: [messageSchema],
  });
export const User = mongoose.models.User || mongoose.model("User",userSchema);
export const Animal = mongoose.models.Animal || mongoose.model("Animal",animalSchema);
export const Photo = mongoose.models.Photo || mongoose.model("Photo",photoSchema);
export const Message = mongoose.models.Message || mongoose.model("Message",messageSchema);
export const ChatRoom = mongoose.models.ChatRoom || mongoose.model("ChatRoom",chatRoomSchema);
