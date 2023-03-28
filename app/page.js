'use client'
import Link from 'next/link'
import styles from './Home.module.css'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'


export default function Home() {

    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error, isLoading } = useSWR(`${process.env.adminApii}/getorders`, fetcher)
    const completeOrder = async(url, { arg }) => {
        const options = {
            method : 'POST',
            body : JSON.stringify(arg)
        }
        return fetch(url, options).then(res => {
            if(!res.ok) throw Error('Error Bad Response')
        })
    }
    const { trigger, isMutating } = useSWRMutation(`${process.env.adminApii}/completeorder`, completeOrder)

    function sweetenDate( date ) {
        const arr = date.split('T')
        const dateArr = arr[0].split('-')
        const timeArr = arr[1].split(':')
        const time = timeArr[0]>12 ? timeArr[0]-12 : timeArr[0]
        const pos = timeArr[0]>12 ? 'PM' : 'AM'
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul", "Aug", "Sep", "Oct", "Nov","Dec"]
        return `${time}:${timeArr[1]} ${pos}, ${dateArr[2]} ${monthNames[parseInt(dateArr[1])-1]}`
    }

    
    return(
        <div className={styles.dashboard}>
            <h3 className={styles.heading}>Orders</h3>
            <div className={styles.ordersSection}>
                {data?.map((order, key) => {
                    return(
                        <div className={styles.orderCard} key={key}>
                            <h6 className={styles.orderHeading}>{`#${order.deviceName} - ${order.problemName} (${order.price})`}</h6>
                            <p className={styles.details}>
                                {`Name: ${order.customerName}`}<br/>
                                {`Date: ${sweetenDate(order.orderDate)}`}<br/>
                                {`Pickup: ${order.pointName}`}
                            </p>
                            <div className={styles.buttonsSection}>
                                <Link className={styles.phoneLink} href={`https://api.whatsapp.com/send/?phone=91${order.customerPhone}`} target={'_blank'}>{order.customerPhone}</Link>
                                <button className={styles.completeOrderButton} onClick={() => {
                                    const body = {
                                        "orderId" : order.orderId
                                    }
                                    trigger(body)
                                }}>Complete Order</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}