import { Injectable, signal, computed } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../../../environments/environment';


export interface WeatherData {
  main: { temp: number; humidity: number };
  wind: { speed: number };
  weather: { main: string; description: string }[];
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly cityName = signal<string>('London');

  weatherResource = httpResource<WeatherData>(() => {
    return `${environment.weatherApiUrl}?q=${this.cityName()}&appid=${environment.weatherApiKey}&units=metric`
  });


  data = computed(() => this.weatherResource.value());
  isLoading = computed(() => this.weatherResource.isLoading());
  error = computed(() => this.weatherResource.error());


  searchCity(newCity: string) {
    if (newCity.trim()) {
      this.cityName.set(newCity);
    }
  }
}
