import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('NestApplication');

  logger.log(process.env.PORT);
  // logger.log(`Stage: ${JSON.stringify(process.env)}`);
  logger.log(process.env.DB_USERNAME);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);

  //await app.listen(config.app.port, () => logger.log(`Application listening on port ${"a"}:${"a"}`));
}
bootstrap();
