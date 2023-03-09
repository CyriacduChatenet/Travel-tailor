import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { TokenService, UserService } from '@travel-tailor/services'
import { useProtectedRoute } from '@travel-tailor/hooks'

import { Layout } from '@/layout'

const AdvertiserDashboard: NextPage = () => {
  const [data, setData] = useState<any>({})
  const getData = async () => {
    const response = await UserService.getUserInfo(
      `${process.env.NEXT_PUBLIC_API_URL}`
    )
    setData(response)
  }

  useProtectedRoute(
    typeof window !== 'undefined' && TokenService.getAccessToken() ? true : false
  );

  useEffect(() => {
    getData()
  }, [])
  return (
    <Layout>
      <h1>Advertiser Dashboard</h1>
      <br />
      <div>
        <Link href={`/advertiser/create-advert/${data.id}`}>
          <button>Create advert</button>
        </Link>
      </div>
      <br />
      <p>
        {data.name}, {data.location}
      </p>
      <h2>Adverts</h2>
    </Layout>
  )
}

export default AdvertiserDashboard
