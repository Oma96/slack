import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from '../model/channel';
import { environment } from 'src/app/environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  private urlApi:string;
  public collection$: Observable<Channel[]>

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$= this.httpClient.get<Channel[]>(this.urlApi + '/channels');
   }


   public add(channel:Channel): Observable<Channel>{
    return this.httpClient.post<Channel>(`${this.urlApi}/channels`,channel)
}
}
