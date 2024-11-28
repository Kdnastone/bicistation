import { useEffect } from "react"
import { useState } from "react"

export default function Rent() {

  const [citys, setCitys] = useState([])
  const [ countries, setCountris] = useState([])

  useEffect(() => {
    const callApi = async(url) => {
      const response = await fetch(url)
      const data = await response.json()
      const firts100 = data.networks.slice(0,50)
      
      const cities = firts100.map((item) => item.location.city)
      setCitys(cities)

      const countriesApi = firts100.map((item) => item.location.country)
      setCountris(countriesApi)
      
    }
    callApi('https://api.citybik.es/v2/networks')
  })


  return (
    <form>
    </form>
  )
}