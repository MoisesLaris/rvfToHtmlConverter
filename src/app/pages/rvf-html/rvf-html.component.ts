import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rvf-html',
  templateUrl: './rvf-html.component.html',
  styleUrls: ['./rvf-html.component.scss']
})
export class RvfHtmlComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onChange(files: FileList){
    let formData = new FormData();
    for(let i = 0; i < files.length; i++){
      let file = files.item(i);
      formData.set("userfile", file, file.name);
      this.uploadFile(formData);
    }
  }
  
  uploadFile(formData){
    const headerDict = {
      'Content-Type': 'multipart/form-data',
      'Accept': '*/*',
    }

    console.log(formData);


    this.http.post('https://service2.coolutils.org/upload.php', formData).toPromise()
    .then((res: HttpErrorResponse) => {
      console.log(res.error.text);
    })
    .catch((rej: HttpErrorResponse) => {

      let formData = new FormData();
      formData.append("Flag", "3");
      formData.append("Ref", "/es/online/RVF-to-HTML");
      formData.append("srcfile", rej.error.text);
      formData.append("fmt", "htm");

      this.downloadFile(formData);
    });
  }

  downloadFile(formData){


    this.http.post('https://service2.coolutils.org/word_convert.php', formData).toPromise()
    .then((res) => {
      console.log(res);
    })
    .catch((rej: HttpErrorResponse) => {
      console.log(rej.error.text);
      this.download('file.html', rej.error.text);
    });
  }


  download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

}
