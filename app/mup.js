module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '118.190.159.131',
      username: 'root',
      // pem: './path/to/pem'
      password: 'shunfengchuanbo1A'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'app',
    path: '/Users/peihanchao/workspace/ldy/app',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://999.988rmb.com',
      MONGO_URL: 'mongodb://localhost:27017/meteor',
      PORT: 1001
    },

    // ssl: { // (optional)
    //   // Enables let's encrypt (optional)
    //   autogenerate: {
    //     email: 'email.address@domain.com',
    //     // comma separated list of domains
    //     domains: 'website.com,www.website.com'
    //   }
    // },

    docker: {
      // change to 'kadirahq/meteord' if your app is using Meteor 1.3 or older
      image: 'abernix/meteord:base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    port: 27017,
    servers: {
      one: {}
    }
  }
};
