import Header from '../../Components/Header'
import RestList from '../../Containers/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'
import { ClimbingBoxLoader } from 'react-spinners'
import { colors } from '../../styles'
import { LoaderContainer } from './styles'

const Home = () => {
  const { data: restaurante, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return (
      <LoaderContainer>
        <ClimbingBoxLoader color={colors.rose} />
      </LoaderContainer>
    )
  }

  if (restaurante) {
    return (
      <>
        <Header />
        <RestList restaurants={restaurante} />
      </>
    )
  }

  return <h4>Nenhum restaurante encontrado.</h4>
}

export default Home
