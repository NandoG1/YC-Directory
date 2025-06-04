import { SearchParams } from "next/dist/server/request/search-params";
import SearchForm from "../../components/SearchForm";
import StarupCard from "@/components/StarupCard";

export default async function Home({searchParams} : {searchParams: {query?: string}}) {
  const query = searchParams.query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {_id: 1, name: "Fernando"},
      _id: 1,
      description: "This is a description",
      image: "https://images.unsplash.com/photo-1458571037713-913d8b481dc6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1920",
      category: "Robots",
      title: "We Robots", 
    }
  ]

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
            posts.map((post: StartupCardType, index: number) => (<StarupCard key={post._id} post={post}/>))
          ): (
            <p className="text-black-100 text-sm font-normal">No starups founds</p>
          )}
        </ul>
      </section>
    </>
  );
}
