import { NextPage } from 'next'
import { WebCreateAdvertiserForm } from '@travel-tailor/ui'
import { useProtectedRoute } from '@travel-tailor/hooks'

import { Layout } from '@/layout'
import { authUtil } from '@/utils/auth.utils'

const CreateAdvertiser: NextPage = () => {
  useProtectedRoute(authUtil)

  return (
    <Layout>
      <h1>Create advertiser</h1>
      <WebCreateAdvertiserForm api_url={`${process.env.NEXT_PUBLIC_API_URL}`} />
    </Layout>
  )
}

export default CreateAdvertiser
