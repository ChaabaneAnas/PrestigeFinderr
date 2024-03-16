import PublisherCard from "../components/Publisher";
import Layout from "../components/Layout";

const Article = () => {
  return (
    <Layout>
      <div className="px-6 py-2 md:px-16 md:py-6">
        <div className=" w-3/5 max-w-34 flex gap-2 items-center mt-20 ">
          <span className="w-8 h-px bg-black"></span>
          <h1 className=""> See the Latest Stories </h1>
        </div>
        <PublisherCard />
      </div>
    </Layout>
  );
};

export default Article;
