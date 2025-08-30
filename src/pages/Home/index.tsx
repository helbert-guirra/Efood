import { useState, useEffect } from 'react'
import { DadosRestaurante } from '../../Components/CardRestaurants'
import Header from '../../Components/Header'
import RestList from '../../Containers/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurante, isLoading } = useGetRestaurantsQuery()

  if (restaurante) {
    return (
      <>
        <Header></Header>
        <RestList restaurants={restaurante}></RestList>
      </>
    )
  }

  return <h3>CARREGANDO...</h3>
}

export default Home
