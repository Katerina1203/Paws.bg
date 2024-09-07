import Image from "next/image"
import { Button } from "../ui/button"

type Props = {}

export default function InfoSection({ }: Props) {
    return (
        <section className="block min-h-screen max-w-full">
        <h2 className="text-4xl font-bold text-center mb-10">Какво предлагаме</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-16 p-5">
            <div className="flex flex-col rounded-[15px] p-[20px] shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="flex justify-center">
                    <Image src={"/medicine.svg"} width={80} height={80} alt="" className="filter invert-[0%]" />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-center">Медицинска грижа</h3>
                <p className="text-center">
                    Помагаме за осигуряването на медицинска грижа за животни в нужда, включително ваксинации и профилактика.
                </p>
                <Button className="mx-auto mt-4" variant={"secondary"}>Научи повече</Button>
            </div>
            <div className="flex flex-col rounded-[15px] p-[20px] shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="flex justify-center">
                    <Image src={"/heart-rate.svg"} width={80} height={80} alt="" />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-center">Предимства на осиновяването</h3>
                <p className="text-center">
                    Осинови, не купувай! Дай нов живот на животно в нужда, като осигуриш грижа и любов.
                </p>
                <Button className="mx-auto mt-4" variant={"secondary"}>Научи повече</Button>
            </div>
            <div className="flex flex-col rounded-[15px] p-[20px] shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="flex justify-center">
                    <Image src={"/injection.svg"} width={80} height={80} alt="" />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-center">Здраве и щастие</h3>
                <p className="text-center">
                    Домашните любимци са доказано полезни за физическото и психическо здраве на хората, подобрявайки настроението и намалявайки стреса.
                </p>
                <Button className="mx-auto mt-4" variant={"secondary"}>Научи повече</Button>
            </div>
            <div className="flex flex-col rounded-[15px] p-[20px] shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="flex justify-center">
                    <Image src={"/pet-grooming.svg"} width={80} height={80} alt="" />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-center">Грижа и поддръжка</h3>
                <p className="text-center">
                    Информация и съвети за поддържане на отлична хигиена и външен вид на любимеца, за да изглежда и се чувства добре.
                </p>
                <Button className="mx-auto mt-4" variant={"secondary"}>Научи повече</Button>
            </div>
            <div className="flex flex-col rounded-[15px] p-[20px] shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="flex justify-center">
                    <Image src={"/pet-food-bag.svg"} width={80} height={80} alt="" />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-center">Хранене и препоръки</h3>
                <p className="text-center">
                    Достъп до специализирани съвети за правилно и здравословно хранене на любимците, за да са винаги енергични и здрави.
                </p>
                <Button className="mx-auto mt-4" variant={"secondary"}>Научи повече</Button>
            </div>
            <div className="flex flex-col rounded-[15px] p-[20px] shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="flex justify-center">
                    <Image src={"/pet-toy.svg"} width={80} height={80} alt="" />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-center">Играчки и забавление</h3>
                <p className="text-center">
                    Осигурете радост и забавление за вашия домашен любимец с препоръки за подходящи играчки и аксесоари.
                </p>
                <Button className="mx-auto mt-4" variant={"secondary"}>Научи повече</Button>
            </div>
        </div>
    </section>
    
    )
}