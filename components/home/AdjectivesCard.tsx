import styles from '../../styles/components/home/adjectivesCard.module.css'
import Image from 'next/image'

const AdjectivesCard = ({ adjectives }) => {
  return (
    <div className={styles.gridContainer}>
      {
        adjectives.map((adjective) => (
          <article key={adjective.title} className={styles.card}>
            <div className={styles.iconConteiner}>
              <Image
                src={adjective.icon}
                alt="example"
                width={50}
                height={50}
                layout='responsive' />
            </div>

            {/* <i className={adjective.icon}></i> */}
            <h3>{adjective.title}</h3>
            <p>{adjective.description}</p>
          </article>
        ))
      }


    </div>
  )
}

export default AdjectivesCard
