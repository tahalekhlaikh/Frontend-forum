import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getPostByTheme(idTheme: string | null) {
    return this.httpClient.get('posts/themes/'+idTheme)
  }
  addpost(newpost:any){
    return this.httpClient.post('posts',newpost);
  }
}
