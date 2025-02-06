

import UserList from "@/components/UserList";


async function getUserList() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }

}

export default async function Home() {
  let userListData = []
  try {
    userListData = await getUserList();
  } catch (error) {
    console.log(error);
  }

  return (
    <main className=" bg-[#e2e8f0] items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mt-3 mb-5 text-6xl font-black">User List</h1>
      {userListData.length > 0 ? <UserList userListData={userListData} /> :
        <h1>No User Found</h1>}
    </main>
  );
}
