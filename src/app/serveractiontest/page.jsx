import { uploadAnimalPhotos } from "@/lib/action"

const ServerActionTestPage = () => {


  return (
    <div>
      <form action={uploadAnimalPhotos}>
        <input type="text" placeholder="description" name="description"/>
        <input type="text" placeholder="type" name="type"/>
        <input type="number" step="0.01" placeholder="age" name="age"  />
        <input type="text" placeholder="userId" name="userId"/>
        <input type="text" placeholder="city" name="city"/>
        <input type="text" placeholder="gender" name="gender"/>
        <input type="file" name="file" multiple={true} accept="image/*" />
        <button>Create</button>
      </form>

     
    </div>
  )
}

export default ServerActionTestPage