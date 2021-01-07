import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any = [];
  user_data : any;
  constructor(private http : HttpClient) {
    this.http.get('assets/scoreCard.json').subscribe(res => {
      console.log(res['data']);
      this.user_data = res['data']
      this.data = res['data']['scorecard'];
      // this.data[0].open = true;
  });  
}

toggleItem(index){
  this.data[index].open = !this.data[index].open;
}

}
