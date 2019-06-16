import axios from 'axios';

export const Axios = {
  postBallot: async (ballot) => {
    await axios.post(`${process.env.REACT_APP_GR_BACKEND_URL}/vote`, { ballot });
  },
  getCandidates: async () => {
    return await axios.get(`${process.env.REACT_APP_GR_BACKEND_URL}/vote`);
  }
};