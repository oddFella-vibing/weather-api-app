import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherData } from '../weatherData';
import { forecastData } from '../forecastData';
@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  weatherRes!: weatherData;
  forecastREs!: forecastData;

  // 8e2ed979b5b418b54ad37a37e105a113
  current_API_ENDPOINT =
    'http://api.weatherstack.com/current?access_key=6390cec280216809986ad1972aa1dbdd&query=';
  forecast_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  constructor(public httpclient: HttpClient) {}

  getCurrentWeather(city: string) {
    return this.httpclient.get(
      this.current_API_ENDPOINT +
        city +
        '&appid=8e2ed979b5b418b54ad37a37e105a113'
    );
  }
  getForecast(city: string) {
    return this.httpclient.get(
      this.forecast_API_ENDPOINT +
        city +
        '&units=metric&appid=8e2ed979b5b418b54ad37a37e105a113'
    );
  }
 
}
