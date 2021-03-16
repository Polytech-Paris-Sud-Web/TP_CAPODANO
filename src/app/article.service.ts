import { Injectable } from '@angular/core';
import {Article} from './models/article';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>("http://localhost:3000/articles/" + id);
  }

  public postArticle(article: Article): Observable<any> {
    return this.http.post("http://localhost:3000/articles/", article);
  }
}
