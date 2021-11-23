import { TechPage } from "@pages/TechPage";
import { GetStaticPaths, GetStaticProps } from "next";
import dataJSON from "../../data.json";


const Technology = ({ data }) => {
   return <TechPage data={data} />
}

export default Technology

//Static Path
export const getStaticPaths: GetStaticPaths = async () => {
   const paths = dataJSON.technology.map(technology => ({
      params: {
         techId: technology.name.toLowerCase().replace(/\s/g, '-')
      }
   }));
   return { paths, fallback: false }
}

// Static Props
export const getStaticProps: GetStaticProps = async (context) => {
   const { techId } = context.params;
   const technology = dataJSON.technology.find(technology => technology.name.toLowerCase().replace(/\s/g, '-') === techId);

   if (!technology) return { notFound: true }

   return {
      props: {
         data: technology
      }
   }
}
