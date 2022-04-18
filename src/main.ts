import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  // var whitelist = ['http://localhost:4000']
  // app.enableCors({
  //   origin: function (origin, callback) {
  //     console.log('==============');
  //     console.log(origin);
  //     if (whitelist.indexOf(origin) !== -1) {
  //       console.log("allowed cors for:", origin)
  //       callback(null, true)
  //     } else {
  //       console.log("blocked cors for:", origin)
  //       callback(new Error('Not allowed by CORS'))
  //     }
  //   },
  //   allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
  //   methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
  //   credentials: true,
  // });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env?.port || 3000);
}
bootstrap();
