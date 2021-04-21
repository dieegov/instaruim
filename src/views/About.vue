<template>
  <div class="about">
    <h1>{{ new Date().toLocaleString("pt-BR") }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {
  data = new Date().toLocaleString()
}
</script>

<style lang="scss">

</style>