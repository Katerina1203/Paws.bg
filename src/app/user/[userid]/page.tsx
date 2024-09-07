import UserProfile from "@/components/userProfile/UserProfile";

type Params = {
    params: {
        userid: string,
    },
}
export default function UserPage({ params }: Params) {
    const { userid } = params;
    
    return <UserProfile userID={userid} />;
}
