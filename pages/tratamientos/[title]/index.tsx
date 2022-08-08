import Layout from "../../../components/Layout";

// interface Treatmen {
// }
interface Category {
    title: string;
    id: number;
    description: string;
    image: string;
    treatments: [];
}
export default function CategoryTreatments({ category }) {
    return (
        <Layout title={category.title}>
            <main>
                <h2>category titulo : {category.title}</h2>
                <div>
                    {category.treatments.map((treatment) => (
                        <div key={treatment.id}>{treatment.title}</div>
                    ))}
                </div>
            </main>
        </Layout>
    )
}
const data = require('../../../data.json')
export async function getStaticPaths() {
    const paths = data.categories.map((elem) => ({
        params: { title: elem.title },
    }))
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const title: string = context.params.title
    const category = data.categories.find((elem: Category) => elem.title == title)
    return {
        props: {
            category
        }
    }
};
