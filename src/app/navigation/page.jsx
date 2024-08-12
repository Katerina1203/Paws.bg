"use client"
import Link from "next/link";
import UseRouter from "next/navigation";
const Navigate = () => {
    const router = UseRouter()
const handleClick=()=>{
    router.push("/")
}
    return (<div>
        <Link href="/" prefetch={false}> navigation</Link>

    </div>)
};

export default Navigate;