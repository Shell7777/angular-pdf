import { Component, OnInit } from '@angular/core';
import {ServicePdfService} from 'src/app/services/service-pdf.service'
import {saveAs} from 'file-saver'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fileUrl
  deactivate = false 
  constructor(private _service:ServicePdfService) { }

  ngOnInit(): void {
  }

  getReportPdf(){
    this._service.getPdf('http://127.0.0.1:8000/pdf5').subscribe(data=>{

      const a = document.createElement('a')
      const objectUrl = URL.createObjectURL(data)
      a.href = objectUrl
     // a.download = 'archive.pdf';
      a.click();
      URL.revokeObjectURL(objectUrl)
    }
    )
  }
  download(){
    this.deactivate = true
    this._service.donwloadPdf()
      .subscribe(data=>{
        this.deactivate = false
        saveAs(new Blob([data],
            {type: 'application/pdf'}))
      })
  }
  download2(){
    this._service.donwloadPdf2().subscribe((data:any)=>{
      saveAs(new Blob([data],{type: 'application/pdf'}))
      
      })


  }

}
