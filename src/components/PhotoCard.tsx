import { Component, Prop, Vue } from 'vue-property-decorator'

import './PhotoCard.scss'

@Component({})
export default class PhotoCard extends Vue {
    @Prop({type: String, required: true}) description!: string | null
    @Prop({type: String, required: true}) image!: string
    @Prop({type: Number, required: true, default: 0}) likes!: number

    private liked: Boolean = false

    get buttonEmoji() {
        if(this.liked == false) return "✊"

        return "👍"
    }

    get likesClass() {
        return this.likes > 1 ? 'photo-card-likes green' : 'photo-card-likes red'
    }

    private render() {
        return (
            <div class="photo-card">
                <div class="photo-card-image">
                    <img src={this.image} height="320" />
                </div>
              <div class="photo-card-description">{this.description ? this.description.toUpperCase() : '>>>>>>>Sem descrição<<<<<<<<'}</div>
              <div class={this.likesClass}>{this.likes} Likes <button onclick={() => this.addLike()}>{this.buttonEmoji}</button></div>
            </div>
          )
    }

    addLike() {
        if(this.liked == true) return;

        this.liked = true
        this.likes = this.likes + 1
    }
}