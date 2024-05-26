import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Report } from './reports/rerport.entity';

@Module({
  // Point1 : we import typrOrm here and it will automatically pass theiugh our whole app
  // Point2: create entites file
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      // with this name new project is created in project
      database: 'db1.sqlite',
      // Point5: connecting entity here.
      entities: [User, Report],
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
