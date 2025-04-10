import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query))
        navigate("/browse")
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 mt-24'>
                <h1 className='text-5xl font-bold text-gray-900 dark:text-white'>
                    Apply Your Dream Job <br /> from <i>Nex
                    <span className='text-[#6A38C2]'>Lance</span></i>
                </h1>

                <div className='flex w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] border border-gray-300 dark:border-gray-600 rounded-full items-center gap-2 mt-10 mx-auto px-3 py-1 backdrop-blur-md bg-transparent'>
                    <input
                        type="text"
                        placeholder='Find your dream job'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-2 py-2'
                    />
                    <Button
                        onClick={searchJobHandler}
                        className="rounded-full bg-[#6A38C2] hover:bg-[#5a2daf] text-white transition-colors duration-200 px-4"
                    >
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
