import { useProtectedRoute } from '@travel-tailor/hooks';
import { TokenService } from '@travel-tailor/services';
import { WebCreateTasteForm } from '@travel-tailor/ui';
import { NextPage } from 'next';

const CreateTastePage: NextPage = () => {
  useProtectedRoute(
    typeof window !== 'undefined' && TokenService.getAccessToken() ? true : false
  );

  return (
    <div>
      <h1> Create Taste</h1>
      <WebCreateTasteForm api_url={`${process.env.NEXT_PUBLIC_API_URL}`} />
    </div>
  )
}

export default CreateTastePage
