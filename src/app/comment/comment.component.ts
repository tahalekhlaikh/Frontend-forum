import { Component, OnInit } from '@angular/core';
import {CommentService} from '../service/comment.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  idPost: any;
  comment :any;
  constructor(private commentService:CommentService,private  router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((param)=>{
      if(param.has('idPost'))
      {
        this.idPost=param.get('idPost')
        this.commentService.getCommentByPost(this.idPost).subscribe((data:any)=>{
          this.comment=data
        })
      }
    })
  }

  AddComment(newcomment: NgForm, idPost: string) {
    let commentData = {"message":newcomment.value['message'],"pseud":newcomment.value['pseud'],"post":idPost}
    this.commentService.PostComment(commentData).subscribe((res:any)=>{
      newcomment.resetForm()
      this.ngOnInit()
    })
  }





}
