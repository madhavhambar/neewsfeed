import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';
import { NewsResponse } from '../dashboard/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  async GetNewsFeeds(): Promise<NewsResponse> {
    const promise = new Promise<NewsResponse>((resolve, reject) =>
      this.http.get('https://newsapi.org/v2/top-headlines?language=en&apiKey=d948c11e91b04de9bbcd5bb0065a395c').subscribe(
        (response: NewsResponse) => {
          // console.log(response);
          resolve(response);
        },
        err => { console.log(err); reject(err); }
      )
    );
    return promise;
  }
}
