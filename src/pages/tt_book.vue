<template>
  <div>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails">
        <div class="row q-table__title">
          <div class="col">раз</div>
          <div class="col">два</div>
          <div class="col">три</div>
          <div class="col">четыре</div>
          <div class="col">пять</div>
          <div class="col">
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
              style="min-width: 50px"
            />
          </div>
        </div>
        <!-- </template> -->
        <q-table
          :data="data"
          :columns="columns"
          row-key="posid"
          flat
          class="my-sticky-header-column-table"
          :pagination="initialPagination"
          :visible-columns="visibleColumns"
        >
          <template v-slot:body="props">
            <q-tr
              :props="props"
              @click="selectStore(props.row.path)"
              class="cursor-pointer"
            >
              <q-td key="posid" :props="props">
                {{ props.row.posid }}
              </q-td>
              <!-- <q-td key="posid" :props="props"> -->
              <q-td key="posid">
                {{ props.row.adr }}
              </q-td>
              <q-td key="posid" :props="props">{{ props.row.provider }}</q-td>
              <q-td key="posid" :props="props">{{ props.row.speed }}</q-td>
              <q-td key="posid" :props="props">{{ props.row.outIp }}</q-td>
              <q-td key="posid" :props="props">{{ props.row.mask }}</q-td>
              <q-td key="posid" :props="props">{{ props.row.gate }}</q-td>
              <q-td key="posid" :props="props">{{ props.row.dns1 }}</q-td>
              <q-td key="posid" :props="props">{{ props.row.dns2 }}</q-td>
              <q-td key="posid" :props="props">{{ props.row.vpnt2 }}</q-td>
              <q-td key="posid" :props="props">{{ props.row.intIp }}</q-td>
            </q-tr>
          </template>
        </q-table>
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <div class="text-h6">ККМ</div>
        Страница отображает ту же самую таблицу, но уже с другим набором полей.
        Конкретно в этом случае должна быть таблица с полями по ККМ.
      </q-tab-panel>

      <q-tab-panel name="movies">
        <div class="text-h6">Сотрудники</div>
        А на этой странице мы смотрим список сотрудников. Например, это весь
        персонал, РТТ, ИО, СВ, ТМ.
      </q-tab-panel>
    </q-tab-panels>

    <!-- Тут находится кнопка добавить, с подвылетом.  -->

    <q-page-sticky position="bottom-right" :offset="[50, 25]">
      <q-fab
        icon="add"
        push
        direction="up"
        color="orange"
        vertical-actions-align="right"
      >
        <q-fab-action
          label-position="left"
          color="secondary"
          @click="onClick"
          icon="add_location"
          label="Новая точка"
        />
        <q-fab-action
          label-position="left"
          color="secondary"
          @click="onClick"
          icon="where_to_vote"
          label="Существующая точка"
        />
      </q-fab>
    </q-page-sticky>

    <!-- Футер -->

    <q-footer bordered class="bg-grey-1 text-black">
      <q-toolbar>
        <q-tabs
          v-model="tab"
          active-color="primary"
          indicator-color="primary"
          shrink
          stretch
        >
          <q-tab name="mails" label="Общие" />
          <q-tab name="alarms" label="ККМ" />
          <q-tab name="movies" label="Сотрудники" />
          <q-tab name="mails" clickable @click="showNotif" icon="add" />
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </div>
</template>

<script>
export default {
  name: 'tt_book',
  data () {
    return {}
  },
  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    }
  }
}
</script>

<script>
export default {
  data() {
    return {
      visibleColumns: ['posid', 'adr', 'outIp', 'vpnt2', 'intIp'],
      tab: 'mails',
      loading: true,
      initialPagination: {
        sortBy: 'adr',
        descending: false,
        page: 1,
        rowsPerPage: 60
        // rowsNumber: xx if getting data from a server
      },
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
          field: 'adr',
          sortable: true
        },
        {
          name: 'provider',
          align: 'left',
          label: 'Провайдер',
          field: 'provider',
          sortable: true
        },
        {
          name: 'speed',
          align: 'center',
          label: 'Скорость',
          field: 'speed',
          sortable: false
        },
        {
          name: 'outIp',
          align: 'left',
          label: 'Внешн.IP',
          field: 'outIp',
          sortable: false
        },
        {
          name: 'mask',
          align: 'center',
          label: 'Маска',
          field: 'mask',
          sortable: false
        },
        {
          name: 'gate',
          align: 'center',
          label: 'Шлюз',
          field: 'gate',
          sortable: false
        },
        {
          name: 'dns1',
          label: 'DNS основной',
          field: 'dns1',
          sortable: false
        },
        {
          name: 'dns2',
          label: 'DNS альтернативный',
          field: 'dns2',
          sortable: false
        },
        {
          name: 'vpnt2',
          label: 'VPN Tele2',
          field: 'vpnt2',
          sortable: false
        },
        {
          name: 'intIp',
          label: 'Подсеть салона',
          field: 'intIp',
          sortable: true
        }
      ],
      data: [
        {
          path: 'detail',
          posid: 790426,
          adr: 'МО, Балашиха, Фадеева, 3',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          path: 'detail',
          posid: 1014973,
          adr: 'МО, Балашиха, Энтузиастов ш, 11 стр 4',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 953230,
          adr: 'МО, Балашиха, Энтузиастов, 80',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 790428,
          adr: 'МО, Воскресенск, Федино с., Фединская, д.1',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 1001792,
          adr: 'МО, Домодедово, Корнеева, 1',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 940216,
          adr: 'МО, Ивантеевка, Советский пр-т, 2А',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 1017607,
          adr: 'МО, Королёв, Космонавтов пр, 20А',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 964042,
          adr: 'МО, Куровское, Вокзальная, 14/96',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 837324,
          adr: 'МО, Люберцы, Егорьевское ш., стр. 2',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 811641,
          adr: 'МО, Люберцы, Новорязанское шоссе, 1а',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 821532,
          adr: 'МО, Люберцы, Октябрьский пр-кт, 366',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 782371,
          adr: 'МО, Протвино, Ленина, 22',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 879336,
          adr: 'МО, Раменское, Молодежная, 20',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 782304,
          adr: 'МО, Реутов, Ленина, 1а',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 1069135,
          adr: 'МО, Реутов, Октября, 10',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 965339,
          adr: 'МО, Реутов, Южная 10',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        },
        {
          posid: 997967,
          adr: 'МО, Рошаль, Советская 25',
          provider: 'Энфорта',
          speed: 5,
          outIp: '80.244.236.242',
          mask: 0,
          gate: 1,
          vpnt2: 'Cisco ASA',
          dns1: '87.241.223.68',
          dns2: '81.17.2.171',
          intIp: '192.168.32.X'
        }
      ]
    }
  },

  methods: {
    showNotif() {
      this.$q.notify({
        message: 'Добавился ещё один лист',
        color: 'grey-9',
        position: 'top',
        timeout: '50'
      })
    },
    selectStore(value) {
      this.$router.push(value)
    }
  }
}
</script>

<style lang="sass">
.my-sticky-header-column-table

  td:first-child
    /* bg color is important for td; just specify one */
    /* background-color: #b3b3b3 !important */

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #fff

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0
</style>
