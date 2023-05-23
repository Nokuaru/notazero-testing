import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable()
export class GetpostService {
  jsonData: Promise<any> = this.getFetch();

  public enviarPOST() {
    let id = <HTMLInputElement>document.getElementById('materia');
    let parcial1 = <HTMLInputElement>document.getElementById('parcial1');
    let parcial2 = <HTMLInputElement>document.getElementById('parcial2');
    let final = <HTMLInputElement>document.getElementById('final');

    let obj = {
      id: id.value,
      parcial1: parcial1.value,
      parcial2: parcial2.value,
      final: final.value
    };

    fetch("https://qhhfu8cg5g.execute-api.us-east-1.amazonaws.com/items", {
      method:'PUT',
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      
      body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))
      console.log(obj);
      setTimeout(function(){
        window.location.reload();
     }, 1000);

  }

  public getFetch(): Promise<any[]> {
    return fetch('https://qhhfu8cg5g.execute-api.us-east-1.amazonaws.com/items', {
      method: 'GET',

    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch((error) => {
        throw error;
      });
  }}


/*
    fetch("https://qhhfu8cg5g.execute-api.us-east-1.amazonaws.com/items", {
      method:'PUT',
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      
      body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))

       headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS

      },
      
}} */

