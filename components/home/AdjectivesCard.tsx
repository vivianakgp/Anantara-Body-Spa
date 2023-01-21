import styles from '../../styles/components/home/adjectivesCard.module.css'

const AdjectivesCard = ({ adjectives }) => {
  return (
    <div className={styles.gridContainer}>
      {
        adjectives.map((adjective) => (
          <article key={adjective.title} className={styles.card}>
            <div className={styles.key1}></div>
            <div className={styles.key2}></div>
            <i className={adjective.icon}></i>
            <h3>{adjective.title}</h3>
            <p>{adjective.description}</p>
          </article>
        ))
      }


    </div>
  )
}

export default AdjectivesCard
