import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Alashank API',
    description: 'E-learning app',
  },
  servers: [
    {
      url: 'http://localhost:3005',
      description: 'local server',
    },
    // {
    //   url: 'https://codoctor.onrender.com',
    //   description: 'remote server',
    // },
  ],
  definitions: {},
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
};

const outputFile = './swagger/swagger.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc).then(
  () => {
    import('../app.js');
  }
);
