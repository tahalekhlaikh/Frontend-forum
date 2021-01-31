import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themes:any;
  constructor(private httpClient:HttpClient) { }
  getalltheme(){
    return this.httpClient.get('themes');
  }
  deletetheme(idtheme:number){
    return this.httpClient.delete('themes/'+ idtheme);
  }
  addtheme(newtheme:any){
    return this.httpClient.post('themes',newtheme);
  }

}
