import { MainLayout } from '../../layouts/mainLayout/MainLayout'
import styles from './posts.module.scss'
import UserInfo from '../../components/userInfo/UserInfo'
import PostItem from '../../components/postItem/PostItem'
import { wrapper } from '../../store';
import { getPosts, getUserPosts } from '../../store/modules/posts/actions'
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { isPostsFetchedSelector, postsSelector } from '../../store/modules/posts/selectors';
import Loading from '../../components/loading/Loading'
import { motion, AnimatePresence } from "framer-motion";

export default function Posts() {
    const posts = useSelector(postsSelector);
    const loading = useSelector(isPostsFetchedSelector)
    return (
        <MainLayout>
            {
                loading ? (
                    <AnimatePresence >
                        <motion.div
                            className={styles.posts}
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            < div className={styles.posts}>
                                <div className={styles.posts__listWrapper}>
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
                                < div className={styles.posts}>
                                    <div className={styles.posts__listWrapper}>
                                        <div className={styles.posts__list}>
                                            <span className={styles.posts__listHeader}>Посты</span>
                                            {posts.map(post => (
                                                <PostItem key={post.id} post={post}></PostItem>
                                            ))}
                                        </div>
                                    </div>
                                    <UserInfo />
                                </ div>
                            </motion.div>
                        </AnimatePresence>
                    )}
        </MainLayout >
    )
}


export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
    if (query.userId) {
        store.dispatch(getUserPosts(query.userId));
        store.dispatch(END);
        await store.sagaTask?.toPromise();
    } else {
        store.dispatch(getPosts());
        store.dispatch(END);
        await store.sagaTask?.toPromise();
    }

});