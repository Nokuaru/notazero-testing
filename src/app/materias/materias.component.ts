import { Component } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css'],
})
export class MateriasComponent {


  enviarPOST() {
    let materia = <HTMLInputElement>document.getElementById("materia");
    let parcial1 = <HTMLInputElement>document.getElementById("parcial1");
    let parcial2 = <HTMLInputElement>document.getElementById("parcial2");
    let final = <HTMLInputElement>document.getElementById("final");
    
    let obj = {
      
      price: parcial1.value,
      name: parcial2.value,
    }
    /*fetch("https://qhhfu8cg5g.execute-api.us-east-1.amazonaws.com/items/1"), {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
    
    }
    

*/
    fetch("https://qhhfu8cg5g.execute-api.us-east-1.amazonaws.com/items", {
      method:'PUT',
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      
      body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))

      
}}