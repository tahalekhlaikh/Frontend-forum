import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../service/theme.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  themes:any;

  Backend_URL=environment;
  constructor(private themeService:ThemeService) { }
  ngOnInit(): void {
    this.themeService.getalltheme()
      .subscribe(
        data => {
          this.themes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  Addtheme(newtheme: NgForm) {
    let themeData = {"titre":newtheme.value['titre'],"description":newtheme.value['description']}
    this.themeService.addtheme(themeData).subscribe((res:any)=>{
      newtheme.resetForm()
      this.ngOnInit()
    })
  }


}
