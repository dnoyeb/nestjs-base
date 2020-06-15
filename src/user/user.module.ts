import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule,TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UserService],
  exports:[UserService]
})
export class UsersModule {}
