/* eslint-disable camelcase */
export interface Movie {
   popularity: number
   vote_count: number
   video: boolean
   poster_path: string
   id: number
   adult: boolean
   backdrop_path: string
   original_language: string
   original_title: string
   genre_ids: Array<number>
   title: string
   vote_average: boolean
   overview: string
   release_date: string
}

export interface ApiResponse {
   release_date: any
   runtime: number
   backdrop_path: string
   title: string
   overview: ReactNode
   genres: any
   page: number
   total_results: number
   total_pages: number
   results: Array<Movie>
}
