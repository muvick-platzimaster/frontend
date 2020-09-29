/* eslint-disable camelcase */
export interface Movie {
   adult: boolean
   backdrop_path: string
   genre_ids: Array<number>
   id: number
   original_language: string
   original_title: string
   overview: string
   popularity: number
   poster_path: string
   release_date: string
   title: string
   video: boolean
   vote_average: number
   vote_count: number
   name: string
}

export interface MovieDetails {
   adult: boolean
   backdrop_path: string
   belongs_to_collection: {
      backdrop_path: string
      id: number
      name: string
      poster_path: string
   }
   budget: number
   genres: { id: number; name: string }[]
   homepage: string
   id: number
   imdb_id: string
   original_language: string
   original_title: string
   overview: string
   popularity: number
   poster_path: string
   production_companies: {
      id: number
      logo_path: string
      name: string
      origin_country: string
   }[]
   production_countries: { iso_3166_1: string; name: string }[]
   release_date: string
   revenue: number
   runtime: number
   spoken_languages: { iso_639_1: string; name: string }[]
   status: string
   tagline: string
   title: string
   video: false
   vote_average: number
   vote_count: number
}

export interface ApiResponse {
   page: number
   total_results: number
   total_pages: number
   results: Array<Movie>
}

export interface Videos {
   id: number
   results: {
      id: string
      iso_639_1: string
      iso_3166_1: string
      key: string
      name: string
      site: string
      size: number
      type: string
   }[]
}
