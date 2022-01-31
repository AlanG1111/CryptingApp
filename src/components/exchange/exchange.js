import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, changeData, hideInputWithoutChanging} from '../../store/action';
import './exchange.css'

const Exchange = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)

    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        dispatch(fetchData())
    }, [])
    

    const toggleInput = (id ) => {
        const el = document.getElementById(id);
        if (el.style.display === "block") {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }
    }

    const hideInput = id => {
        dispatch(hideInputWithoutChanging(id,inputValue))
        toggleInput(id)
    }


    const saveInput = (id) => {
        dispatch(changeData(id,inputValue))
        toggleInput(id)
    }


    return (
        <>
            {data?.map((obj) => {
                // console.log("obj", obj)
              return  ( 
                <div className='exchange' key={obj.id}>
                    <ul>
                        <li className='exchange-id' onClick={() => toggleInput(obj.id)}>
                                <span>{obj.exchange_id}</span></li>
                        <div id={obj.id} className='hidden'>
                            <input type='text' defaultValue={obj.exchange_id}  onChange={(e) => {
                                setInputValue(e.target.value) }}/>
                            <button onClick={() => saveInput(obj.id)}>Save</button><button onClick={() => hideInput(obj.id)}>Close</button>
                        </div>
                        <li><span>{obj.name}</span></li>
                        <li><span>{obj.website}</span></li>
                        <li><span>{obj.volume_24h}</span></li>
                    </ul> 
                </div>)
            })
            }
        </>
    )
}


export default Exchange;
