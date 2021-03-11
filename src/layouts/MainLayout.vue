<template>
  <q-layout view="hHh lpR lFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title> </q-toolbar-title>

        <q-input
          dark
          standout
          placeholder="Найти торговую точку"
          dense
          v-model="text"
          type="search"
          class="absolute-center q-ml-md"
          size="80"
        >
          <template v-slot:prepend>
            <q-icon v-if="text === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>

        <div class="q-pr-md">
          <div class="q-gutter-lg">
            <!-- <q-btn dense flat round icon="settings" /> -->
            <q-btn dense flat round icon="notifications_none" />
            <q-btn dense flat round>
              <q-avatar>
                <img
                  src="https://www.zastavki.com/pictures/1024x1024/2015/Cartoons_Bender_with_a_cigar_in_his_mouth__Futurama_104895_31.jpg"
                />
              </q-avatar>
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="left"
      side="left"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList">
            <q-item :to="menuItem.path" exact :key="index" clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

// sideBar

<script>
const menuList = [
  {
    icon: 'dashboard',
    label: 'DashBoard',
    separator: false,
    path: '/'
  },
  {
    icon: 'task',
    label: 'ServiceDesk',
    separator: false,
    path: '/serviceDesk'
  },
  {
    icon: 'place',
    label: 'Торговые точки',
    separator: false,
    path: '/tt_book'
  },
  {
    icon: 'people',
    label: 'Пользователи',
    separator: true,
    path: '/users'
  },
  {
    icon: 'settings',
    label: 'Настройки',
    separator: false,
    path: '/settings'
  },
  {
    icon: 'feedback',
    label: 'Хочу фишку!',
    separator: false,
    path: '/feedback'
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Помощь',
    path: '/help',
    separator: false
  }
]

export default {
  data () {
    return {
      left: false,
      drawer: false,
      menuList,
      text: ''
    }
  }
}
</script>
