<template>
  <div>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="addStore" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          type="text"
          v-model="store.posid"
          label="POSID"
          id="store.posid"
        />

        <q-input
          filled
          label="Address"
          v-model="store.adr"
          type="text"
          id="store.posid"
        />

        <div class="q-pa-md">
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import StoreService from '../services/storeService'
export default {
  data () {
    return {
      value: false,
      first: true,
      dialog: false
    }
  },
  mounted () {
    this.getStores()
  },
  methods: {
    async addStore () {
      if (this.store.posid !== '' && this.store.adr !== '') {
        await StoreService.addNewStore({
          posid: this.store.posid,
          adr: this.store.adr
        })
        this.store.posid = null
        this.store.adr = null
      } else {
        alert('Empty fields!')
      }
    },
    onReset () {
      this.store.posid = null
      this.store.adr = null
    },
    async getStores () {
      const response = await StoreService.fetchStores()
      this.stores = response.data.stores
    },
    openToggle (position) {
      this.position = position
      this.dialog = true
    }
  }
}
</script>
