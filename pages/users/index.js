import { MainLayout } from '../../layouts/mainLayout/MainLayout';
import styles from './users.module.scss'
import UserItem from '../../components/userItem/UserItem'
import UserInfo from '../../components/userInfo/UserInfo'
import { wrapper } from '../../store';
import { getUsers } from '../../store/modules/users/actions'
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { isUsersFetchedSelector, usersSelector, currentUserSelector } from '../../store/modules/users/selectors';
import { useRouter } from 'next/router'
import Loading from '../../components/loading/Loading'
import { motion, AnimatePresence } from "framer-motion";

export default function Users() {
    const users = useSelector(usersSelector);
    const loading = useSelector(isUsersFetchedSelector)
    const currentUser = useSelector(currentUserSelector)
    const router = useRouter()

    const toUser = (id) => {
        router.push({
            pathname: '/posts',
            query: { userId: id }
        })
    }
    return (
        <MainLayout>
            {
                loading ? (
                    <AnimatePresence >
                        <motion.div
                            className={styles.users}
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <div className={styles.users}>
                                <div className={styles.users__listWrapper}>
                                    <Loading />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                ) : (
                        <AnimatePresence >
                            <motion.div
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}>
                                <div className={styles.users}>
                                    <div className={styles.users__listWrapper}>
                                        <div className={styles.users__list}>
                                            <span className={styles.users__listHeader}>Пользователи</span>
                                            {users.map(user => (
                                                <UserItem key={user.id} user={user} />
                                            ))}
                                        </div>
                                    </div>
                                    <UserInfo>
                                        <button onClick={() => toUser(currentUser.id)}><img src='/icons/postsIcon.svg' alt='next' /> <span>Смотреть посты</span></button>
                                    </UserInfo>
                                </div>
                            </motion.div>
                        </AnimatePresence >
                    )
            }
        </MainLayout >
    )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    store.dispatch(getUsers());
    store.dispatch(END);
    await store.sagaTask?.toPromise();
});
