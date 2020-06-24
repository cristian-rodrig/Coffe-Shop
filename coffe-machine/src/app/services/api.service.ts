import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiName = environment.baseApiUrl;
  
  constructor(public http: HttpClient) { }

  public getUrl(url: string, parameter?: Array<string>): Promise<any> {
    if (parameter && url && url.indexOf('{') !== -1) {
      parameter.forEach(p => {
        url = url.replace(/{[a-zA-Z_]*}/, p);
      });
    }
    return <Promise<any>>this.http.get(this.apiName + url).toPromise();
  }

}
