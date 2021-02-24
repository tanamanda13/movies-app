import axios from 'axios';
import {REACT_APP_API_URL, REACT_APP_API_KEY} from "@env";

class MovieService {
  static async getMovies() {
    console.log('hello service movie');
    try {
      const response = await axios.get(
        `${REACT_APP_API_URL}discover/movie?api_key=${REACT_APP_API_KEY}`
      )
      // console.log(response.data.results);
      return response.data.results;
      // return response.results;
    } catch (error) {
      console.log(error);
    }
  }
}

export default MovieService;