export const environment = {
  production: true,
  envName: 'prod-id',

  servers: {
    data: 'https://data.petabencana.id/',
    sensors: 'https://sensors.petabencana.id/',
    settings: {
      reportTimeperiod: 43200
    }
  },

  map: {
    accessToken: 'pk.eyJ1IjoidXJiYW5yaXNrbWFwIiwiYSI6ImNpdmVhbTFraDAwNHIyeWw1ZDB6Y2hhbTYifQ.tpgt1PB5lkJ-wITS02c96Q',
    center: [106.8271, -6.1754],
    initZoom: 10,
    minZoom: 8,
    baseMapStyle: 'mapbox://styles/urbanriskmap/ciwce3tim00532pocrokb7ojf'
  },

  locales: {
    supportedLanguages: [
      {code: 'en', name: 'English'},
      {code: 'id', name: 'Bahasa'}
    ],
    defaultLanguage: 'id',
    timezone: 'Asia/Jakarta'
  }
};
