import styles from './Home.module.css'
import Image from 'next/image'
import LoginForm from './LoginForm'
import Orders from './Orders'


export default function Home() {
  return (
    <div className={styles.hero}>
        <div className={styles.navbar}>
            <Image className={styles.logo} alt={''} src={'./mizy.svg'} width={50} height={50} />
            {'MIZY ADMIN'}
        </div>
        <div className={styles.loginSection} id={'logi'}>
            <h3 className={styles.heading}>Login</h3>
            <LoginForm />
        </div>
        <div className={styles.orderSection} id={'oda'}>
            <h3 className={styles.heading}>Orders</h3>
            <Orders />
        </div>
    </div>
  )
}
