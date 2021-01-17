import react, { useState } from 'react';
import styles from './postItem.module.scss'
import { getPostComments } from '../../store/modules/posts/actions'
import { useDispatch, useSelector } from 'react-redux';
import CommentItem from '../commentItem/CommentItem'
import { isCommentsFetchedSelector } from '../../store/modules/posts/selectors'
import Loading from '../loading/Loading'
import { motion, AnimatePresence } from "framer-motion";

export default function PostItem({ post }) {
    const [expanded, setExpanded] = useState(false)
    const dispatch = useDispatch()
    const isCommentsFetched = useSelector(isCommentsFetchedSelector)

    const getComments = () => {
        setExpanded(!expanded)
        dispatch(getPostComments(post.id))
    }

    return (
        <div className={styles.postItem}>
            <div className={styles.postItem__header}>
                <span className={styles.postItem__title}>{post.title}</span>
            </div>
            <div className={styles.postItem__content}>
                <span className={styles.postItem__body}>{post.body}</span>
                <span className={styles.postItem__showComments} onClick={getComments}>{!expanded ? 'Открыть комментарии' : 'Скрыть комментарии'}</span>
            </div>
            {
                expanded && (
                    isCommentsFetched ? (
                        <AnimatePresence >
                            <motion.div
                                transition={{ duration: 1 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}>
                                <div className={styles.postItem__comments}>
                                    <Loading />
                                </div>
                            </motion.div >
                        </AnimatePresence >
                    ) : (
                            <AnimatePresence>
                                <motion.div
                                    transition={{ duration: 1 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}>
                                    < div className={styles.postItem__comments}>
                                        {post.comments?.map(comment => (
                                            <CommentItem key={comment.id} comment={comment} />
                                        ))}
                                    </div>
                                </motion.div >
                            </AnimatePresence >
                        )
                )
            }

        </div >
    )
}