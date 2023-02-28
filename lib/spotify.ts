import axios from 'axios';

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID!;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET!;
const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await axios({
    method: 'POST',
    url: TOKEN_ENDPOINT,
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.data;
};

export const getSpotifyInfo = async (endpoint: string) => {
  const { access_token } = await getAccessToken();

  const { data } = await axios({
    method: 'GET',
    url: endpoint,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return data;
};
