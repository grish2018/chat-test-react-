import styles from './userCard.module.scss'

export default function UserCard({ currentUser }) {
    return (
        <div className={styles.userCard}>
            <div className={styles.userCard__item}>
                <div className={styles.userCard__itemTitle}>
                    <img src='/icons/adressIcon.svg' alt='Адрес' />
                    <span>Адрес</span>
                </div>
                <span className={styles.userCard__itemBody}>
                    {currentUser.address.city}, {currentUser.address.street}, {currentUser.address.suite}
                </span>
            </div>
            <div className={styles.userCard__item}>
                <div className={styles.userCard__itemTitle}>
                    <img src='/icons/phoneNuber.svg' alt='Телефон' />
                    <span>Телефон</span>
                </div>
                <span className={styles.userCard__itemBody}>
                    {currentUser.phone}
                </span>
            </div>
            <div className={styles.userCard__item}>
                <div className={styles.userCard__itemTitle}>
                    <img src='/icons/websiteIcon.svg' alt='Сайт' />
                    <span>Сайт</span>
                </div>
                <span className={styles.userCard__itemBody}>
                    {currentUser.website}
                </span>
            </div>
            <div className={styles.userCard__item}>
                <div className={styles.userCard__itemTitle}>
                    <img src='/icons/companyIcon.svg' alt='Название Компании' />
                    <span>Компания</span>
                </div>
                <span className={styles.userCard__itemBody}>
                    {currentUser.company.name}
                </span>
            </div>

        </div>
    )
}