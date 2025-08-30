import { useParams } from 'react-router'
import ProfileHeader from '../../Components/ProfileHeader'
import Banner from '../../Components/RestBanner'
import ProductList from '../../Containers/ProductList'

import { useGetCurrentRestQuery } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()
  const { data: currentRest } = useGetCurrentRestQuery(id!)

  if (currentRest) {
    return (
      <>
        <ProfileHeader></ProfileHeader>
        <Banner
          capa={currentRest.capa}
          tipo={currentRest.tipo}
          titulo={currentRest.titulo}
        ></Banner>
        <ProductList />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Restaurant
