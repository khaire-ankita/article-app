import UserCard from "@/components/UserCard";
import Image from "next/image";

async function getArtist() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return data;
}

export default async function Home() {
  const artistData = await getArtist();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-5xl">
        {/* {JSON.stringify(artistData)} */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {artistData.map((user) => (
                <UserCard
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  address={user.address}
                  company={user.company}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
