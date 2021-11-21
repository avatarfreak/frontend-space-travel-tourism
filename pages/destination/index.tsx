import { DestPage } from '@pages/DestPage';
import React from 'react'
import dataJSON from '../../data.json';


const Destination = () => {
   const data = dataJSON.destinations[0]

   return <DestPage data={data} />
}

export default Destination
