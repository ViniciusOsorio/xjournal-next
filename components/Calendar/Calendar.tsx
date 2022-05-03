import moment from 'moment';
import React from 'react';
import { useState } from 'react';

import { DayCard } from './DayCardType';

import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Calendar as CalendarIcon
} from 'react-feather';

type CalendarProps = {
    onChange: (day: DayCard) => any
}

export default function Calendar(props: CalendarProps){
    const [selectedDay, setSelectedDay] = useState<moment.Moment>(moment().startOf('day'));
    const [currentMoment, setCurrentMoment] = useState<moment.Moment>(moment());
    const [selectedYear, setSelectedYear] = useState<moment.Moment>(moment());
    const [isShowingYearPicked, setIsShowingYearPicked] = useState<boolean>(false);



}