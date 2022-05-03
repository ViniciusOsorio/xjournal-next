import styled from 'styled-components';
import { TYPOGRAPHY } from '../../constants/typography';
import { themeType } from '../../types/themeType';

const getCardBackgroundColor = (
  isCurrentDay: boolean,
  isCurrentMonth: boolean,
  theme: themeType
): string => {
  if (isCurrentDay) return theme.PRIMARY;
  return isCurrentMonth ? theme.BACKGROUND : theme.DISABLED;
};

export const Container = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const Card = styled.div`
  display: flex;
  padding: 10px 0;
  border-radius: 10px;
  background-color: ${({ isCurrentDay, isCurrentMonth, theme }) =>
    getCardBackgroundColor(isCurrentDay, isCurrentMonth, theme)};
  border-color: ${({ isCurrentDay, theme }) =>
    isCurrentDay ? theme.PRIMARY : theme.CARD};
  flex: 1;
  border-width: 1px;
  height: 50px;
  margin: 2px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const WeekDay = styled.span`
  display: flex;
  padding: 10px 0;
  flex: 1;
  margin: 2px;
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
`;

export const Week = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  padding: 0 8px;
`;

export const YearButton = styled.div`
  display: flex;
  padding: 10px 0;
  border-radius: 10px;
  background-color: ${({ isCurrentYear, theme }) =>
    isCurrentYear ? theme.PRIMARY : theme.BACKGROUND};
  border-color: ${({ isCurrentYear, theme }) =>
    isCurrentYear ? theme.PRIMARY : theme.CARD};
  border-width: 1px;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0 4px;
  cursor: pointer;
`;

export const YearText = styled.span`
  font-size: ${TYPOGRAPHY.SIZE.TEXT};
  font-weight: bold;
  color: ${({ isCurrentYear, theme }) =>
    isCurrentYear ? theme.BACKGROUND : theme.TEXT};
`;

export const CardText = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ isCurrentDay, theme }) =>
    isCurrentDay ? theme.BACKGROUND : theme.TEXT};
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
`;

export const YearPicker = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  padding: 0 4px;
`;

export const Title = styled.span`
  font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
`;

export const Pressable = styled.div`
  color: ${({ theme }) => theme.TEXT};
  border-color: ${({ theme }) => theme.TEXT};
  cursor: pointer;
`;
