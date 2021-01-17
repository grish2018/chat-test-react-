import styles from './mainLayout.module.scss'
import Navigation from '../../components/navigation/Navigation'
import { useRouter } from 'next/router'

export function MainLayout({ children }) {
    const router = useRouter()
    return (
        <div className={styles.app}>
            <Navigation />
            <main>
                {children}
            </main>
        </div>
    )
}