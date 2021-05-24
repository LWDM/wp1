<template>
  <div class="q-pa-md">
    <q-table
      style="height: 100%"
      virtual-scroll
      :rows-per-page-options="[0]"
      :data="stores"
      :columns="columns"
      row-key="posid"
      flat
      borderless
      :visible-columns="visibleColumns"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="posid" :props="props">
            {{ props.row.posid }}
          </q-td>
          <q-td key="adr" :props="props">
            {{ props.row.adr }}
          </q-td>
          <q-td key="baseNumber" :props="props">
            {{ props.row.baseNumber }}
          </q-td>
          <q-td key="storeOpenDate" :props="props">
            {{ props.row.storeOpenDate }}
          </q-td>
          <q-td key="btn" auto-width>
            <q-btn
              size="sm"
              icon="more_horiz"
              flat
              round
              @click="openDetails(props.row.posid)"
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

    <q-dialog full-width v-model="toggles" position="top">
      <q-card>
        <q-card-section class="q-pa-md" align="center">
          <q-toggle v-model="show.contacts" color="green-9" label="Контакты" />
          <q-toggle v-model="show.kkm" color="yellow-9" label="ККМ" />
          <q-toggle v-model="show.info" color="purple-9" label="Инфо" />
          <q-toggle v-model="show.network" color="grey-9" label="Сеть" />
          <q-toggle v-model="show.remote" color="blue-9" label="Удалёнка" />
          <q-toggle v-model="show.addons" color="cyan-9" label="Доп.Сервисы" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="fade"
      transition-hide="fade"
    >
      <q-card v-if="currentStore" class="bg-grey-3">
        <q-card-section class="row items-center q-pb-none">
          <div>
            <q-input
              hint="POSID"
              :label="this.currentStore.posid"
              dense
              readonly
            >
            </q-input>
          </div>
          <div class="col-5">
            <q-input bottom-slots dense readonly :label="this.currentStore.adr">
              <q-badge
                v-if="currentStore.storeActive == true"
                color="green"
                floating
              >
                <b>РАБОТАЕТ</b>
              </q-badge>
              <q-badge v-else color="red" floating>
                <b>ЗАКРЫТА</b>
              </q-badge>

              <template v-slot:hint>
                Адрес
              </template>
            </q-input>
          </div>
          <q-space />
          <!-- <div class="col-2">
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
          </div> -->
          <q-space />

          <q-btn
            dense
            flat
            round
            color="grey-6"
            icon="construction"
            @click="openToggle"
          >
            <q-tooltip content-class="bg-secondary text-white"
              >Настроить карточки</q-tooltip
            >
          </q-btn>
          <q-btn dense flat round color="secondary" icon="close" v-close-popup>
            <q-tooltip content-class="bg-secondary text-white"
              >Закрыть</q-tooltip
            >
          </q-btn>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <cardStore :show="show" :store="currentStore"></cardStore>
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
      show: {
        contacts: true,
        kkm: true,
        info: true,
        network: true,
        remote: true,
        addons: true
      },
      toggles: false,
      currentStore: null,
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
          name: 'baseNumber',
          align: 'left',
          label: 'База 1С',
          sortable: true,
          field: row => row.baseNumber,
          format: val => `${val}`
        },
        {
          name: 'storeOpenDate',
          align: 'left',
          label: 'Дата открытия',
          sortable: true,
          field: row => row.baseNumber,
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
    openDetails (id) {
      this.currentStore = this.stores.find(store => store.posid === id)
      // console.log(this.currentStore)
      this.dialog = true
    },
    async getStores () {
      const response = await StoreService.fetchStores()
      this.stores = response.data.stores
    },
    async getStore (index) {
      this.currentStore = this.stores[index]
    },
    openToggle () {
      this.toggles = true
    }
  },
  components: {
    cardStore: () => import('../components/cardStore')
  },
  mounted () {
    this.getStores()
  }
}
</script>
