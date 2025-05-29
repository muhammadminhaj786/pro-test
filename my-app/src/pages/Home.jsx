
import { useEffect, useState } from 'react'
import Card from '../component/Card'
import CartTable from '../component/Cart'
import NavBar from '../component/NavBar'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get('https://dummyjson.com/products')
      console.log(response.data.products)
      setData(response.data.products)



    }
    apiCall()
  }, [])

  return (
    <div>
      <NavBar />
      <h1 className='text-3xl text-[#475f7b] mt-5 p-2'>
        Restaurants in E-FINDER
      </h1>

      <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4'>
        {
          data && data.map((item, index) => {
            return (
              <div key={index}>

                <Card item={item} />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Home