import {Route, Get, Post, Body, Put} from 'tsoa';
import { Period, IPeriod } from '../models';
import BaseCtrl from './base';

@Route('/periods')
export class PeriodsCtrl extends BaseCtrl {
    model = Period;

    @Get()
    public async _getAll(): Promise<any> {
        return this.getAll();
    }

    @Put()
    public async _insert(@Body() period: IPeriod): Promise<any> {
        return this.insert(period);
    }

    @Post('{id}')
    public async _update(id: any, @Body() period: IPeriod): Promise<any> {
        return this.update(id, period);
    }

    @Get('{id}')
    public async _get(id: any): Promise<any> {
        return this.get(id);
    }
}