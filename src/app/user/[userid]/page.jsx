import UserProfile from "@/components/userProfile/UserProfile";

export default function UserPage({ params }) {
    const { userid } = params;
    console.log(params);
    
    return <UserProfile userID={userid} />;
}
