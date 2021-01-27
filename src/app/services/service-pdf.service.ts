import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
@Injectable({

  providedIn: 'root'
})
export class ServicePdfService {

  constructor(private _http:HttpClient) { }

  donwloadPdf() {
    const REQUEST_URI = '/pdf5'
    return this._http.get(REQUEST_URI, {
     // params: REQUEST_PARAMS, 
      responseType: 'arraybuffer'
    })
  }
   donwloadPdf2() {
    return this._http.get('https://app-api-trabajex.herokuapp.com/api/admin/reports')
  }
  getPdf(url){
    return this._http.get(url)
  }
}
