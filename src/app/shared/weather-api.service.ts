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

  current_API_ENDPOINT =
    'http://api.weatherstack.com/current?access_key=6390cec280216809986ad1972aa1dbdd&query=';
  forecast_API_ENDPOINT =
    'http://api.weatherstack.com/forecast?access_key=6390cec280216809986ad1972aa1dbdd&query=';
  constructor(public httpclient: HttpClient) {}

  getCurrentWeather(city: string) {
    return this.httpclient.get(this.current_API_ENDPOINT + city);
  }
  getForecast() {
    this.httpclient
      .get(this.forecast_API_ENDPOINT + 'London' + '&forecast_days=5')
      .subscribe((res: any) => {
        console.log(res);
        //   this.forecastREs={
        //     temperature:'',
        //     weather_description:''
        //   }
        //  return this.forecastREs;
      });
  }
  getMockData() {
    const mockData: forecastData[] = [
      {
        temperature: '15',
        weather_description: 'sunny',
      },
      {
        temperature: '16',
        weather_description: 'sunny',
      },
      {
        temperature: '17',
        weather_description: 'sunny',
      },
      {
        temperature: '15',
        weather_description: 'rain',
      },
      {
        temperature: '18',
        weather_description: 'sunny',
      },
    ];
    return mockData;
  }
}
