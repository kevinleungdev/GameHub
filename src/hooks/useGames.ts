import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuyer: GameQuery) => 
  useData<Game>(
    "/games", 
    { 
      params: { 
        genres: gameQuyer.genre?.id, 
        platforms: gameQuyer.platform?.id 
      }
    }, 
    [gameQuyer]);

export default useGames;