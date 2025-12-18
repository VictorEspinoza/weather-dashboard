import { Component, signal, inject } from '@angular/core';
import { WeatherCardComponent } from './features/weather-card/weather-card.component';
import { WeatherService } from './features/weather-dashboard/weather.service';

@Component({
  selector: 'app-root',
  imports: [WeatherCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Weather dashboard');

  private readonly weatherService = inject(WeatherService);

  weatherData = this.weatherService.data;
  isLoading = this.weatherService.isLoading;
  error = this.weatherService.error;

  handleSearch(city: string) {
    this.weatherService.searchCity(city);
  }
}
