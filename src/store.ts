import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { searchText: searchText } })),
  setGenreId: (genreID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreID } })),
  setPlatformId: (platformID) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: platformID },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
    })),
}));

export default useGameQueryStore;
