
import { getUserById, getAnimalsByUserId, getUser } from "@/lib/data";
import Image from "next/image";
import { handleLogout } from '@/lib/actions';
import { auth } from "@/auth";
import AnimalCard from "../animalCard/AnimalCard";

import { LogOut, Settings } from "lucide-react"
import PrivateChatButton from "../PrivateChatButton/PrivateChatButton";
import CreateAnimalBtn from "../createAnimal/CreateAnimalBtn";
import { redirect } from "next/navigation";

type Props = {
    userID?: string;
}

export default async function UserProfile({ userID }: Props) {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
        redirect("/verifyUser");
    }

    const currentUser = await getUser(session.user.email);

    if (!userID || userID === undefined) {
        console.error("User ID is required");
        redirect("/");
    }
    const wantedUser = await getUserById(userID);

    if (!wantedUser) {
        console.error("User not found");
        return null;
    }

    const animals = await getAnimalsByUserId(wantedUser._id.toString());

    return (
        <div className="flex flex-col items-center p-5 min-h-full">
            <div className="p-5 rounded-lg border bg-card text-card-foreground shadow-sm text-center max-w-[300px] w-full mb-10 flex flex-col items-center">
                <div>
                    <Image
                        src={wantedUser.img || "/img/noPhoto.png"}
                        alt={`${wantedUser.username}'s profile`}
                        className="w-28 h-28 rounded-full object-cover border"
                        width={200}
                        height={200}
                    />
                </div>
                <h1 className="text-2xl text-primary mb-3">{wantedUser.username}</h1>
                <p className="text-lg mb-3">{wantedUser.email}</p>

                <div className="flex justify-between item-center gap-3 mb-5 w-1/2">

                    <div className="w-28 h-28 flex items-center cursor-pointer">
                        <Settings className="h-8 w-8 text-base leading-none hover:bg-[#f0f0f0] hover:rounded-[5px]" />
                    </div>

                    <PrivateChatButton currentUserId={currentUser._id} wantedUserId={wantedUser._id} />

                    <form action={handleLogout} className="w-28 h-28 flex items-center">
                        <button className="h-[30px] w-[30px] text-[1rem] leading-[1]" type="submit">
                            <LogOut className="h-[30px] w-[30px] text-[1rem] leading-[1] hover:bg-[#f0f0f0] hover:rounded-[5px]" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-5 max-w-screen-lg w-full md:grid-cols-2 lg:grid-cols-3">
                {animals.map((animal) => (
                    <div key={animal._id} className="bg-card rounded-sm p-3 text-center shadow-md">
                        <AnimalCard animal={animal} />
                        <p className="text-lg mt-3">{animal.description}</p>
                    </div>
                ))}
            </div>
            <CreateAnimalBtn />
        </div>
    );
}

