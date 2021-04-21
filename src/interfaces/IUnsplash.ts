export interface IPhoto {
    description: string
    likes: number
    urls: IPhotoUrls
}

export interface IPhotoUrls {
    full: string
    regular: string
    raw: string
    small: string
    thumb: string
}