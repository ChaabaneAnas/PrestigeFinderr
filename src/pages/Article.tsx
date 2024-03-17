import PublisherCard from "../components/Publisher";
import Layout from "../components/Layout";

import articleMd1 from "../assets/images/articleMd1.png";
import article1 from "../assets/images/Article1.png";
import articleMd2 from "../assets/images/ArticleMd2.png";
import article2 from "../assets/images/article2.png";
import articleMd3 from "../assets/images/ArticleMd3.png";
import article3 from "../assets/images/article3.png";
import articleMd4 from "../assets/images/ArticleMd4.png";
import article4 from "../assets/images/article4.png";
import articleMd5 from "../assets/images/articleMd5.png";
import article5 from "../assets/images/article5.png";
import quoteMarks from "../assets/images/quoteMarks.png";

const Article = () => {
  return (
    <Layout>
      <div className="px-6 py-2 md:px-16 md:py-6">
        <div className=" w-3/5 max-w-34 flex gap-2 items-center mt-20 mb-4 md:mb-8">
          <span className="w-8 h-px bg-black"></span>
          <h1 className=""> See the Latest Stories </h1>
        </div>
        <PublisherCard className="mb-6" />
        <h1 className="uppercase font-light text-3xl tracking-wide mb-4	">
          the Deepsea Challenge
        </h1>
        <button className="bg-white border border-black rounded-full text-sm font-light px-3 py-1 mb-12">
          {" "}
          WATCH
        </button>
        <div>
          <div className="w-full mb-8 ">
            <img
              className="w-full h-auto hidden md:block"
              src={articleMd1}
              alt=""
            />
            <img
              className="w-full h-auto block  md:hidden"
              src={article1}
              alt=""
            />
          </div>
          <h2 className="uppercase mb-3 text-2xl">
            Rolex Sizing Guide: Find The Right Size For Your Wrist
          </h2>
          <p className="mb-12 text-sm font-light">
            There are a lot of factors that people consider when buying a watch
            – the dial, the hands, the type of bracelet, the style of the bezel.
            However, one thing that often tends to be an afterthought is the
            size of the watch itself, and this is arguably one of the most
            important things to consider when shopping for a Rolex watch.
            Despite the familiar, iconic aesthetic enduring from one generation
            of watches to the next, Rolex has made minor revisions and
            enhancements to the cases over the years, so even two models with
            the same case diameter may wear differently on the wrist.
          </p>
          <div className="w-full mb-8 ">
            <img
              className="w-full h-auto hidden md:block"
              src={articleMd2}
              alt=""
            />
            <img
              className="w-full h-auto block  md:hidden"
              src={article2}
              alt=""
            />
          </div>
          <p className="mb-4 text-sm font-light">
            Just like clothes, it is important that your watch fits you
            correctly. This doesn’t just mean that the strap or bracelet needs
            to fit around your wrist; the actual size of the watch itself can
            have a significant impact on the overall wearing experience.
            Although personal preference will always be paramount, finding the
            right size watch for your wrist will go a long way towards
            guaranteeing a happy ownership experience. SHOP ROLEX COLLECTION
          </p>
          <a className="text-sm mb-8" href="">
            SHOP ROLEX COLLECTION
          </a>
          <div className="w-full mb-8 ">
            <img
              className="w-full h-auto hidden md:block"
              src={articleMd3}
              alt=""
            />
            <img
              className="w-full h-auto block  md:hidden"
              src={article3}
              alt=""
            />
          </div>
          <h2 className="uppercase mb-3 text-2xl">
            How To Size Your Rolex Correctly
          </h2>
          <p className="mb-8 text-sm font-light">
            When finding the right size Rolex for your wrist, there are many
            important measurements and proportions to consider other than the
            actual case size of the watch itself. Two watches with identical
            case diameters can wear significantly different should they have
            different thickness or lug-to-lug measurements. Additionally,
            various protrusions from the case such as winding crowns,
            chronograph pushers, lugs, and crown-guards can also drastically
            alter the overall wearing experience and should be taken into
            account whenever you are purchasing a new watch. Similarly, in
            addition to the strap or bracelet fitting properly around your
            wrist, the width of the strap can also have a significant impact on
            the overall wearing appearance. Furthermore, the amount of taper in
            the strap or bracelet is also highly important. A bracelet with a
            steep taper will wear quite a bit smaller than one that maintains
            the same width the entire way across. At the end of the day, the
            absolute best way to find the right watch for your wrist is to try
            them on in person, but keeping these factors in mind will
            significantly help narrow down your search.
          </p>
          <div className="w-full my-4 ">
            <img
              className="w-full h-auto hidden md:block"
              src={articleMd4}
              alt=""
            />
            <img
              className="w-full h-auto block  md:hidden"
              src={article4}
              alt=""
            />
          </div>
          <h2 className="uppercase mb-3 text-2xl ">How To Measure a Rolex </h2>
          <p className="mb-8 text-sm font-light">
            First, you should be aware of the industry norms. The diameter of a
            watch is its external width across its horizontal axis (from 9
            o’clock to 3 o’clock), The vast majority of diameters are listed
            without taking into account the protrusion of the crown or crown
            guards. That means the “case size” number listed is almost always
            the diameter of the case, but not the amount of real estate that
            will be taken up by the watch once it is on your wrist. Typically,
            watch measurements are taken with a Vernier tool (a pair of
            measuring calipers), and expressed in millimeters. The given case
            diameter measurement of a watch can often be a bit misleading due to
            the multitude of other factors and dimensions that have an equally
            important impact on the overall wearing experience. Additionally, it
            is also worth noting that square or rectangular watches will often
            wear larger than their case diameters might otherwise indicate,
            since the diameter applies across the entire watch, rather than just
            at its widest point (like with a watch that has a circular case).
          </p>
          <h3 className="text-xl font-light mb-3 uppercase">
            Case Size (Rolex Width)
          </h3>
          <p className="mb-4 text-sm font-light">
            When you see a case size listed for a Rolex watch, this measurement
            typically corresponds to its diameter, which could be considered the
            width of the watch. Since most Rolex watches feature round cases,
            the diameter is often representative of the widest point of the case
            (excluding the lugs or winding crown). Despite this case diameter
            being the go-to measurement for watches, this can often be a bit
            misleading since it is only representative of the width across a
            watch at a single point. The shape of the case, along with all its
            various protrusions such as the winding crown, lugs, crown-guards,
            and chronograph pushers can all drastically alter the overall
            wearing experience of a watch. For example, the Rolex Submariner
            ref. 116610 has the same 40mm case diameter as its predecessor (ref.
            16610); however, it appears significantly larger due to its thicker
            lugs and crown guards.
          </p>
          <h3 className="text-xl font-light mb-3 uppercase">
            Case Thickness (Rolex Height)
          </h3>
          <p className="mb-8 text-sm font-light">
            When we talk about the “height” of a watch, we are talking about how
            thick it is, or how tall it will stand up on your wrist. This
            measurement often gets overshadowed by case diameter, but the
            thickness or height of a watch can sometimes be the difference
            between one model being a perfect fit and the other being almost
            unwearable. With the exception of purpose-built tool watches like
            the Yacht-Master II and Deepsea, most Rolex models are reasonably
            thin, but it is still important to keep this dimension in mind when
            searching for the right model for your wrist. Additionally, the type
            of watch can also have a significant impact on how thick it can be.
            Typically, dress watches wear better if they are thin and can easily
            slip under a shirt cuff. Conversely, a professional dive watch can
            actually benefit from being slightly thicker due to a taller bezel
            design offering more room to grip on the side of the bezel. However,
            your wrist size and shape are always going to be the greatest
            determining factors in terms of how thick of a watch you can
            comfortably wear.
          </p>
          <div className="w-full my-16 ">
            <img
              className="w-full h-auto hidden md:block"
              src={articleMd5}
              alt=""
            />
            <img
              className="w-full h-auto block  md:hidden"
              src={article5}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-white px-6 py-12 md:px-16 md:py-24">
        <img className="w-[36px] h-[36px] mb-12" src={quoteMarks} alt="" />
        <q className="text-2xl font-light uppercase mb-8">
          It is with great enthusiasm that we decided to participate in the
          sixth edition of Dubai Watch Week, which is one of the leading watch
          exhibitions in terms of professional contacts and opportunities for
          the transfer of knowledge and experience. This vital platform for
          cultural interaction and innovation provides the ideal environment for
          the meetings and discussions that move the watch industry forward.
        </q>
        <div className=" w-3/5 w-full max-w-34 flex gap-2 items-center mt-12 mb-4 md:mb-4">
          <span className="w-8 h-px bg-white"></span>
          <h1 className="text-white "> Francois-Henri Bennahmias </h1>
        </div>
        <p className="opacity-60 text-sm font-light">
          CEO of Audemars Piguet from 2012 to 2023
        </p>
      </div>
    </Layout>
  );
};

export default Article;
