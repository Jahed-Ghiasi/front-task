export interface IDashboardInfo {
  meetings: IMeeting[];
  cards: {
    bank_balance: number;
    tax: number;
    card_spending: number;
    today_employees: number;
  };
}

export interface IMeeting {
  id: number;
  image: string;
  subject: string;
  name: string;
  date: number;
}
