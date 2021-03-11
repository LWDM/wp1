<template>
  <div>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails">
        <div class="row q-pa-md">
          <div class="col-1">
            <q-input
              v-model="text"
              hint="POSID"
              label="790426"
              dense
              readonly
            />
          </div>
          <div class="col-4">
            <!-- <q-input
              v-model="text"
              hint="Адрес"
              label="МО, Балашиха, Фадеева, 3"
              dense
              readonly
              flat
            />
            <template>
              <q-icon name="place" />
            </template> -->
            <q-input
              bottom-slots
              dense
              v-model="text"
              :readonly="nameReadonly"
              label="МО, Балашиха, Фадеева, 3"
            >
              <template v-slot:append>
                <q-icon name="edit" @click="showNotifEdit" />
              </template>

              <template v-slot:hint>
                Адрес
              </template>
            </q-input>
          </div>

          <div class="col-4"></div>
          <div class="col-3">
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Найти в карточке..."
            >
            </q-input>
          </div>
        </div>
        <div class="q-pa-md row items-start q-gutter-xl">
          <q-card class="my-card">
            <q-card-section class="provider">
              <div class="text-subtitle2">Провайдер</div>
            </q-card-section>

            <q-markup-table dense>
              <tbody>
                <tr>
                  <td class="text-left">Компания</td>
                  <td class="text-right">Энфорта</td>
                </tr>
                <tr>
                  <td class="text-left">Скорость</td>
                  <td class="text-right">5 Мбит/сек</td>
                </tr>
                <tr>
                  <td class="text-left">Маска</td>
                  <td class="text-right">255.255.255.0</td>
                </tr>
                <tr>
                  <td class="text-left">Шлюз</td>
                  <td class="text-right">80.244.236.1</td>
                </tr>
                <tr>
                  <td class="text-left">Абонентская плата</td>
                  <td class="text-right">3.500 р.</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card>
          <q-card class="my-card">
            <q-card-section class="ttCof">
              <div class="text-subtitle2">Конфигурация салона</div>
            </q-card-section>

            <q-markup-table dense>
              <tbody>
                <tr>
                  <td class="text-left">Компания</td>
                  <td class="text-right">Энфорта</td>
                </tr>
                <tr>
                  <td class="text-left">Скорость</td>
                  <td class="text-right">5 Мбит/сек</td>
                </tr>
                <tr>
                  <td class="text-left">Маска</td>
                  <td class="text-right">255.255.255.0</td>
                </tr>
                <tr>
                  <td class="text-left">Шлюз</td>
                  <td class="text-right">80.244.236.1</td>
                </tr>
                <tr>
                  <td class="text-left">Абонентская плата</td>
                  <td class="text-right">3.500 р.</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card>
          <q-card class="my-card">
            <q-card-section class="kkm">
              <div class="text-subtitle2">ККМ</div>
            </q-card-section>

            <q-markup-table dense>
              <tbody>
                <tr>
                  <td class="text-left">Количество ККМ</td>
                  <td class="text-right">1</td>
                </tr>
                <tr>
                  <td class="text-left">Дата регистрации</td>
                  <td class="text-right">23.02.2020</td>
                </tr>
                <tr class="warning">
                  <td class="text-left">Перерегистрация через</td>
                  <td class="text-right">14 дней</td>
                </tr>
                <tr>
                  <td class="text-left">Дата регистрации ОФД</td>
                  <td class="text-right">80.244.236.1</td>
                </tr>
                <tr class="attention">
                  <td class="text-left">Перерегистрация через</td>
                  <td class="text-right">60 дней</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card>
          <q-card class="my-card">
            <q-card-section class="tt_serv">
              <div class="text-subtitle2">Доп.сервисы</div>
            </q-card-section>

            <q-markup-table dense>
              <tbody>
                <tr>
                  <td class="text-left">HotSpot</td>
                  <td class="text-right">Установлен</td>
                </tr>
                <tr>
                  <td class="text-left">Retail Music Player</td>
                  <td class="text-right">Установлен</td>
                </tr>
                <tr>
                  <td class="text-left">Сертификат РТК</td>
                  <td class="text-right">Установлен</td>
                </tr>
                <tr>
                  <td class="text-left">Счётчики посетителей</td>
                  <td class="text-right">Установлены (3D)</td>
                </tr>
                <tr>
                  <td class="text-left">Виртуальная витрина</td>
                  <td class="text-right">Установлена</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card>
          <q-card class="my-card">
            <q-card-section class="personal">
              <div class="text-subtitle2">Персонал</div>
            </q-card-section>

            <q-markup-table dense>
              <tbody>
                <tr>
                  <td class="text-left">Супервайзер</td>
                  <td class="text-right">Малиновский Алексей</td>
                </tr>
                <tr>
                  <td class="text-left">РТТ</td>
                  <td class="text-right">Иванов Иван</td>
                </tr>
                <tr>
                  <td class="text-left">Продавец</td>
                  <td class="text-right">Иванов Иван</td>
                </tr>
                <tr>
                  <td class="text-left">Продавец</td>
                  <td class="text-right">Иванов Иван</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card>
          <!-- <q-card class="my-card"> -->
          <!-- <q-card-section class="add_card"> -->
          <q-btn
            @click="simulateProgress(6)"
            :loading="loading"
            padding="lg xs"
            color="dark"
            class="my-card"
          >
            <q-icon left name="add" />
            <template v-slot:loading>
              Создаю новую карточку...
            </template>
          </q-btn>
          <!-- </q-card-section> -->
          <!-- </q-card> -->
        </div>
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
      <q-btn fab icon="edit" color="orange" @click="showNotif2"> </q-btn>
    </q-page-sticky>

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
  data () {
    return {
      loading: false,
      nameReadonly: true,
      tab: 'mails',
      filter: ''
    }
  },
  methods: {
    showNotif () {
      this.$q.notify({
        message: 'Добавился ещё один лист',
        color: 'grey-9',
        position: 'top',
        timeout: '50'
      })
    },
    showNotif2 () {
      this.$q.notify({
        message: 'Жмакаю на кнопочку',
        color: 'grey-9',
        position: 'top',
        timeout: '50'
      })
    },
    showNotifEdit () {
      this.$q.notify({
        message: 'Жмакаю на кнопочку',
        color: 'grey-9',
        position: 'top',
        timeout: '50'
      })
    },
    simulateProgress (number) {
      // we set loading state
      this.loading = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loading = false
      }, 3000)
    }
  }
}
</script>
<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
.my-card
  width: 25%
  max-width: 500px
.provider
  background-color: $purple-3
.ttCof
  background-color: $pink-3
.kkm
  background-color: $cyan-3
.warning
  background-color: $red
.attention
  background-color: $amber
.add_card
  background-color: $grey-5
.tt_serv
  background-color: $light-green-3
.personal
  background-color: $blue-grey-3
</style>
