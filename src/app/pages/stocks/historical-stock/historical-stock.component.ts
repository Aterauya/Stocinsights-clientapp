import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HistoricalStock } from '../historical-stock'
import { StockHttpService } from '../stocks-services/stock-http.service'
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import {
  ChartComponent, ApexAxisChartSeries, ApexChart, ApexYAxis,
  ApexXAxis, ApexTitleSubtitle
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-historical-stock',
  templateUrl: './historical-stock.component.html',
  styleUrls: ['./historical-stock.component.css']
})
export class HistoricalStockComponent implements OnInit {

  constructor(private stockService: StockHttpService) { }

  @Input() ticker: string;
  @Input() companyName: string;

  historicalStocks: any[] = [];

  graphDataLoaded = false;

  chartOptions: Partial<ChartOptions>;


  closingPrices: number[] = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;


  ngOnInit(): void {
    this.getHistoricalStocks();
    this.buildChart();
    console.log(this.graphDataLoaded);
  }

  getHistoricalStocks() {
    this.stockService
      .getHistoricalStock(this.ticker)
      .subscribe(res => {
        console.log(res);
        res.forEach(element => {
          this.historicalStocks.push({
            x: element.closingDateTime, y: [element.openingPrice,
            element.highPrice, element.lowPrice, element.closePrice]
          })
        });
        this.graphDataLoaded = true;
      })
  }

  buildChart() {
    this.chartOptions = {
      series: [
        {
          name: "candle",
          data: this.historicalStocks
        }
      ],
      chart: {
        type: "candlestick",
        height: 350
      },
      title: {
        text: "CandleStick Chart",
        align: "left"
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };
  }
}
