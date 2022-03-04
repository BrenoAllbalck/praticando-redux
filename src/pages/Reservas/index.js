import React from 'react';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleRemoveReserve, handleChangeAmount } from '../../store/modules/reserve/actions'

export default function Reservas() {

	const reservas = useSelector( state => state.reserve );
	const dispatch = useDispatch();

	function handleDelete(id){
		dispatch(handleRemoveReserve(id))
	}

	function tirarReserva(trip){
		dispatch(handleChangeAmount( trip.id, trip.amount -1 ))
	}

	function adicionarReserva(trip){
		dispatch(handleChangeAmount( trip.id, trip.amount +1 ))
	}



 return (
	<div className={styles.container}>
		<h1 className={styles.headText}>Voce Solicitou 1 reserva</h1>

		{reservas.map( inf =>(
		<div key={inf.id} className={styles.reservas}>
			<img
			src={inf.image}
			alt={inf.title}/>
			<strong>{inf.title}</strong>

			<div className={styles.AddBtn}>
				<button
				type='button'
				onClick={()=>tirarReserva(inf)}
				>
					<MdRemoveCircle size={25} color=""/>
				</button>
				<span>quantidade: { inf.amount }</span>
				<button
				type='button'
				onClick={()=>adicionarReserva(inf)}
				>
					<MdAddCircle size={25} color=""/>
				</button>
			</div>

			<button
			type='button'
			onClick={()=>handleDelete(inf.id)}
			>
				<MdDelete size={20} color='#ff'/>
			</button>
		</div>
		) )}


		<footer className={styles.footer}>
			<button type='button' onCLick={()=>{}}>
				<span>solicitar reserva</span>
			</button>
		</footer>

	</div>
 );
}