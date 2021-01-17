import styles from './commentItem.module.scss'

export default function CommentItem({ comment }) {

    return (
        < div className={styles.commentItem} >
            <span className={styles.commentItem__name}>{comment.name}</span>
            <span className={styles.commentItem__body}>{comment.body}</span>
        </div >
    )
}