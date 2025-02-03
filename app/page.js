import Image from "next/image";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  // Pass data to the page via props
  return { props: { repo } };
}

export default function Home({ repo }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-5xl">
        {JSON.stringify(repo)}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {/* card start */}
              <div className="xl:w-1/3 md:w-1/2 min-w-64 p-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              {/* card end */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
