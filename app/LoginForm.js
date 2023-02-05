'use client'
import styles from './LoginForm.module.css'
import useSWRMutation from 'swr/mutation'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { HiChevronRight } from 'react-icons/hi2';
import { AiOutlineLoading } from 'react-icons/ai'


export default function LoginForm() {

    const [validation, setValidation] = useState(false)


    const login = async(url, { arg }) => {
        const options = {
            method : 'POST',
            body : JSON.stringify(arg)
        }
        return fetch(url, options).then(res => {
            if(!res.ok) throw Error(res.status, res.body)
            document.getElementById('logi').style.display = 'none'
            document.getElementById('oda').style.display = "unset"
        })
    }
    const { trigger, isMutating } = useSWRMutation(`${process.env.adminApii}/adminlogin`, login)


    const validate = () => {
        const uid = loginForm.uid.value
        const pass = loginForm.pass.value
        const isUidValid = /^[A-Za-z0-9]*$/.test(uid)
        document.getElementById('uidField').style.boxShadow = isUidValid? 'var(--drop-mini)' : '1px 1px 40px #ffa3a3'
        const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass)
        document.getElementById('passField').style.boxShadow = isPassValid ? 'var(--drop-mini)' : '1px 1px 40px #ffa3a3'
        setValidation(isUidValid && isPassValid)
    }


    return(
        <div>
            <form id={'loginForm'} onChange={() => validate()} onSubmit={(e) => {
                e.preventDefault()
                const body = {
                    'userId' : e.target.uid.value,
                    'password' : e.target.pass.value,
                }
                trigger(body)
                }}>
                <div className={styles.field}>
                    <label className={styles.fieldName}>User Id</label>
                    <input className={styles.fieldInput} id={'uidField'} name={'uid'} type={'text'} placeholder={'User Id'} />
                </div>
                <div className={styles.field}>
                    <label className={styles.fieldName}>Password</label>
                    <input className={styles.fieldInput} id={'passField'} name={'pass'} type={'password'} placeholder={'Password'} />
                </div>
            </form>
            <button className={styles.nextButton} form={'loginForm'} type={'submit'}>
                {isMutating? <AiOutlineLoading className={styles.loading} /> : <HiChevronRight className={styles.nextButtonIcon} />}
            </button>
        </div>
    )
}