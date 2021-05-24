const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StoreSchema = new Schema({
  posid: {
    type: String,
    unique: true
  },
  adr: {
    type: String
  },
  agrWorks: {
    type: Boolean
  },
  baseNumber: {
    type: Number
  },
  nightWorks: {
    type: Boolean
  },
  extIp: {
    type: String
  },
  extProvider: {
    type: String
  },
  extSpeed: {
    type: Number
  },
  storeActive: {
    type: Boolean
  },
  storeCam: {
    type: Number
  },
  storeCloseDate: {
    type: Date
  },
  storeOpenDate: {
    type: Date
  },
  type: {
    type: String
  },
  extDNS1: {
    type: String
  },
  extDNS2: {
    type: String
  },
  extGate: {
    type: String
  },
  extMask: {
    type: String
  },
  intIp: {
    type: String
  },
  vnpPw: {
    type: String
  },
  vpnDeviceT2: {
    type: String
  },
  rttPhone: {
    type: String
  },
  vpnIpT2: {
    type: String
  },
  ammyArm1: {
    type: Number
  },
  ammyArm2: {
    type: Number
  },
  camT2: {
    type: String
  },
  hotspot: {
    type: String
  },
  kkmFactNum: {
    type: Number
  },
  kkmFnAct: {
    type: Boolean
  },
  kkmFnData: {
    type: Date
  },
  kkmFnMod: {
    type: Number
  },
  kkmFnNum: {
    type: Number
  },
  kkmModel: {
    type: String
  },
  kkmOfdAct: {
    type: Boolean
  },
  kkmOfdData: {
    type: Date
  },
  kkmOfdMod: {
    type: Number
  },
  kkmRegNum: {
    type: Number
  },
  kkmRegReasonCode: {
    type: Number
  },
  musicPlayer: {
    type: String
  },
  rttCam: {
    type: String
  },
  storeEmail: {
    type: String
  },
  storeJabber1: {
    type: String
  },
  storeJabber2: {
    type: String
  },
  storeJabber3: {
    type: String
  },
  storeJabberPW1: {
    type: String
  },
  storeJabberPW2: {
    type: String
  },
  storeJabberPW3: {
    type: String
  },
  storeRtt: {
    type: String
  },
  storeZombo: {
    type: String
  },
  svCam: {
    type: String
  },
  svEmail: {
    type: String
  },
  svName: {
    type: String
  },
  svPhone: {
    type: String
  },
  t2Email: {
    type: String
  },
  t2EmailPW: {
    type: String
  },
  tekoActive: {
    type: String
  },
  tekoDate: {
    type: Date
  },
  terrEmail: {
    type: String
  },
  terrName: {
    type: String
  },
  terrPhone: {
    type: String
  },
  tvArm1: {
    type: Number
  },
  tvArm2: {
    type: Number
  },
  virtualStore: {
    type: String
  }
})
const StoreModel = mongoose.model('stores', StoreSchema)
module.exports = StoreModel
