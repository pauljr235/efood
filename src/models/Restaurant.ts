class Restaurant {
  id: number
  rating: string
  image: string
  description: string
  infos: string[]
  title: string

  constructor(
    id: number,
    rating: string,
    image: string,
    description: string,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.rating = rating
    this.image = image
    this.description = description
    this.infos = infos
    this.title = title
  }
}

export default Restaurant
