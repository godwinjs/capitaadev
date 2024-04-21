import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

/*
your app will exit with the code 1. If you want to make it throw an error 
instead disable the option abortOnError (e.g., 
  NestFactory.create(AppModule, { abortOnError: false })).
*/
