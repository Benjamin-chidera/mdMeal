import React from 'react'
import { Hero } from '../components/Hero'
import { Search } from '../components/Search'
import { MealList } from '../components/MealList'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Search/>
      <MealList/>
    </div>
  )
}
