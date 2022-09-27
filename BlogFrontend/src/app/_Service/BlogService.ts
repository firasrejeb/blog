import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../_Model/Blog';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    private getblogUrl =
        environment.apiBlogUrl + 'blog/v1/blog';
    constructor(private http: HttpClient) {}
    addBlog(blog: Blog): Observable<Blog> {
        return this.http.post<Blog>(this.getblogUrl, blog);
    }

    getALLBlogs(): Observable<Array<Blog>> {
        return this.http.get<Array<Blog>>(this.getblogUrl );
    }

    getBlog(id: number): Observable<any> {
        // @ts-ignore
        return this.http.get<any>(this.getblogUrl + '/' + id);
    }
    upvote(id: string): Observable<any> {
        // @ts-ignore
        return this.http.patch<any>(this.getblogUrl + '/' + id );
    }
    downvote(id: string): Observable<any> {
        // @ts-ignore
        return this.http.patch<any>(this.getblogUrl + '/' + id + '/down');
    }

}
