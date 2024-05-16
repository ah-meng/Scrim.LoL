import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class RiotService {

    private readonly baseUrl: string = 'https://asia.api.riotgames.com';
    private readonly apiKey:string

    constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
        this.apiKey = configService.get<string>('RIOT_API_KEY');

    }

    async getSummonerByName(summonerName: string): Promise<any> {
        var gameName = '자바자바칩'
        var tagLine = 'KR1'
        const url = `${this.baseUrl}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
        const response = await this.httpService.get(url, {
            headers: {
                'X-Riot-Token': this.apiKey,
            },
        }).toPromise();

        return response.data;
    }
}
