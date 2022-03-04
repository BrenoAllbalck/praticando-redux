
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import api from './api/index'
import { MdFlightTakeoff } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { hndleAdd } from '../store/modules/reserve/actions';

export default function Home() {

  const [trips, setTrips] = useState([])
  const dispatch = useDispatch();

  useEffect(()=>{
    async function loadData(){
      const response = await api.get('trips')
      setTrips(response.data)
    }
    loadData()
  },[])

  function handleDispatch(trips){
    dispatch(hndleAdd(trips))
  }
 

  return (
    <div className={styles.container}>
      <div className={styles.box}>
      {
        trips.map( trips =>(
          <li key={trips.id}>
            <img src={trips.image}/>
            <strong>{trips.title}</strong>

            <span>STATUS: { trips.status ? "Disponivel" : "Indisponivel" } </span>

            <button
            onClick={()=>handleDispatch(trips)}
            type='button'
            >
              <div>
                <MdFlightTakeoff color='#fff' size={25}/>
                <span>Solicitar reserva</span>
              </div>
            </button>
          </li>
        ) )
      }
      </div>
    </div>
  )
}
