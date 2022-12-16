import styles from '../../styles/components/home/adjectivesCard.module.css'

const AdjectivesCard = ({ adjectives }) => {
  return (
    <div className={styles.gridContainer}>
      {
        adjectives.map((adjective) => (
          <article key={adjective.title} className={styles.card}>
            <i className={adjective.icon}></i>
            <h2>{adjective.title}</h2>
            <p>{adjective.description}</p>
          </article>
        ))
      }


    </div>
  )
}

export default AdjectivesCard
