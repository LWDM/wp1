<template>
  <div>
    <q-page-sticky position="bottom-right" :offset="[30, 15]">
      <q-btn fab outline icon="edit" color="grey-5" />
    </q-page-sticky>
    <div class="q-pa-md row justify-center q-gutter-x-lg q-gutter-y-md ">
      <!-- Контакты -->
      <q-card v-if="show.contacts" class="my-card bg-grey-2 ">
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
            <q-item-section>
              <q-input
                dense
                borderless
                v-model="store.terrName"
                label="Территориальный менеджер Т2"
              />
              <q-input
                dense
                borderless
                label="Мобильный"
                v-model="store.terrPhone"
                mask="+# (###) ###-##-##"
              >
                <q-btn
                  flat
                  color="green-9"
                  icon="sms"
                  dense
                  round
                  type="a"
                  :href="`https://wa.me/${store.terrPhone}`"
                  target="__blank"
                >
                  <q-tooltip
                    anchor="top right"
                    self="center middle"
                    content-class="bg-green"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    WhatsApp
                  </q-tooltip>
                </q-btn>
              </q-input>

              <q-input
                dense
                borderless
                label="Эл.почта"
                v-model="store.terrEmail"
              >
                <q-btn
                  flat
                  color="green-9"
                  icon="mail_outline"
                  dense
                  round
                  type="a"
                  :href="`mailto:${store.terrEmail}`"
                  target="__blank"
                >
                  <q-tooltip
                    anchor="top right"
                    self="center middle"
                    content-class="bg-green"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    Отправить письмо
                  </q-tooltip>
                </q-btn>
              </q-input>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section>
              <q-input
                dense
                borderless
                v-model="store.svName"
                label="Супервайзер"
              />
              <q-input
                label="Мобильный"
                dense
                borderless
                v-model="store.svPhone"
                mask="+# (###) ###-##-##"
              >
                <q-btn
                  flat
                  color="green-9"
                  icon="sms"
                  dense
                  round
                  type="a"
                  :href="`https://wa.me/${store.svPhone}`"
                  target="__blank"
                >
                  <q-tooltip
                    anchor="top right"
                    self="center middle"
                    content-class="bg-green"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    WhatsApp
                  </q-tooltip>
                </q-btn>
              </q-input>
              <q-input
                label="Эл.почта"
                dense
                borderless
                v-model="store.svEmail"
              >
                <q-btn
                  flat
                  color="green-9"
                  icon="mail_outline"
                  dense
                  round
                  type="a"
                  :href="`mailto:${store.svEmail}`"
                  target="__blank"
                >
                  <q-tooltip
                    anchor="top right"
                    self="center middle"
                    content-class="bg-green"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    Отправить письмо
                  </q-tooltip>
                </q-btn>
              </q-input>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section>
              <q-input label="РТТ" dense borderless v-model="store.storeRtt">
                <q-btn
                  rounded
                  dense
                  flat
                  color="orange-9"
                  v-if="store.rttCam != 'null'"
                  icon="gpp_good"
                />
              </q-input>
              <q-input
                label="Мобильный"
                dense
                borderless
                v-model="store.rttPhone"
                mask="+# (###) ###-##-##"
              >
                <q-btn
                  flat
                  color="green-9"
                  icon="sms"
                  dense
                  round
                  type="a"
                  :href="`https://wa.me/${store.rttPhone}`"
                  target="__blank"
                >
                  <q-tooltip
                    anchor="top right"
                    self="center middle"
                    content-class="bg-green"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    WhatsApp
                  </q-tooltip>
                </q-btn>
              </q-input>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <!-- ККМ -->
      <q-card v-if="show.kkm" class="my-card bg-grey-2">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon round color="yellow-9" name="monetization_on" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-grey-8"
                ><b>Контрольно-кассовая техника</b></q-item-label
              >
            </q-item-section>
          </q-item>
          <q-separator />
          <q-tabs
            v-if="store.storeKkm > '1'"
            v-model="kkmTab"
            class="text-grey-8"
          >
            <q-tab label="1" name="one" />
            <q-tab label="2" name="two" />
          </q-tabs>
          <q-tab-panels v-model="kkmTab" animated>
            <q-tab-panel name="one">
              <div>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-grey-8">
                      <q-input
                        dense
                        borderless
                        v-model="store.kkmFactNum"
                        label="Заводской номер"
                      />
                      <q-input
                        dense
                        borderless
                        v-model="store.kkmRegNum"
                        label="Регистрационный номер"
                      />
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-grey-8">
                      <q-input
                        dense
                        borderless
                        v-model="store.kkmRegReasonCode"
                        label="КПП при регистрации"
                      />
                      <q-input
                        dense
                        borderless
                        v-model="store.kkmModel"
                        label="Модель ККМ"
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-input
                      dense
                      borderless
                      v-model="store.kkmOfdNum"
                      label="Код ОФД"
                    />
                    <q-input
                      dense
                      borderless
                      v-model="storeDate.ofdActivate"
                      label="Дата активации"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-input
                      dense
                      borderless
                      v-model="storeDate.ofdExpire"
                      label="Окончание подписки"
                    />
                    <q-input
                      dense
                      borderless
                      v-model="outOfd"
                      label="Дней до замены"
                    />
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-input
                      dense
                      borderless
                      v-model="store.kkmFnNum"
                      label="Фискальный накопитель"
                    />
                    <q-input
                      dense
                      borderless
                      v-model="storeDate.fnActivate"
                      label="Дата активации"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-input
                      dense
                      borderless
                      v-model="storeDate.fnExpire"
                      label="Дата истечения"
                    />
                    <q-input
                      dense
                      borderless
                      v-model="outOfd"
                      label="Дней до замены"
                    />
                  </q-item-section>
                </q-item>
              </div>
            </q-tab-panel>
            <q-tab-panel name="two">
              <div>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-grey-8">
                      <q-input
                        dense
                        borderless
                        v-model="store.kkmFactNum"
                        label="Заводской номер"
                      />
                      <q-input
                        dense
                        borderless
                        v-model="store.kkmRegNum"
                        label="Регистрационный номер"
                      />
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-grey-8">
                      <q-input
                        dense
                        borderless
                        v-model="store.kkmRegReasonCode"
                        label="КПП при регистрации"
                      />
                      <q-input
                        dense
                        borderless
                        v-model="store.kkmModel"
                        label="Модель ККМ"
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-input
                      dense
                      borderless
                      v-model="store.kkmOfdNum"
                      label="Код ОФД"
                    />
                    <q-input
                      dense
                      borderless
                      v-model="storeDate.ofdActivate"
                      label="Дата активации"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-input
                      dense
                      borderless
                      v-model="storeDate.ofdExpire"
                      label="Окончание подписки"
                    />
                    <q-input
                      dense
                      borderless
                      v-model="outOfd"
                      label="Дней до замены"
                    />
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-input
                      dense
                      borderless
                      v-model="store.kkmFnNum"
                      label="Фискальный накопитель"
                    />
                    <q-input
                      dense
                      borderless
                      v-model="storeDate.fnActivate"
                      label="Дата активации"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-input
                      dense
                      borderless
                      v-model="storeDate.fnExpire"
                      label="Дата истечения"
                    />
                    <q-input
                      dense
                      borderless
                      v-model="outOfd"
                      label="Дней до замены"
                    />
                  </q-item-section>
                </q-item>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-list>
      </q-card>
      <!-- Инфо -->
      <q-card v-show="show.info" class="my-card bg-grey-2">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon color="purple-9" name="info" />
              <q-badge
                v-if="this.store.nightWorks != false"
                color="red"
                floating
                transparent
              >
                Ночные работы
              </q-badge>
              <q-badge
                v-else-if="this.store.agrWorks != false"
                color="orange"
                floating
                transparent
              >
                Согласование с ТЦ
              </q-badge>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-grey-8"><b>Инфо</b> </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-scroll-area style="height: 350px">
            <q-item>
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.baseNumber"
                  label="База 1С"
                />
                <q-input
                  dense
                  borderless
                  v-model="store.type"
                  label="Тип салона"
                />
                <q-input
                  dense
                  borderless
                  v-model="store.storeEnter"
                  label="Входов"
                />
              </q-item-section>
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="storeDate.open"
                  label="Открыт"
                />
                <q-input
                  dense
                  v-if="store.storeCloseDate != null"
                  borderless
                  v-model="store.storeCloseDate"
                  label="Закрыт"
                />
                <q-input
                  dense
                  borderless
                  v-model="store.storeArm"
                  label="Рабочих мест"
                />
                <q-input
                  dense
                  borderless
                  v-model="store.storeKkm"
                  label="Кассовых машин"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.storeCam"
                  label="Камер в салоне"
                />
              </q-item-section>
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.vpnDeviceT2"
                  label="Роутер Теле2"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.intVisCount"
                  label="Счётчик посетителей"
                />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.storeEmail"
                  label="Внутренний email"/>
                <q-input
                  dense
                  borderless
                  v-model="store.t2Email"
                  label="Почта Теле2"
              /></q-item-section>
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.storeEmailPW"
                  :type="isPwd ? 'password' : 'text'"
                  label="Пароль почты"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                <q-input
                  dense
                  borderless
                  v-model="store.t2EmailPW"
                  :type="isPwd ? 'password' : 'text'"
                  label="Пароль почты Теле2"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item v-if="store.storeArm >= '1'">
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.storeJabber1"
                  label="Jabber АРМ 1"
                />
              </q-item-section>
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.storeJabberPW1"
                  :type="isPwd ? 'password' : 'text'"
                  label="Пароль Jabber АРМ 1"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-item v-if="store.storeArm >= '2'">
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.storeJabber2"
                  label="Jabber АРМ 2"
                />
              </q-item-section>
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.storeJabberPW2"
                  :type="isPwd ? 'password' : 'text'"
                  label="Пароль Jabber АРМ 2"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-item v-if="store.storeArm >= '3'">
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.storeJabber3"
                  label="Jabber АРМ 3"
                />
              </q-item-section>
              <q-item-section>
                <q-input
                  dense
                  borderless
                  v-model="store.storeJabberPW3"
                  :type="isPwd ? 'password' : 'text'"
                  label="Пароль Jabber АРМ 3"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
          </q-scroll-area>
        </q-list>
      </q-card>
      <!-- Сетка -->
      <q-card v-show="show.network" class="my-card bg-grey-2">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon round color="grey-9" name="settings_ethernet" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-grey-8"><b>Сеть</b></q-item-label>
            </q-item-section>
            <q-badge dense color="secondary" transparent>
              {{ store.extSpeed }} mb/s
            </q-badge>
            <template v-slot:append>
              <q-icon name="speed"> </q-icon>
            </template>
          </q-item>
          <q-separator />

          <q-item>
            <q-item-section>
              <q-input
                dense
                borderless
                v-model="store.extProvider"
                label="Провайдер"
              />
              <q-input
                dense
                borderless
                v-model="store.extIp"
                label="Внешний IP"
              />
              <q-input
                dense
                borderless
                v-model="store.extMask"
                label="Маска подсети"
              />
              <q-input dense borderless v-model="store.extGate" label="Шлюз" />
              <q-input
                dense
                borderless
                v-model="store.extMask"
                label="DNS основной"
              />
              <q-input
                dense
                borderless
                v-model="store.extMask"
                label="DNS альтернативный"
              />
              <q-input
                dense
                v-if="store.intVisCount == 'MegaCount'"
                borderless
                v-model="store.intVisCountIP"
                label="IP счётчиков посетителей"
              />
              <q-input
                v-if="store.vpnDeviceT2 == 'Mikrotik'"
                dense
                borderless
                v-model="store.vpnIpT2"
                label="IP Mikrotik"
              />
            </q-item-section>
            <q-item-section>
              <q-input
                dense
                borderless
                v-model="store.extCost"
                label="Абонентская плата"
                mask="####.00 руб."
              >
              </q-input>
              <q-input
                dense
                borderless
                v-model="store.intIp"
                label="Подсеть салона"
              />
              <q-input
                dense
                borderless
                v-model="store.intPrint"
                label="IP принтера"
              />
              <q-input
                dense
                borderless
                v-model="store.intDvr"
                label="IP видеорегистратора"
              >
                <q-btn
                  flat
                  color="secondary"
                  icon="play_circle"
                  dense
                  round
                  type="a"
                  :href="`http://${store.extIp}:${store.intDvrPort}`"
                  target="__blank"
                >
                  <q-tooltip
                    anchor="top end"
                    self="center start"
                    content-class="bg-secondary"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    http://{{ store.extIp }}:{{ store.intDvrPort }}
                  </q-tooltip>
                </q-btn>
              </q-input>
              <q-input
                dense
                borderless
                v-model="store.intRouter"
                label="IP роутера"
              >
                <q-btn
                  flat
                  color="secondary"
                  icon="router"
                  dense
                  round
                  type="a"
                  :href="`http://${store.extIp}:${store.intRouterPort}`"
                  target="__blank"
                >
                  <q-tooltip
                    anchor="top end"
                    self="center start"
                    content-class="bg-secondary"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    http://{{ store.extIp }}:{{ store.intRouterPort }}
                  </q-tooltip>
                </q-btn>
              </q-input>
              <q-input
                dense
                v-if="store.intVisCount == 'MegaCount'"
                borderless
                v-model="store.intVisCountIP"
                label="IP счётчиков посетителей"
              />
              <q-input
                dense
                borderless
                v-model="store.intPosIP"
                label="IP эквайринга"
              />
              <q-input
                v-if="store.vpnDeviceT2 == 'Mikrotik'"
                dense
                borderless
                v-model="store.vnpPw"
                :type="isPwd ? 'password' : 'text'"
                label="Пароль Mikrotik"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <!-- Удалёнка -->
      <q-card v-show="show.remote" class="my-card bg-grey-2">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon round color="blue-9" name="support" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-blue-8"
                ><b>Удалённый доступ</b></q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label caption>TeamViewer</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-input
                dense
                borderless
                mask="### ### ###"
                v-model="store.tvArm1"
                label="АРМ 1"
              />
            </q-item-section>
            <q-item-section>
              <q-input
                dense
                borderless
                mask="### ### ###"
                v-model="store.tvArm2"
                label="АРМ 2"
              />
            </q-item-section>
            <q-item-section v-if="store.storeArm > '2'">
              <q-input
                dense
                borderless
                mask="### ### ###"
                v-model="store.tvArm2"
                label="АРМ 3"
              />
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section>
              <q-item-label caption>AmmyAdmin</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-input
                dense
                borderless
                mask="## ### ###"
                v-model="store.ammyArm1"
                label="АРМ 1"
              />
            </q-item-section>
            <q-item-section>
              <q-input
                dense
                borderless
                mask="## ### ###"
                v-model="store.ammyArm2"
                label="АРМ 2"
              />
            </q-item-section>
            <q-item-section v-if="store.storeArm > '2'">
              <q-input
                dense
                borderless
                mask="## ### ###"
                v-model="store.ammyArm2"
                label="АРМ 3"
              />
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section>
              <q-item-label caption
                >Windows Remote Desktop Protocol (RDP)</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-input dense borderless v-model="store.rdpArm1" label="АРМ 1" />
            </q-item-section>
            <q-item-section>
              <q-input dense borderless v-model="store.rdpArm2" label="АРМ 2" />
            </q-item-section>
            <q-item-section v-if="store.storeArm > '2'">
              <q-input dense borderless v-model="store.rdpArm2" label="АРМ 3" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <!-- Доп.сервисы -->
      <q-card v-show="show.addons" class="my-card bg-grey-2">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon round color="cyan-9" name="extension" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-grey-8"
                ><b>Доп.сервисы</b></q-item-label
              >
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section>
              <q-input
                dense
                borderless
                v-model="store.musicPlayer"
                label="Retail Music Player"
              />
              <q-input
                dense
                borderless
                v-model="store.tekoActive"
                label="Теко"
              />
              <q-input
                dense
                borderless
                v-model="store.virtualStore"
                label="Вирт.витрина"
              />
              <q-input
                v-if="store.vpnDeviceT2 != 'Не установлен'"
                dense
                borderless
                v-model="store.camT2"
                label="Камера Теле2"
              />
              <q-input
                dense
                borderless
                v-model="store.storeZombo"
                label="Телевизор"
              />
            </q-item-section>
            <q-item-section>
              <q-input
                v-model="store.musicMixer"
                dense
                borderless
                label="Аудиомикшер"
              />
              <q-input
                v-model="storeDate.tekoAccept"
                dense
                borderless
                label="Дата акцепта сертификата Теко"
              />
              <q-input
                v-model="storeDate.tekoAccept"
                dense
                borderless
                label="Сертификат Теко истекает"
              />
              <q-input
                v-model="store.hotspot"
                dense
                borderless
                label="HotSpot"
              />
              <q-input
                v-model="store.storeRtk"
                dense
                borderless
                label="Сертификат РТК"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<script>
import { date } from 'quasar'
const rusLocale = date.extractDate({
  days: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ],
  daysShort: ['Вск', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ],
  monthsShort: [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек'
  ]
})

export default {
  props: {
    show: Object,
    store: Object
  },
  data () {
    return {
      kkmTab: 'one',
      storeDate: {
        open: date.formatDate(
          this.store.storeOpenDate,
          'DD.MM.YYYY',
          rusLocale
        ),
        ofdActivate: date.formatDate(
          this.store.kkmOfdData,
          'DD.MM.YYYY',
          rusLocale
        ),
        ofdExpire: date.formatDate(
          this.store.kkmOfdData,
          'DD.MM.YYYY',
          rusLocale
        ),
        fnActivate: date.formatDate(
          this.store.kkmFnData,
          'DD.MM.YYYY',
          rusLocale
        ),
        tekoAccept: date.formatDate(
          this.store.tekoDate,
          'DD.MM.YYYY',
          rusLocale
        ),
        fnExpire: date.formatDate(this.store.kkmFnData, 'DD.MM.YYYY', rusLocale)
      },
      storeType: null,
      isPwd: true,
      outOfd: '365'
    }
  },
  methods: {
    toRouter () {
      console.log('нажал на кнопку роутера')
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
</style>
