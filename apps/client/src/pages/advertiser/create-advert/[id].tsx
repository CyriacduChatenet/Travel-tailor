import { NextPage } from 'next'
import { WebCreateAdvertiserForm } from '@travel-tailor/ui'
import { useProtectedRoute } from '@travel-tailor/hooks'
import { TokenService } from '@travel-tailor/services'

import { Layout } from '@/layout'

const CreateAdvert: NextPage = () => {
  useProtectedRoute(
    typeof window !== 'undefined' && TokenService.getAccessToken() ? true : false
  );
  
  return (
    <Layout>
      <h1>Create advert</h1>
      <WebCreateAdvertiserForm api_url={`${process.env.NEXT_PUBLIC_API_URL}`} />
    </Layout>
  )
}

export default CreateAdvert
