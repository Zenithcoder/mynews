import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  news: any = [];
  data:any =[];
  value:any ='ng';

  constructor(public http: HttpClient
    
  ) { }

  ngOnInit() {
    this.updateNews();
  }

  updateNews(){
    this.http.get('https://newsapi.org/v2/top-headlines?country='+this.value+'&apiKey=907ca5b1635f49619e15894a3613041f').subscribe((response) => {
      console.log(response);
     // this.news = response.articles;
      this.data =response;
      this.news = this.data.articles;
      console.log(this.news);
  });
  }

}
