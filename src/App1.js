import React, { useState, useEffect } from 'react';
import axios from 'axios'
import GameItem from './GameItem'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

const BASE_URL = 'http://gd2.mlb.com'
const App1 = () => {

  const thisHistory = useHistory()

  const [fetched, setFetched] = useState([])
  const [selectedDate, setselectedDate] = useState([])

  let favourite = ['Blue Jays']
  let newFetched = []

  let returned = []


  useState(() => {


    // (async () => {

    //   try {
        
    //   } catch (error) {
        
    //   }

    //   let addData = await axios.get(`${BASE_URL}/components/game/mlb/year_2015/month_07/day_25/master_scoreboard.json`)

    //   returned = addData.data.data.games.game
    //   setFetched(items => items.concat(returned))

    //   newFetched = returned.filter(i => favourite.includes(i.home_team_name))
    //   setFetched(items => items.concat(newFetched))
    // })()




  }, [fetched, selectedDate])

  const onChange = async (date, dateString) => {

    let newDate = dateString.split('-')

    let addData = await axios.get(`https://baseline-cors.herokuapp.com/${BASE_URL}/components/game/mlb/year_${newDate[0]}/month_${newDate[1]}/day_${newDate[2]}/master_scoreboard.json`)
    setFetched(items => items.concat(addData.data.data.games.game))


  }

  return (
    <div className="App">

      <DatePicker onChange={onChange} />
{/* 
      {


        fetched && fetched.length ? (
          fetched.filter(i => i.home_team_name === favourite[0]) === undefined ? <p>No</p> : fetched.filter(i => i.home_team_name === favourite[0]).map((item, index) => {
            return (
              <GameItem
                id={index}
                home={item.home_team_name}
                away={item.away_team_name}
                homeTeamScore={item.linescore.r.home}
                awayTeamScore={item.linescore.r.away}
                status={item.status.status}
                handleClick={() => {
                  thisHistory.push({
                    pathname: '/details',
                    details: item.game_data_directory,
                    home_team: item.home_team_name,
                    away_team: item.away_team_name
                  })
                }} />
            )
          })
        ) : null
      } */}

      {
        fetched ? <> {
          fetched && fetched.length ? (
            fetched.map((item, index) => {
              // fetched.filter(i => i.home_team_name !== favourite[0]).map((item, index) => {
              return (
                <GameItem
                  home={!item ? 'No game today' : item.home_team_name}
                  away={!item ? "no game today" : item.away_team_name}
                  homeTeamScore={!item || !item.linescore ? <p>No game today</p> : item.linescore.r.home}
                  awayTeamScore={!item || !item.linescore ? <p>No game today</p> : item.linescore.r.away}
                  status={!item ? 'No game today' : item.status.status}
                  handleClick={() => {
                    thisHistory.push({
                      pathname: '/details',
                      details: item.game_data_directory,
                      home_team: !item ? '' : item.home_team_name,
                      away_team: !item ? '' : item.away_team_name
                    })
                  }} />
              )
            })
          ) : <p>Loading</p>
        }
        </> : <p>No Game</p>
      }



    </div>
  );
}

export default App1;
