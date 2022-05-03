import moment from "moment";
import { DayCard } from "./DayCardType";

export const getDaysIn = (
    range: 'week' | 'month',
    currentMoment?: moment.Moment
): DayCard[] => {
    const currentMonth = currentMoment || moment();
};