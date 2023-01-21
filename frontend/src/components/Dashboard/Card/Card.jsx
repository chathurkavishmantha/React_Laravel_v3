import React, { useState } from 'react'
import {motion,AnimateSharedLayout} from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Card/Card.css';
import {UilTimes} from '@iconscout/react-unicons';
import Chart from 'react-apexcharts'

const Card = (props) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {
        expanded?(
          // <ExpandedCard/>
          <ExpandedCard param ={props} setExpanded ={()=>setExpanded(false)}/>
        ):
        <CompactCard param ={props} setExpanded ={()=>setExpanded(true)}/>
      }
    </AnimateSharedLayout>
  )
}


function CompactCard ({param,setExpanded}){
  const Png = param.png;
  return(
    <motion.div className="CompactCard" layoutId='expandableCard' style={{background: param.color.backGround,boxShadow:param.color.boxShadow}} onClick={setExpanded}>
      <div className="radialBar">
        <CircularProgressbar
        value={param.barValue}
        text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png/>
        <span>${param.value}</span>
        <span>Last 24 Hours{param.value}</span>
      </div>
    </motion.div>
  )
}

function ExpandedCard({param, setExpanded}){
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto"
      },

      dropShadow:{
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 3.35,
      },

      fill:{
        colors: ["#fff"],
        type: "gradient",
      },

      dataLables:{
        enabled:false,
      },
      stroke:{
        curve: "smooth",
        colors: ["white"],
      },
      tooltop:{
        x:{
          format:"dd/mm/yy hh:mm",
        },
      },
      grid:{
        show:true,
      },
      // xaxis:{
      //   type:"datetime",
      //   categories:[
      //     "2012-09-19t00:00:00.00z",
      //     "2012-09-19t00:00:00.00z",
      //     "2012-09-19t00:00:00.00z",
      //     "2012-09-19t00:00:00.00z",
      //     "2012-09-19t00:00:00.00z",
      //   ],
      // },


    }
  }
  return(
    <motion.div className='ExpandedCard' layoutId='expandableCard' style={{background: param.color.backGround,boxShadow:param.color.boxShadow}}>
      <div style={{alignSelf:'flex-end', cursor:'pointer', color: 'white'}}>
        <UilTimes onClick={setExpanded}  />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type='area'options={data.options}/>
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  )
}
export default Card
