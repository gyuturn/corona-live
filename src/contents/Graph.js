import React from 'react'
import { useEffect, useState } from 'react'
import useDidMountEffect from "./useDidMountEffect";

const Graph = () => {
    const [today,setToday]=useState([{Confirmed: 1}]);
    const [weekConfiremd,setWeekConfiremd]=useState([
        {todayComfirmed:1,date:1},{todayComfirmed:1,date:1},{todayComfirmed:1,date:1},{todayComfirmed:1,date:1},{todayComfirmed:1,date:1},{todayComfirmed:1,date:1},{todayComfirmed:1,date:1},{todayComfirmed:1,date:1}]);
    console.log(weekConfiremd);
    
 
    
       
    useEffect(()=>{
        const fetchEvent = () =>{
            fetch("https://api.covid19api.com/total/dayone/country/kr")
            .then(res=>res.json())
            .then(data=>setToday(data));

            
            
            
        }
        fetchEvent();   
    },[])

    //첫 렌더링 막기
    useDidMountEffect(()=>{
        const setWeek = () =>{
            var week=[];
            for(let i=today.length-2;i>today.length-10;i--){
            const todayComfirmed=today[i].Confirmed-today[i-1].Confirmed;
            const date=today[i].Date;
            week.push({todayComfirmed,date});
            }
            setWeekConfiremd(week);
        }
        setWeek();
    },[today])

    return(
      <div id="todaystatic">
          <div id="todayConfirmed">
            <span>오늘 확진자수</span>
            <div id="todaynumber">{weekConfiremd[0].todayComfirmed}명</div>
          </div>
          <div id="comparelist">
          <div class="compare">
            <span>vs 어제</span>
            <span class="comparenumber">{weekConfiremd[0].todayComfirmed-weekConfiremd[1].todayComfirmed}↑</span>
          </div>
          <div class="compare">
            <span>vs 1주일전</span>
            <span class="comparenumber">{weekConfiremd[0].todayComfirmed-weekConfiremd[7].todayComfirmed}↑</span>
          </div>
          </div>
      </div>
    )
}

export default Graph