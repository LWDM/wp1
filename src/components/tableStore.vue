<template>
  <div class="q-pa-md">
    <h5>{{ store.topPosid }}</h5>

    <q-table
      style="height: 100%"
      card-class="bg-grey-2"
      virtual-scroll
      :rows-per-page-options="[0]"
      :data="stores"
      :columns="columns"
      row-key="id"
      flat
      borderless
      :visible-columns="visibleColumns"
    >
      <template v-slot:body="props">
        <q-tr :props="props" v-for="store in stores" :key="store.posid">
          <!-- <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td> -->
          <q-td>
            {{ store.posid }}
          </q-td>
          <q-td>
            {{ store.adr }}
          </q-td>
          <q-td auto-width>
            <q-btn
              size="sm"
              icon="more_horiz"
              flat
              round
              @click="dialog = true"
            />
          </q-td>
        </q-tr>
      </template>

      <template v-slot:top>
        <q-space />

        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />
      </template>
    </q-table>

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="fade"
      transition-hide="fade"
    >
      <q-card class="bg-grey-3">
        <q-card-section class="row items-center q-pb-none">
          <div>
            <q-input hint="POSID" label="123123" dense readonly />
          </div>
          <div class="col-5">
            <q-input
              bottom-slots
              dense
              readonly
              label="МО, Балашиха, Фадеева, 3"
            >
              <!-- <template v-slot:append>
            <q-icon name="edit" @click="editAdr" />
          </template> -->

              <template v-slot:hint>
                Адрес
              </template>
            </q-input>
          </div>
          <q-space />
          <div class="col-2">
            <q-input
              dense
              clearable
              clear-icon="close"
              bottom-slots
              debounce="100"
              v-model="text"
              label="Найти в карточке..."
            >
            </q-input>
          </div>
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <detailStore></detailStore>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import StoreService from '../services/storeService'

export default {
  data () {
    return {
      store: {
        topPosid: null,
        topadr: null
      },
      text: null,
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
      ]
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
  components: {
    detailStore: () => import('../pages/tt_detail')
  },
  mounted () {
    this.getStores()
    this.getStore()
  }
}
</script>
