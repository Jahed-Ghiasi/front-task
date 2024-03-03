import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { IStatistics, IMeeting, ITodo } from "types/dashboard.types";

const meeting_items: IMeeting[] = [
  {
    id: 1,
    name: "Livia Stanton",
    date: 1709107392092,
    image: "images/avatar.png",
    subject: "Metting Scheduled",
  },
  {
    id: 2,
    name: "Livia Stanton",
    date: 1709107392092,
    image: "images/avatar.png",
    subject: "Metting Scheduled",
  },
  {
    id: 3,
    name: "Livia Stanton",
    date: 1709107392092,
    image: "images/avatar.png",
    subject: "Metting Scheduled",
  },
  {
    id: 4,
    name: "Livia Stanton",
    date: 1709107392092,
    image: "images/avatar.png",
    subject: "Metting Scheduled",
  },
  {
    id: 5,
    name: "Livia Stanton",
    date: 1709107392092,
    image: "images/avatar.png",
    subject: "Metting Scheduled",
  },
  {
    id: 6,
    name: "Livia Stanton",
    date: 1709107392092,
    image: "images/avatar.png",
    subject: "Metting Scheduled",
  },
  {
    id: 7,
    name: "Livia Stanton",
    date: 1709107392092,
    image: "images/avatar.png",
    subject: "Metting Scheduled",
  },
];

const dashboardStatistics: IStatistics = {
  new_clients: { number: 54, change_percent: 18.7 },
  invoice_overdue: { number: 6, change_percent: -2.7 },
  cards: {
    bank_balance: 143.223,
    tax: 43.11,
    today_employees: 24,
    card_spending: 3.287,
  },
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Deposite",
        data: [24500, 17500, 14800, 15500, 10000],
        borderColor: "#6941c6",
        pointBackgroundColor: "#6941c6",
        tension: 0.3,
      },
      {
        label: "Withdrawal",
        data: [4000, 1100, 5200, 13900, 5150],
        borderColor: "black",
        pointBackgroundColor: "black",
        tension: 0.3,
      },
    ],
  },
};

const todo_list: ITodo[] = [
  { id: 1, title: "Run payroll", date: 1709107392092 },
  { id: 2, title: "Review time of request", date: 1709107392092 },
  { id: 3, title: "Sign board resulation", date: 1709107392092 },
];

export type AppContextType = {
  isMinimizedAsideMenu: boolean;
  setIsMinimizedAsideMenu: React.Dispatch<React.SetStateAction<boolean>>;
  meetings: IMeeting[];
  setMeetings: React.Dispatch<React.SetStateAction<IMeeting[]>>;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  statistics?: IStatistics;
  setStatistics: React.Dispatch<React.SetStateAction<IStatistics | undefined>>;
  isAddMeetingModal: boolean;
  setIsAddMeetingModal: React.Dispatch<React.SetStateAction<boolean>>;
  isAddTodoModal: boolean;
  setIsAddTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const contextDefaultValues: AppContextType = {
  isMinimizedAsideMenu: false,
  setIsMinimizedAsideMenu: () => {},
  meetings: [],
  setMeetings: () => {},
  todos: [],
  setTodos: () => {},
  setStatistics: () => {},
  isAddMeetingModal: false,
  setIsAddMeetingModal: () => {},
  isAddTodoModal: false,
  setIsAddTodoModal: () => {},
};

export const AppContext = createContext<AppContextType>(contextDefaultValues);

export function useAppContext() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export function ContextProvider({ children }: Props) {
  const [isMinimizedAsideMenu, setIsMinimizedAsideMenu] =
    useState<boolean>(false);
  const [isAddMeetingModal, setIsAddMeetingModal] = useState<boolean>(false);
  const [isAddTodoModal, setIsAddTodoModal] = useState<boolean>(false);
  const [meetings, setMeetings] = useState<IMeeting[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [statistics, setStatistics] = useState<IStatistics | undefined>(
    undefined
  );

  useEffect(() => {
    setMeetings(meeting_items);
    setStatistics(dashboardStatistics);
    setTodos(todo_list);
  }, []);

  const value = {
    isMinimizedAsideMenu,
    setIsMinimizedAsideMenu,
    meetings,
    setMeetings,
    todos,
    setTodos,
    statistics,
    setStatistics,
    isAddMeetingModal,
    setIsAddMeetingModal,
    isAddTodoModal,
    setIsAddTodoModal,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
