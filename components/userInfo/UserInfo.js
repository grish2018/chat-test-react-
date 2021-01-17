import styles from './userInfo.module.scss'
import { currentUserSelector } from '../../store/modules/users/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getCurrentUser } from '../../store/modules/users/actions'
import { useRouter } from 'next/router'
import UserCard from '../userCard/UserCard'


export default function UserInfo({ children }) {
    const currentUser = useSelector(currentUserSelector);
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        if (router.query.userId) {
            dispatch(getCurrentUser(router.query.userId))
        }
    }, []);
    return (
        !currentUser.id ? (
            <div className={styles.userInfo}>
                <div className={styles.userInfo__header}></div>
            </div>
        ) : (
                <div className={styles.userInfo}>
                    <div className={styles.userInfo__header}>
                        <span className={styles.userInfo__name}>{currentUser.name}</span>
                        <span className={styles.userInfo__email}>{currentUser.email}</span>
                    </div>
                    <div className={styles.userInfo__content}>
                        <UserCard currentUser={currentUser} />
                        {children}
                    </div>
                </div>
            )
    )

}