import { MainLayout } from '../layouts/mainLayout/MainLayout';
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Users() {
  const router = useRouter()
  useEffect(() => {
    router.push('/users')
  }, [])
  return (
    <MainLayout>
      index
    </MainLayout>
  )
}
