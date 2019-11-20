import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/core/models/list.model';
import { isNumber } from 'util';
import { Temp } from 'src/app/core/models/temp.model';
import { empty } from 'rxjs';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  data;
  value = 0.0;

  ngOnInit() {
    this.api.weatherService.getList().subscribe(
      (data)=>{
        console.log(data.data.list);
        this.data = data.data;
      },
      (error)=>{
        
      }
    )
  }

  addValue(){
    if(isNumber(Number(this.value))){
      this.data.list.push(new List(0, Temp.empty(), 0,0,[],0,this.value*10,0,0));
    }else{
      console.log("non");
    }
  }

  getAVG(){
    let sum =0;
    this.data.list.forEach(element => {
      sum += (element.deg/10);
    });
    return (sum/this.data.list.length);
  }

  getMax(){
    let max = -9999999999;
    this.data.list.forEach(element => {
      if(element.deg/10 > max)
      max = element.deg/10
    });
    return max;
  }

  getMin(){
    let min = 999999999;
    this.data.list.forEach(element => {
      if(element.deg/10 < min)
      min = element.deg/10
    });
    return min;
  }

  getMed(){
    let values = [];

    this.data.list.forEach(element => {
      values.push(element.deg/10);
    });

    if(values.length ===0) return 0;
  
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
  
    if (values.length % 2)
      return values[half];
  
    return (values[half - 1] + values[half]) / 2.0;
  }


}
