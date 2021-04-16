<template>
  <div>
    <h1>хуята</h1>
    {{ store.topPosid }}
    {{ store.topAdr }}
  </div>
</template>
<script>
import StoreService from '../services/storeService'

export default {
  data () {
    return {
      store: {
        topPosid: '',
        topadr: ''
      },
      text: '',
      dialog: false,
      maximizedToggle: true,
      stores: [],
      visibleColumns: ['posid', 'adr', 'button'],
      loading: false,
      columns: [
        {
          name: 'posid',
          required: true,
          label: 'POSID',
          align: 'left',
          field: row => row.posid,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'adr',
          align: 'left',
          label: 'Адрес',
          sortable: true,
          field: row => row.adr,
          format: val => `${val}`
        },
        {
          name: 'button',
          label: 'Детали',
          align: 'center',
          sortable: false,
          required: true
        }
      ],
      data: [{}]
    }
  },
  computed: {
    pagesNumber () {
      return Math.ceil(this.rows.length / this.pagination.rowsPerPage)
    }
  },
  methods: {
    selectStore (value) {
      this.$router.push(value)
    },
    async getStores () {
      const response = await StoreService.fetchStores()
      this.stores = response.data.stores
    },
    async getStore () {
      const response = await StoreService.getStore({
        id: this.$route.params.id
      })
      this.posid = response.data.posid
      this.adr = response.data.adr
    }
  },
  mounted () {
    this.getStores()
    this.getStore()
  }
}
</script>
