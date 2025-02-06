import PostCard from "@/components/PostCard";

async function getPostList(userId) {
  try {
    let postList = null;
    let user = null;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();

    postList = data.filter((post) => { return Number(post.userId) === Number(userId) });

    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const userdata = await userRes.json();
    user = userdata.filter((user) => { return Number(user.id) === Number(userId) });

    return { user:user[0], postList };

  } catch (error) {
    return error
  }
}

export default async function Page({ params }) {
  let postList = []
  let user = {}
  const { id } = await params;
  try {
    const data = await getPostList(id);
    user = data.user;
    postList = data.postList;
  } catch (error) {
    console.log(error);
  }

  return (
    <section className="bg-[#e2e8f0] p-2 pb-20 sm:p-10 max-w-5xl mx-auto">
      <h1 className="mt-3 mb-5 text-6xl font-black text-center">User Details</h1>
      <div className="flex gap-1 flex-col mt-6">
        <p>
          <b> Full Name: </b>
          {user.name}
        </p>
        <p>
          <b>Email: </b>
          {user.email}
        </p>
        <p>
          <b>Company Name: </b>
          {user.company.name}
        </p>
      </div>
      <div className="items-center sm:items-start py-6 justify-items-center ">
          <div className="flex flex-wrap flex-col">
            {postList.map((post) => (
                <PostCard key={post.id} title={post.title} body={post.body} />
            ))}
          </div>
      </div>
    </section>
  )
}
