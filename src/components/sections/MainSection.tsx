import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {}

export default function MainSection({ }: Props) {
    return (
       <section className="flex h-screen flex-wrap flex-col md:flex-row justify-center items-center">
    <div className="flex-1 mx-4 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-medium mb-2">Осинови, не купувай.</h1>
        <p>Всяка година хиляди животни остават без дом и чакат своето ново семейство. Осиновяването не
             само спасява живота на тези животни, но и осигурява щастие на хората, които решават да дадат дом на 
             животно в нужда. Тези създания заслужават грижа, любов и подкрепа. Осинови, за да промениш тяхната съдба 
             и да внесеш радост и смисъл в собствения си живот. Дай втори шанс на животно в беда и създай незабравима връзка за цял живот. Намери своя нов приятел днес , присъедини се към общността!</p>

        <div className="flex gap-6 py-6">
            <Button variant={"secondary"}>Научи повече</Button>
            <Button>Свържи се с нас!</Button>
        </div>
    </div>
    <div className="m-10 h-150 w-150 relative overflow-hidden rounded-lg flex-1 flex justify-center items-center border-4 border-white">
        <Image src="/img/two-kittens.jpg" alt="two kittens in a box" width={800} height={500}/>
    </div>
</section>

    )
}