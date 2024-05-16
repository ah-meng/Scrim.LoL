import { Module } from '@nestjs/common';
import { RiotService } from './riot.service';
import { RiotController } from './riot.controller';
import {ConfigModule} from "@nestjs/config";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports:[HttpModule, ConfigModule],
  providers: [RiotService],
  controllers: [RiotController]
})
export class RiotModule {}
