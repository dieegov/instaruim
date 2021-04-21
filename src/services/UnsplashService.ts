import { IPhoto } from './../interfaces/IUnsplash';
export class UnsplashService {
    static readonly endpoint: String = "https://api.unsplash.com"
    static readonly token: String = "KYTUvupcCB3vSGmen46asBA7Zcm9l2ceNGWGSvLiwtM"

    static async getPhotos() : Promise<Array<IPhoto>> {
        const response = await fetch(`${UnsplashService.endpoint}/photos/?client_id=${UnsplashService.token}`, {
            method: "GET",
        })
        .then(response => response.json());

        return response;
    }


}