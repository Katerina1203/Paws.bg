import Image from "next/image";

type Props = {}

export default function GallerySection({}: Props) {
  return (
    <section className="p-5 md:p-10">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2  p-6 rounded-lg shadow-md lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
            <Image src="/img/cat-and-dog.jpg" alt= "cat and dog" width={800} height={500} />
            <Image src="/img/dachshund.jpg" alt= "dachshund" width={800} height={500}/>
            <Image src="/img/family-with-dog.jpg" alt= "family with dog" width={300} height={700}/>
            <Image src="/img/girl-with-cat.jpg" alt= "girl with cat" width={300} height={700}/>
            <Image src="/img/girl-with-dog.jpg" alt= "girl with dog" width={300} height={700}/>
            <Image src="/img/kittens-in-a-box.jpg" alt= "kittens in a box" width={300} height={700}/>
            <Image src="/img/two-cats.jpg" alt= "two cats"  width={800} height={600}/>
            <Image src="/img/two-kittens.jpg" alt= "two kittens" width={800} height={500}/>
            <Image src="/img/two-dogs.jpg" alt= "two dogs" width={300} height={700}/>
        </div>
    </section>
  )
}