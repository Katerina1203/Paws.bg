import { connectDB } from '@/lib/utils'
import { Animal } from '@/lib/models' 

export async function POST(request) {
    try {
        await connectDB();

        const formData = await request.formData()
        const { description, type, userID, city, gender, img } = Object.fromEntries(formData.entries())
        let { age } = formData.get('age')

        age = parseFloat(age)
        if (isNaN(age)) {
            return new Response(JSON.stringify({ error: 'Invalid age value. Age must be a number.' }), { status: 400 });
        }

        const newAnimal = new Animal({
            description,
            type,
            age,
            userID,
            city,
            gender,
            img,
        });

        await newAnimal.save()
        console.log('Animal saved to the database')
        return new Response(JSON.stringify({ message: 'Animal created successfully!' }), { status: 201 })

    } catch (e) {
        console.error('Error creating animal:', e.message)
        return new Response(JSON.stringify({ error: 'Something went wrong!' }), { status: 500 })
    }
}

export async function DELETE(request) {
    try {
        await connectDB()

        const { id } = Object.fromEntries(await request.formData())
        await Animal.findByIdAndDelete(id)
        console.log('Animal deleted from DB')
        return new Response(JSON.stringify({ message: 'Animal deleted successfully!' }), { status: 200 })

    } catch (e) {
        console.error('Error deleting animal:', e)
        return new Response(JSON.stringify({ error: 'Something went wrong!' }), { status: 500 })
    }
}
