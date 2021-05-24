<template>
  <div>
    <h5>Дата</h5>
    {{ storeDate }}
    <h5>Календарь</h5>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <div>
          <div class="q-pb-sm q-gutter-sm">
            <q-badge color="teal"> Model: {{ date }} </q-badge>
          </div>

          <q-date
            v-model="date"
            bordered
            minimal
            :locale="rusLocaleDate"
            mask="DD-MM-YYYY"
          />
        </div>
      </div>
    </div>
    <!-- <q-btn
      flat
      round
      size="lg"
      color="secondary"
      icon="settings"
      @click="openToggle('top')"
    />

    <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 450px">
        <q-card-section class="row items-center no-wrap">
          <q-toggle v-model="first" color="green-9" label="Контакты" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card v-show="first" class="bg-grey-2">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon round color="green-9" name="contacts" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-grey-8"><b>Контакты</b></q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />

          <q-item>
            <q-item-section avatar>
              <q-icon color="green-9" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Территориальный менеджер Т2</q-item-label>
              <q-item-label caption>Супаев Дмитрий</q-item-label>
              <q-item-label caption>+7 (926)621 60 13 </q-item-label>
              <q-item-label caption>dmitry.supaev@tele2.ru</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section avatar>
              <q-icon color="green-9" name="supervisor_account" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Супервайзер</q-item-label>
              <q-item-label caption>Кушниренко Денис</q-item-label>
              <q-item-label caption>+7 (914) 254-45-45</q-item-label>
              <q-item-label caption
                >supervisor4.msk@interantenna.ru</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section avatar>
              <q-icon color="green-9" name="face" />
            </q-item-section>

            <q-item-section>
              <q-item-label>РТТ</q-item-label>
              <q-item-label caption>Какойто Вася</q-item-label>
              <q-item-label caption>+7 (914) 254-45-45</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div> -->

    <!-- <div class="q-pa-md q-gutter-sm">
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
    </div> -->

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
import { date } from 'quasar'
// destructuring to keep only what is needed
const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'DD-MM-YYYY')

// const rusLocale = date.extractDate({
//   days: [
//     'Воскресенье',
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота'
//   ],
//   daysShort: ['Вск', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
//   months: [
//     'Январь',
//     'Февраль',
//     'Март',
//     'Апрель',
//     'Май',
//     'Июнь',
//     'Июль',
//     'Август',
//     'Сентябрь',
//     'Октябрь',
//     'Ноябрь',
//     'Декабрь'
//   ],
//   monthsShort: [
//     'Янв',
//     'Фев',
//     'Мар',
//     'Апр',
//     'Май',
//     'Июн',
//     'Июл',
//     'Авг',
//     'Сен',
//     'Окт',
//     'Ноя',
//     'Дек'
//   ]
// })

export default {
  data () {
    return {
      date: formattedString,
      value: false,
      first: true,
      dialog: false,
      maximizedToggle: false,
      storeDate: date.formatDate(timeStamp, 'DD.MMM.YYYY'),
      rusLocaleDate: {
        days: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split(
          '_'
        ),
        daysShort: 'Вск_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
        months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split(
          '_'
        ),
        monthsShort: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split(
          '_'
        ),
        firstDayOfWeek: 1
      }
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
