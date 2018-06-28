export const environment = {
  production: true,
  envName: 'prod-in',

  servers: {
    data: 'https://data.riskmap.in/',
    sensors: 'https://sensors.riskmap.in/',
    web_app: 'https://riskmap.in/',
    settings: {
      reportTimeperiod: 43200
    }
  },

  map: {
    accessToken: 'pk.eyJ1IjoiYXNiYXJ2ZSIsImEiOiI4c2ZpNzhVIn0.A1lSinnWsqr7oCUo0UMT7w',
    center: [80.23, 13.06],  // map initializes on chennai
    initZoom: 10,
    minZoom: 9,
    baseMapStyle: 'mapbox://styles/mapbox/light-v9'
  },

  locales: {
    supportedLanguages: [
      {code: 'en', name: 'English'},
      {code: 'hi', name: 'Hindi'},
      {code: 'ta', name: 'Tamil'},
      {code: 'mr', name: 'Marathi'},
      {code: 'kn', name: 'Kannada'},
      // {code: 'bn', name: 'Bengali'}
    ],
    defaultLanguage: 'en',
    timezone: 'Asia/Kolkata'
  },

  networks: {
    contact_links: {
      flag_email: 'riskmap@mit.edu'
    },

    deep_links: [
      {name: 'facebook', link: 'http://m.me/riskmapbot'},
      // {name: 'twitter', link: 'https://twitter.com/intent/tweet?text=Report+flood&via=riskmapindia'},
      // TODO:  Turned off - need to turn on after DM is deployed
      {name: 'telegram', link: 'https://telegram.me/riskmapbot'}
    ]
  }
};
