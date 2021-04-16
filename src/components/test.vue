<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Maximized" color="primary" @click="dialog = true" />

      <q-dialog
        v-model="dialog"
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-primary text-white">
          <q-bar>
            <q-space />

            <q-btn
              dense
              flat
              icon="minimize"
              @click="maximizedToggle = false"
              :disable="!maximizedToggle"
            >
              <q-tooltip
                v-if="maximizedToggle"
                content-class="bg-white text-primary"
                >Minimize</q-tooltip
              >
            </q-btn>
            <q-btn
              dense
              flat
              icon="crop_square"
              @click="maximizedToggle = true"
              :disable="maximizedToggle"
            >
              <q-tooltip
                v-if="!maximizedToggle"
                content-class="bg-white text-primary"
                >Maximize</q-tooltip
              >
            </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>

    <!-- <div class="q-pa-md" style="max-width: 400px">
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

    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="stores"
        :columns="columns"
        row-key="posid"
      />
    </div> -->
  </div>
</template>

<script>
import StoreService from '../services/storeService'
export default {
  data () {
    return {
      dialog: false,
      maximizedToggle: true,
      stores: [],
      store: {
        posid: '',
        adr: ''
      },
      columns: [
        {
          name: 'posid',
          required: true,
          label: 'POSID',
          align: 'center',
          field: row => row.posid,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'adr',
          label: 'Address',
          align: 'center',
          sortable: true,
          field: row => row.adr
        }
      ],
      data: [
        {
          posid: '123456',
          adr: 'testaddress'
        }
      ]
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
    }
  }
}
</script>
