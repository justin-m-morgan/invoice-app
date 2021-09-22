import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const dynamic_port = process.env.PORT
const static_port = 3001

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(dynamic_port || static_port);
}
bootstrap();
