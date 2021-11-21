import { CrewPage } from '@pages/CrewPage'
import React from 'react'
import dataJSON from "../../data.json";


const Crew = () => {
   const data = dataJSON.crew[0];

   return <CrewPage data={data} />
}

export default Crew

