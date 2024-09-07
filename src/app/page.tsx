import MainSection from "@/components/sections/MainSection";
import InfoSection from "@/components/sections/InfoSection";
import GallerySection from "@/components/sections/GallerySection";
export default function Home() {
	return (
		<main className="flex min-h-screen max-w-full flex-col justify-center">
			<MainSection/>
			<InfoSection/>
			<GallerySection/>
		</main>
	);
}