import { SearchParams } from "next/dist/server/request/search-params";
import SearchForm from "../../components/SearchForm";
import StarupCard, { StartupTypeCard } from "@/components/StarupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Home({searchParams} : {searchParams: {query?: string}}) {
  const query = searchParams.query;

  // const posts = await client.fetch(STARTUPS_QUERY)
  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY})



  return (
    <>
      <section className="w-full bg-[#EE2B69] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] text-center my-5">Pitch your Starup, <br/> Connect With Entrepreneurs</h1>
        <p className="font-medium text-[20px] text-white max-w-3xl text-center break-words">Sumbit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        <SearchForm query={query} />
      </section>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
            {query ? `Search result for ${query}` : "All Starups"}
        </p>
        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5"> 
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (<StarupCard key={post._id} post={post}/>))
          ): (
            <p className="text-black-100 text-sm font-normal">No starups founds</p>
          )}
        </ul>
      </section>
    </>
  );
}
