import { Component, OnInit } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common'; 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class SearchBarComponent implements OnInit {
  resultados: any[] = [];

  ngOnInit(): void {}

  async buscar(event: any) {
    const query = event.target.value;

    if (query && query.length > 2) { 
      const options = {
        url: 'https://api.opentripmap.com/0.1/en/places/autosuggest',
        params: { apikey: '5ae2e3f21c38a28845f05b644f598ea411234cc4b5aa4e1da7e2344', name: query }
      };

      try {
        const response = await Http.get(options);
        this.resultados = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      this.resultados = []; 
    }
  }
}
