import { connectDB } from '@/lib/utils'
import { User } from '@/lib/models' 


export async function DELETE(request) {
    try {
        await connectDB()

        const { id } = Object.fromEntries(await request.formData())
        await User.findByIdAndDelete(id)
        console.log('User deleted from DB')
        return new Response(JSON.stringify({ message: 'User deleted successfully!' }), { status: 200 })

    } catch (e) {
        console.error('Error deleting user:', e)
        return new Response(JSON.stringify({ error: 'Something went wrong!' }), { status: 500 })
    }
}
