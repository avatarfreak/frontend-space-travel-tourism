import { CrewPage } from "@pages/CrewPage";
import { slugify } from "components/utilities/slugify";
import { GetStaticPaths, GetStaticProps } from "next";
import dataJSON from "../../data.json";

interface Props {

}

const Crew = ({ data }) => {
   return <CrewPage data={data} />
}

export default Crew

//Static Path
export const getStaticPaths: GetStaticPaths = async () => {
   const paths = dataJSON.crew.map(crew => ({
      params: {
         crewId: slugify(crew.role.toString().toLowerCase())
      }
   }));
   return { paths, fallback: false }
}

// Static Props
export const getStaticProps: GetStaticProps = async (context) => {
   const { crewId } = context.params;
   const crew = dataJSON.crew.find(crew => slugify(crew.role.toString().toLowerCase()) === crewId);
   return {
      props: {
         data: crew
      }
   }
}
