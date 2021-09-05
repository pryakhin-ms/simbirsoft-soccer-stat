import axios from 'axios';

const fetchLeagues = async () => {
  const { AUTH_TOKEN } = process.env;
  const { API_URL } = process.env;
  const { data: { competitions } } = await axios({
    headers: { 'X-Auth-Token': AUTH_TOKEN },
    method: 'get',
    url: `${API_URL}competitions?plan=TIER_ONE`,
  });
  return competitions;
};

export default fetchLeagues;
