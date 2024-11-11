import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { LoggingMiddleware } from './middleware/logging.middleware';
import ConfigModule from './config'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'contents_dev',
      password: 'contents_dev',
      database: 'contentsdevdb',
      entities: [ __dirname + '/**/*.entity.{.ts,.js}'],
      synchronize: true,
    }),
    BoardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggingMiddleware).forRoutes(BoardController);
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
