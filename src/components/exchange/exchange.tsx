import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, changeData, hideInputWithoutChanging} from '../../store/action';
import { IData, InitialStateType } from '../../store/reducer';
import './exchange.css'


const Exchange: React.FC = () => {
    const dispatch = useDispatch()
    const data: IData | unknown | any = useSelector<InitialStateType>((state: InitialStateType) => state.data)
    const [inputValue, setInputValue] = useState<string>("")

    console.log("data", data)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const toggleInput = (id: number): void => {
        const el: HTMLElement | null = document.getElementById(`${id}`);
        
        if (el!.style.display === "block") {
            el!.style.display = "none";
        } else {
            el!.style.display = "block";
        }

        if (el === null) {
            return
        }
    }

    const hideInput = (id: number): void => {
        dispatch(hideInputWithoutChanging(id,inputValue))
        toggleInput(id)
    }

    const saveInput = (id: number): void => {
        dispatch(changeData(id,inputValue))
        toggleInput(id)
    }

    return (
        <>
            {typeof data !== null ? data?.map((obj: IData) => {
                return  ( 
                    <div className='exchange' key={obj.id}>
                        <ul>
                            <li className='exchange-id' onClick={() => toggleInput(obj.id)}>
                                    <span>{obj.exchange_id}</span></li>
                            <div id={`${obj.id}`} className='hidden'>
                                <input type='text' defaultValue={obj.exchange_id}  onChange={(e) => {
                                    setInputValue(e.target.value) }}/>
                                <button onClick={() => saveInput(obj.id)}>Save</button>
                                <button onClick={() => hideInput(obj.id)}>Close</button>
                            </div>
                            <li><span>{obj.name}</span></li>
                            <li><span>{obj.website}</span></li>
                            <li><span>{obj.volume_24h}</span></li>
                        </ul> 
                    </div>)
                })
                : null
            }
        </>
    )
}

export default Exchange;
