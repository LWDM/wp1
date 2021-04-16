<template>
  <div class="stores">
    <h5>test</h5>
    <div v-for="store in stores" :key="store.id">
      <p>
        <span>
          <b> {{ store.posid }} </b></span
        >
        <br />
        <span>
          <b> {{ store.adr }} </b></span
        >
        <br />
      </p>
    </div>
  </div>
</template>

<script>
import StoreService from '../services/storeService.js'
export default {
  data () {
    return {
      stores: []
    }
  },
  mounted () {
    this.getStores()
  },
  methods: {
    async getStores () {
      const response = await StoreService.fetchStores()
      this.stores = response.data
    }
  }
}
</script>
