import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { DestIProps, DestPage } from '@pages/DestPage';
import dataJSON from '../../data.json';


const Destination: React.FC<DestIProps> = ({ data }) => {

   return <DestPage data={data} />
}

export default Destination

// Static Path
export const getStaticPaths: GetStaticPaths = async () => {
   const paths = dataJSON.destinations.map(destination => ({
      params: {
         destId: destination.name.toString().toLowerCase()
      }
   }))
   return { paths, fallback: false }
}


// Static Props
export const getStaticProps: GetStaticProps = async (context) => {
   const { destId } = context.params;

   const destination = dataJSON.destinations.find(destination => destination.name.toString().toLowerCase() === destId);
   if (!destination) return { notFound: true }

   return {
      props: {
         data: destination
      }
   }
}
