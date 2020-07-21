import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-examcomplete',
  templateUrl: './examcomplete.component.html',
  styleUrls: ['./examcomplete.component.scss']
})
export class ExamcompleteComponent implements OnInit {

  constructor(private http:HttpClient ) {}

  blockChain: string;


  ngOnInit() {
  var data = JSON.stringify({"canonicalId":"HarryPotter","claims":[{"key":"nam","value":"HarryPotter"},{"key":"dgr","value":"Knowledge of Magic"},{"key":"rnk","value":"A1"},{"key": "iss","value": "Ministry of Magic"}]});

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "http://44.233.202.250:8080/v1/verifiableCredential");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Accept", "text/plain");

  xhr.send(data);
  }

}
