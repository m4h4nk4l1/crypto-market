import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="flex justify-around align-middle border dark:border-black rounded-lg border-solid border-cyan w-[40%] px-2 py-2 mt-20">
      <NavLink
        to="/"
        end
        className= { ({isActive}) =>{
            return `w-full text-base text-center font-nunito m-2.5 
            ${isActive ? 'bg-cyan text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-cyan active:text-gray-300 active:bg-cyan'}
             rounded-md font-semibold cursor-pointer border-0 capitalize`
        }
    }
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className= { ({isActive}) =>{
          return `w-full text-base text-center font-nunito m-2.5 
          ${isActive ? 'bg-cyan text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-cyan active:text-gray-300 active:bg-cyan'}
           rounded-md font-semibold cursor-pointer border-0 capitalize`
        }
    }
      >
        Trending
      </NavLink>
      <NavLink
        to="/favorite"
        className= { ({isActive}) =>{
            return `w-full text-base text-center font-nunito m-2.5 
            ${isActive ? 'bg-cyan  text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-cyan active:text-gray-300 active:bg-cyan'}
             rounded-md font-semibold cursor-pointer border-0 capitalize`
        }
    }
    >
        Favorites
      </NavLink>
    </nav>
  )
}

export default Navigation