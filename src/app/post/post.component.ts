import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
   idTheme: any;
   post :any
  constructor(private postService:PostService,private  router:ActivatedRoute) { }

  ngOnInit(): void {
   this.router.paramMap.subscribe((param)=>{
     if(param.has('idTheme'))
     {
       this.idTheme=param.get('idTheme')
       this.postService.getPostByTheme(this.idTheme).subscribe((data:any)=>{
         this.post=data
       })
     }
   })
  }
  AddPost(newpost: NgForm, idTheme: string) {
    let postData = {"message":newpost.value['message'],"titre":newpost.value['titre'],"theme":idTheme}
    this.postService.addpost(postData).subscribe((res:any)=>{
      newpost.resetForm()
      this.ngOnInit()
    })

}
}
