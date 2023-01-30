import Link from "../../node_modules/next/link";
import Image from 'next/image'
import styles from "../../styles/components/home/CardCategory.module.css"

interface Category {
    title: string;
    id: number;
    description: string;
    image: string;
    treatments: [];

}

export default function CardCategory({ category }) {

    return (
        <div style={{ margin: "auto", paddingTop: "40px" }}>
            {
                category.map((elem: Category) => (
                    <div key={elem.id} className={styles.card}>
                        <div className={styles.imgContainer}>
                            <Image
                                src={elem.image}
                                alt="Logotipo"
                                width={2000}
                                height={2000}
                                layout='responsive'
                            />
                            <h3>{elem.title}</h3>
                        </div>
                        <div className={styles.content}>
                            <p>{elem.description}</p>
                            <Link href={`/tratamientos/${elem.title}`}>
                                <a className={styles.contentBtn}>Ver Todos</a>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


