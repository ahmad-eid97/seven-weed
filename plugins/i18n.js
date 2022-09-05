import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18nData from './i18nData'


Vue.use(VueI18n);
const dateTimeFormats = {
  'en': {
    short: {
      month: 'short',
      day: 'numeric',
      weekday: 'long'
    }
  },
  'ar': {
    short: {
      month: 'short',
      day: 'numeric',
      weekday: 'long'
    }
  }
}

export default new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: i18nData,
    dateTimeFormats
  })