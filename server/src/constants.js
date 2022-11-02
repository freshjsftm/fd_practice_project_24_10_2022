require('dotenv').config()

const {
  env: {
    ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_TIME,
    REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_TIME,
    SQUADHELP_BANK_NUMBER,
    SQUADHELP_BANK_NAME,
    SQUADHELP_BANK_CVC,
    SQUADHELP_BANK_EXPIRY
  }
} = process;

module.exports = {
  // ACCESS_TOKEN_SECRET: 'secret_for_access_token',
  // ACCESS_TOKEN_TIME: '2m',
  // REFRESH_TOKEN_SECRET: 'secret_for_refresh_token',
  // REFRESH_TOKEN_TIME: '5m',

  // SQUADHELP_BANK_NUMBER: '4564654564564564',
  // SQUADHELP_BANK_NAME: 'SquadHelp',
  // SQUADHELP_BANK_CVC: '453',
  // SQUADHELP_BANK_EXPIRY: '11/22',

  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_TIME,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_TIME,
  SQUADHELP_BANK_NUMBER,
  SQUADHELP_BANK_NAME,
  SQUADHELP_BANK_CVC,
  SQUADHELP_BANK_EXPIRY,

  MAX_DEVICE_AMOUNT: 3,
  SALT_ROUNDS: 5,

  // ROLES:{
  //   CUSTOMER: 'customer',
  //   CREATOR: 'creator',
  // },
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CREATOR_ENTRIES: 'creator_entries',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  CONTESTS_DEFAULT_DIR: 'public/contestFiles/',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_PENDING: 'pending',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  FILES_PATH: 'public/',
  SOCKET_CONNECTION: 'connection',
  SOCKET_SUBSCRIBE: 'subscribe',
  SOCKET_UNSUBSCRIBE: 'unsubscribe',
  NOTIFICATION_ENTRY_CREATED: 'onEntryCreated',
  NOTIFICATION_CHANGE_MARK: 'changeMark',
  NOTIFICATION_CHANGE_OFFER_STATUS: 'changeOfferStatus',
  NEW_MESSAGE: 'newMessage',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS'
}
