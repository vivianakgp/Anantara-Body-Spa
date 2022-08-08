import Link from "../../node_modules/next/link";


interface Category {
    title: string;
    id: number;
    description: string;
    image: string;
    treatments: [];

}
export default function CardCategory({ category }) {

    return (
        <div>
            {
                category.map((elem: Category) => (
                    <div key={elem.id}>
                        <h1>{elem.title}</h1>
                        <Link href={`/categoria/${elem.title}`}>
                            <a>ver tratamientos</a>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}


