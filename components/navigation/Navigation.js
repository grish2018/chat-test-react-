import styles from './navigation.module.scss'
import ActiveLink from '../activeLink/ActiveLink'

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <ActiveLink activeClassName={styles.active} href='/users'>
                <a className={styles.navigation__item}>Пользователи</a>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href='/posts'>
                <a className={styles.navigation__item}>Посты</a>
            </ActiveLink>
        </div>
    )
}