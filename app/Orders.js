'use client'
import styles from './Orders.module.css'
import useSWR from 'swr'
import Link from 'next/link'


export default function Orders() {
    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error, isLoading } = useSWR(`${process.env.adminApii}/getorders`, fetcher)
    return(
        <div className={styles.orders}>
            {data?.map((order, key) => {
                return <div key={order.orderId} className={styles.orderItem}>
                    <h5 className={styles.heading5}> {`Order ${order.orderId}`}</h5>
                    <p>
                        {order.customerName}<br/>
                        {order.deviceName}<br/>
                        {order.problemName}<br/>
                        {order.pointName}<br/>
                        {order.orderDate}
                    </p>
                    <div className={styles.section}>
                        <Link href={'tel'}>{order.customerPhone}</Link>
                        <button>{`Pay ${order.price}`}</button>
                    </div>
                </div>
            })}
        </div>
    )
}