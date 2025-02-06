'use client'
import React, { useState } from 'react'
import UserCard from "@/components/UserCard";

const UserList = ({ userListData }) => {

    const [searchText, setSearchText] = useState("");
    const [userList, setUserList] = useState(userListData || [])
    const [sorting, setSorting] = useState("name")

    const handleChange = (e) => setSearchText(e.target.value)

    const handleSearchClick = () => {
        if (searchText !== "") {
            const filterBySearch = userListData.filter((user) => { return user.name.match(searchText) || user.email.match(searchText) })
            setUserList(filterBySearch);
        } else {
            setUserList(userListData)
        }
    }

    const sortUsers = userList?.sort((a, b) => {
        if (sorting == "name") {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        }
        else if (sorting === "company") {
            return a.company.name.toLowerCase().localeCompare(b.company.name.toLowerCase())
        }
        return 0;
    })
    return (
        <main className='max-w-5xl'>
            <div className="flex gap-8">
                <div className="flex rounded-xl border-2 border-gray-300 overflow-hidden max-w-md self-end font-[sans-serif]">
                    <input type="email" placeholder="Search Something..." value={searchText} onChange={handleChange}
                        className="w-full outline-none bg-white text-sm px-5 py-3" />
                    <button type='button' className="flex items-center justify-center bg-gray-300 hover:bg-grey-600 px-6" onClick={handleSearchClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="18px" className="fill-white">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                    </button>
                </div>
                <select className="outline-none bg-white text-sm px-5 py-3 rounded-xl border-2 border-gray-300 overflow-hidden" name=' sorting' value={sorting} onChange={(e) => setSorting(e.target.value)}>
                    <option value="name">Sort by Name</option>
                    <option value="company">Sort by Company</option>
                </select>
            </div>
            <section className="container  py-8 mx-auto text-gray-600 body-font">
                {sortUsers?.length > 0 ?
                    <div className="flex flex-wrap gap-4">
                        {sortUsers?.map((user) => (
                            <UserCard
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                email={user.email}
                                address={user.address}
                                company={user.company}
                            />
                        ))
                        }
                    </div>
                    :
                    <h1>No User Found</h1>
                }
            </section>
        </main>
    )
}

export default UserList