/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';

@Module({
  imports: [
    UsersModule, 
    ReportsModule, 
    TypeOrmModule.forRoot(
      {
        type: 'sqlite',
        database: 'db.sqlite',
        entities: [User, Report],
        // used for updating automatocally Database table if there is a structure changes, unstade of migration
        synchronize: true,
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
