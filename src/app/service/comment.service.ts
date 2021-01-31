import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
  getCommentByPost(idPost: string | null) {
    return this.httpClient.get('comments/posts/'+idPost)
  }
  PostComment(comment:any){
    return this.httpClient.post('comments/', comment)
  }
}
