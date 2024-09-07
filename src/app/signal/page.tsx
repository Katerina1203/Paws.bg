import Signal from "@/components/Signal/Signal";
import { auth } from "@/auth";
import { getUser } from "@/lib/data";
import { redirect } from "next/navigation";
// const session = await auth();
// const dbUser = await getUser(session?.user.email)
const SignalPage = async () => {
	const session = await auth();
	if (!session || !session.user) {
        redirect("/verifyUser");
    }
	const dbUser = await getUser(session.user.email!);
	console.log("The user is **********************");
	
	console.log(dbUser);
	return (
		<Signal user={dbUser}/>
	);
};


export default SignalPage;
