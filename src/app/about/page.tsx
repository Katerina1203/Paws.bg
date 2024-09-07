import Carousel from "@/components/carousel/Carousel";

const ServicesPage = () => {
	return (
		<div className="flex flex-col gap-[100px] p-[50px] lg:flex-row">
			<div className="flex-1 flex flex-col gap-12">
				<h1 className="text-6xl font-bold text-left">
					Осинови, не купувай.
				</h1>
				<p className="text-lg font-light">
				Paws е онлайн платформа, която улеснява процеса по осиновяване на животни. Ние свързваме хората,
				 които искат да предложат своите домашни любимци за осиновяване, с тези, които търсят ново попълнение
				  в семейството си. Целта ни е да намалим броя на бездомните животни и да насърчим отговорното осиновяване.
				</p>

				<div className="flex gap-5 items-center flex-col md:flex-row md:items-start">
					
					<div className="flex-1 rounded-[15px] p-[20px] shadow-md">
						<h2 className="text-xl font-semibold ">Защо да изберете осиновяване?</h2>
						<p className="text-sm">Осиновяването е хуманен и отговорен начин да помогнете на животни в нужда.</p>
					</div>
					<div className="flex-1 rounded-[15px] p-[20px] shadow-md">
						<h2 className="text-xl font-semibold ">Защо Paws?</h2>
						<p className="text-sm">Paws се стреми да улесни процеса на осиновяване.</p>
					</div>
					<div className="flex-1 rounded-[15px] p-[20px] shadow-md">
						<h2 className="text-xl font-semibold ">Присъединете се към общността</h2>
						<p className="text-sm">Paws ви свързва с хора, които споделят вашите ценности и любов към животните.</p>
					</div>
				</div>
			</div>
			<div className="flex-1 relative overflow-hidden rounded-[50px]">
				<Carousel/>
			</div>
		</div>
	);
};

export default ServicesPage;
