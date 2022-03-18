import {
    Card,
    CardListWrapper,
    CardText,
    Container,
    Header,
    Pressable,
    Title,
    Week,
    WeekDay,
    YearButton,
    YearPicker,
    YearText,
  } from './CalendarStyled';
  import { getDaysIn, getDaysInLastMonth, getDaysInNextMonth } from './getDaysIn';
  import { DayCard } from './DayCardType';
  import moment from 'moment';
  import React from 'react';
  import { useState } from 'react';
  import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Calendar as CalendarIcon,
  } from 'react-feather';
  import { TYPOGRAPHY } from '../../constants/typography';
  
  type CalendarProps = {
    onChange: (day: DayCard) => any;
  };
  
  export default function Calendar(props: CalendarProps) {
    const [selectedDay, setSelectedDay] = useState<moment.Moment>(
      moment().startOf('day')
    );
    const [currentMoment, setCurrentMoment] = useState<moment.Moment>(moment());
    const [selectedYear, setSelectedYear] = useState<moment.Moment>(moment());
    const [isShowingYearPicker, setIsShowingYearPicker] =
      useState<boolean>(false);
    const days = getDaysIn('month', currentMoment);
  
    const isCurrentDay = (date: string) => {
      return selectedDay.startOf('day').format('DD/MM/YYYY') === date;
    };
  
    const isCurrentYear = (yearMoment: moment.Moment) => {
      return (
        moment(currentMoment).format('YYYY') === moment(yearMoment).format('YYYY')
      );
    };
  
    const selectDay = (day: DayCard) => {
      setSelectedDay(
        moment(`${day.day}/${day.month}/${day.year}`, 'DD/MM/YYYY').startOf('day')
      );
      props.onChange(day);
    };
  
    const renderDayCard = (item: DayCard) => (
      <Card
        key={item.key}
        isCurrentDay={isCurrentDay(item.key)}
        isCurrentMonth={moment(currentMoment).format('MM') === item.month}
        onClick={() => selectDay(item)}
      >
        <CardText isCurrentDay={isCurrentDay(item.key)}>{item.day}</CardText>
      </Card>
    );
  
    const nextMonth = () => {
      const nextMonth = moment(currentMoment).startOf('month').add(1, 'month');
      setCurrentMoment(nextMonth);
    };
  
    const previousMonth = () => {
      const previousMonth = moment(currentMoment)
        .startOf('month')
        .subtract(1, 'month');
      setCurrentMoment(previousMonth);
    };
  
    const setTodayAsSelected = () => {
      setSelectedDay(moment().startOf('day'));
      setCurrentMoment(moment());
      setSelectedYear(moment());
      props.onChange({
        day: moment().format('DD'),
        month: moment().format('MM'),
        year: moment().format('YYYY'),
        name: moment().format('ddd').toUpperCase(),
        key: `${moment().format('DD')}/${moment().format('MM')}/${moment().format(
          'YYYY'
        )}`,
      });
    };
  
    const getDaysList = (): DayCard[] => {
      return [
        ...getDaysInLastMonth(currentMoment),
        ...days,
        ...getDaysInNextMonth(currentMoment),
      ];
    };
  
    return (
      <Container>
        <Header>
          <Pressable onClick={previousMonth}>
            <ChevronLeft size={TYPOGRAPHY.SIZE.ICON} />
          </Pressable>
          <Title>{moment(currentMoment).format('MMMM')}</Title>
          <Pressable onClick={() => setIsShowingYearPicker(!isShowingYearPicker)}>
            <Title>{moment(currentMoment).format('YYYY').toUpperCase()}</Title>
          </Pressable>
          <Pressable onClick={nextMonth}>
            <ChevronRight size={TYPOGRAPHY.SIZE.ICON} />
          </Pressable>
          <Pressable onClick={setTodayAsSelected}>
            <CalendarIcon name="calendar" size={TYPOGRAPHY.SIZE.ICON} />
          </Pressable>
        </Header>
  
        {isShowingYearPicker && (
          <YearPicker>
            <YearButton
              onClick={() =>
                setSelectedYear(moment(selectedYear).subtract(3, 'year'))
              }
            >
              <ChevronsLeft size={TYPOGRAPHY.SIZE.ICON} />
            </YearButton>
            <YearButton
              onClick={() =>
                setCurrentMoment(moment(selectedYear).subtract(1, 'year'))
              }
              isCurrentYear={isCurrentYear(
                moment(selectedYear).subtract(1, 'year')
              )}
            >
              <YearText
                isCurrentYear={isCurrentYear(
                  moment(selectedYear).subtract(1, 'year')
                )}
              >
                {moment(selectedYear).subtract(1, 'year').format('YYYY')}
              </YearText>
            </YearButton>
            <YearButton
              onClick={() => setCurrentMoment(moment(selectedYear))}
              isCurrentYear={isCurrentYear(moment(selectedYear))}
            >
              <YearText isCurrentYear={isCurrentYear(moment(selectedYear))}>
                {moment(selectedYear).format('YYYY')}
              </YearText>
            </YearButton>
            <YearButton
              onClick={() =>
                setCurrentMoment(moment(selectedYear).add(1, 'year'))
              }
              isCurrentYear={isCurrentYear(moment(selectedYear).add(1, 'year'))}
            >
              <YearText
                isCurrentYear={isCurrentYear(moment(selectedYear).add(1, 'year'))}
              >
                {moment(selectedYear).add(1, 'year').format('YYYY')}
              </YearText>
            </YearButton>
            <YearButton
              onClick={() => setSelectedYear(moment(selectedYear).add(3, 'year'))}
            >
              <ChevronsRight size={TYPOGRAPHY.SIZE.ICON} />
            </YearButton>
          </YearPicker>
        )}
  
        <Week>
          {getDaysIn('week', currentMoment).map((day: DayCard) => (
            <WeekDay key={day.key}>{day.name[0]}</WeekDay>
          ))}
        </Week>
        <CardListWrapper>
          {getDaysList()
            .slice(0, 7)
            .map((day: DayCard) => renderDayCard(day))}
        </CardListWrapper>
        <CardListWrapper>
          {getDaysList()
            .slice(7, 14)
            .map((day: DayCard) => renderDayCard(day))}
        </CardListWrapper>
        <CardListWrapper>
          {getDaysList()
            .slice(14, 21)
            .map((day: DayCard) => renderDayCard(day))}
        </CardListWrapper>
        <CardListWrapper>
          {getDaysList()
            .slice(21, 28)
            .map((day: DayCard) => renderDayCard(day))}
        </CardListWrapper>
        <CardListWrapper>
          {getDaysList()
            .slice(28)
            .map((day: DayCard) => renderDayCard(day))}
        </CardListWrapper>
      </Container>
    );
  }
  