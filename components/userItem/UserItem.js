import styles from './userItem.module.scss'
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../store/modules/users/actions'
import { useRouter } from 'next/router'

export default function UserItem({ user }) {
    const dispatch = useDispatch()
    const router = useRouter()
    const toUser = (id) => {
        router.push({
            pathname: '/posts',
            query: { userId: id }
        })
    }

    return (
        <div className={styles.userItem}>
            <span className={styles.userItem__name} onClick={() => dispatch(getCurrentUser(user.id))}>{user.name}</span>
            <span className={styles.userItem__city}>{user.address.city}</span>
            <span className={styles.userItem__link} onClick={() => toUser(user.id)}>Смотреть посты</span>
        </div >
    )
}