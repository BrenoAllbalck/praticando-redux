import Link from 'next/link'
import styles from './style.module.css'
import logo from '../../../public/Images/logo.svg'
import Image from 'next/image'
import { useSelector } from 'react-redux';

export default function Header(){

	const reserveSize = useSelector( inf => inf.reserve.length  )

	return(
		<header className={styles.container}>
			<Link className={styles.imageLogo} href={'/'}>
				<Image src={logo} width={110} height={110} alt="logo"/>
			</Link>

			<Link href={'/Reservas'}>

			<div className={styles.reserva} >
				<strong>
					Minha reservas
				</strong>
				<span>
					reservas: { reserveSize }
				</span>
			</div>
				
			</Link>
		</header>
	)
}