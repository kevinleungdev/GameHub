import { GameQuery } from "../App";
import useData from "./useData";

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
  rating_top: number;
}

const useGames = (gameQuyer: GameQuery) => 
  useData<Game>(
    "/games", 
    { 
      params: { 
        genres: gameQuyer.genre?.id, 
        platforms: gameQuyer.platform?.id,
        ordering: gameQuyer.sortOrder,
        search: gameQuyer.searchText
      }
    }, 
    [gameQuyer]);

export default useGames;