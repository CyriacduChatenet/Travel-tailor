import { ROLES } from '@travel-tailor/constants';
import { jwtDecode } from '@travel-tailor/functions';
import { useFetch } from '@travel-tailor/hooks'

import { TokenService } from '../tokens/token.service';
import { TravelerService } from '../traveler/traveler.service';

const updateUser = (api_url: string, body: any) => {
  return useFetch.protectedPatch(
    `${api_url}`,
    body,
    String(TokenService.getAccessToken())
  )
}

const getUserByToken = async (api_url: string, email: string) => {
  return await useFetch.get(`${api_url}/user/${email}`);
};

const getUserInfo = async (api_url: string) => {
  const token = TokenService.getAccessToken();
  const decodedToken = jwtDecode(String(token));
  const user = await getUserByToken(api_url, decodedToken.email);

  if(user.roles === ROLES.TRAVELER) {
    const traveler = await TravelerService.getTravelerInfo(api_url, user.traveler.id);
    return { ...user, ...traveler }
  }
};

export const UserService = {
  updateUser,
  getUserByToken,
  getUserInfo,
}
