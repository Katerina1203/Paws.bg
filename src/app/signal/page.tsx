import Signal from "@/components/Signal/Signal";
import { auth } from "@/auth";
import { getUser } from "@/lib/data";
import { redirect } from "next/navigation";

const SignalPage = async () => {
	const session = await auth();
	if (!session || !session.user) {
        redirect("/verifyUser");
    }
	const dbUser = await getUser(session.user.email!);

	return (
		<Signal user={dbUser}/>
	);
};


export default SignalPage;
