import Link from "next/link";

const Loading = () => {
    return (  
    <div>  
        <h2>
            Not Found !
            </h2>
			<p>Страницата , която се опитвате да намерите не съществува.</p>
			<Link href='/organisations'>Към начална страница</Link>
			
            </div>
    )
  };
  
  export default Loading;