import { TechPage } from '@pages/TechPage';
import React from 'react'
import dataJSON from "../../data.json";

// Data for technology
const data = dataJSON.technology[0];

const Technology = () => {

   return <TechPage data={data} />
}

export default Technology

