import { ChartData } from "chart.js";

export interface IStatistics {
  new_clients: {
    number: number;
    change_percent: number;
  };
  invoice_overdue: {
    number: number;
    change_percent: number;
  };
  cards: {
    bank_balance: number;
    tax: number;
    card_spending: number;
    today_employees: number;
  };
  data: ChartData<"line">;
}

export interface IMeeting {
  id: number;
  image: string;
  subject: string;
  name: string;
  date: number;
}

export interface ITodo {
  id: number;
  title: string;
  date: number;
}
