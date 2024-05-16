import {Controller, Get, Param} from '@nestjs/common';
import {RiotService} from "./riot.service";

@Controller('riot')
export class RiotController {

    constructor(private readonly service: RiotService) {
    }

    @Get('/:name')
    async getSummonerByName(@Param('name') name: string){
        return this.service.getSummonerByName(name);
    }
}
