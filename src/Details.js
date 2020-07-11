import React, { useEffect, useState } from 'react'
import axios from 'axios'
import IninningItem from './IninningItem'
import './style.scss'
import { useHistory } from 'react-router';

const BASE_URL = 'http://gd2.mlb.com'

const Details = ({ location }) => {
    const [retrieved, setRetrieved] = useState([])
    const [inins, setInins] = useState([])
    const [batter, setBatter] = useState([])
    const thisHistory = useHistory()


    const goHome = () => {
       
          thisHistory.goBack();

    }
    useEffect(() => {
        (async () => {

            let loader = await axios.get(`${BASE_URL}/${location.details}/boxscore.json`)
            setRetrieved(items => items.concat(loader.data.data.boxscore))
            setInins(items => items.concat(loader.data.data.boxscore.linescore.inning_line_score))
            setBatter(items => items.concat(loader.data.data.boxscore.batting))

            console.log('GET ALL: ', loader.data.data)

        })()
        console.log('======', location.details)


    }, [])
    return (
        <div className='details'>
            <h3 style={{ marginTop: '50px', marginBottom: '50px' }} onClick={goHome.bind(this)}>Go back to games</h3>

            <div className='in-1'>
                <h3>Game linescore</h3>
                <div className='in-2'>
                    <div className='tags'>
                        <p>Ininning</p>
                        <p>Home</p>
                        <p>Away</p>
                    </div>
                    {
                        inins && inins.length ? (
                            inins.map((item, index) => {
                                return (<IninningItem
                                    inning={item.inning} home={item.home} away={item.away} />)

                            })
                        ) : <p>Loading</p>
                    }

                </div>
                <di className='in-3'>
                    <p>{location.home_team}</p>
                    <p>|</p>
                    <p>{location.away_team}</p>
                </di>
            </div>

            <h2>Batting</h2>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <div>
                    <h3>Home Batter name display</h3>
                    {
                        batter && batter[0] ? batter[0].batter.map((item, index) => {
                            return (
                                <p id={index}>{item.name_display_first_last}</p>
                            )
                        }) : null
                    }
                </div>
                <div>
                    <h3>Away Batter name display</h3>
                    {
                        batter && batter[1] ? batter[1].batter.map((item, index) => {
                            return (
                                <p id={index}>{item.name_display_first_last}</p>
                            )
                        }) : null
                    }
                </div>
            </div>
        </div>
    )
}
export default Details;