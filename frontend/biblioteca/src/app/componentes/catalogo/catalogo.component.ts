import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  livros: any[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLivros();  
  }


  getLivros(): void {
    this.http.get<any[]>('http://localhost:4200/api/livros') 
      .subscribe(
        (data) => {
          this.livros = data; 
        },
        (error) => {
          console.error('Erro ao carregar os livros:', error);  
        }
      );
  }
}
