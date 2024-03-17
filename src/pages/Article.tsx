import PublisherCard from "../components/Publisher";
import Layout from "../components/Layout";

const Article = () => {
  return (
    <Layout>
      <div className="px-6 py-2 md:px-16 md:py-6">
        <div className=" w-3/5 max-w-34 flex gap-2 items-center mt-20 mb-4 md:mb-8">
          <span className="w-8 h-px bg-black"></span>
          <h1 className=""> See the Latest Stories </h1>
        </div>
        <PublisherCard className="mb-6" />
        <h1 className="uppercase font-light text-3xl tracking-wide	">
          the Deepsea Challenge
        </h1>
        <button className="btn"> WATCH</button>
      </div>
    </Layout>
  );
};

export default Article;
