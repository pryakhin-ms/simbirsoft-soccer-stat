import axios from 'axios';

const fetchTeams = async () => {
  const { AUTH_TOKEN } = process.env;
  const { API_URL } = process.env;
  const { data: { teams } } = await axios({
    headers: { 'X-Auth-Token': AUTH_TOKEN },
    method: 'get',
    url: `${API_URL}teams`,
  });
  return teams;
};

export default fetchTeams;
