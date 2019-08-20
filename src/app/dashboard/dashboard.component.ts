import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from './news.model';
declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newsList: News[];
  searchkey: string;
  displayNewsList: News[];

  constructor(private newsService: NewsService) { }

  async ngOnInit() {
    const news = await this.newsService.GetNewsFeeds();
    this.newsList = news.articles;
    this.displayNewsList = this.newsList;
    console.log(news);
  }

  OpenNewTab(url: string) {
    window.open(url, '_blank', 'location=yes,height=700,width=1000,scrollbars=yes,status=yes');
  }

  FilterByKey() {
    this.displayNewsList = this.newsList.filter(e => {
      return e.title.toLowerCase().indexOf(this.searchkey) > -1
        || e.source.name.toLowerCase().indexOf(this.searchkey) > -1;
    });
  }

}
