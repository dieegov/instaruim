import PhotoCard from '@/components/PhotoCard';
import { IPhoto } from '@/interfaces/IUnsplash';
import { UnsplashService } from '@/services/UnsplashService'
import { Component, Vue } from 'vue-property-decorator'

@Component({
   components: {
     photoCard: PhotoCard
   }
})
export default class Home extends Vue {
  listaFotos: Array<IPhoto> = new Array<IPhoto>()

  likes: number = 0

  get photosListByLikesCount() {
    return this.listaFotos.filter(photo => photo.likes > this.likes)
  }

  private render() {

    return (<h1>

        <div>
        <input vModel={this.likes} />
        </div>

        <h1>Filtrando fotos com likes acima de {this.likes}</h1>

        {this.photosListByLikesCount.map(this.renderPhotoCard)}

      <button onclick={() => this.carregarFotos()}>Carregar Fotos</button>
    </h1>)
  }
  renderPhotoCard(photo: IPhoto): any {
    return (
      <photoCard description={photo.description} likes={photo.likes} image={photo.urls.regular} />
    )
  }

  async carregarFotos() {
    this.listaFotos = await UnsplashService.getPhotos();
  }
}