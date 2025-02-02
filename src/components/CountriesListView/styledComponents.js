import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #161624;
  padding: 20px 30px;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161624;
  width: 90%;
  @media screen and (min-width: 992px) {
    width: 81%;
  }
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 0px;
`
export const CountriesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #334155;
  width: 98%;
  height: 40vh;
  border-radius: 12px;
  background-color: #1f1f2f;
  overflow-y: auto;
  list-style-type: none;
  padding: 0;
`

export const ListItem = styled.li`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
  margin: 0px;
  padding: 10px 40px;
`

export const ListName = styled.p`
  font-family: 'Roboto';
  color: #f1f5f9;
  font-size: 18px;
`

export const VisitedText = styled.p`
  font-family: Roboto;
  color: #94a3b8;
  font-size: 16px;
  margin-right: 10px;
  margin-top: 10px;
  width: 80px;
  height: 30px;
  text-align: center;
  padding: 8px;
`

export const ListButton = styled.button`
  justify-content: space-around;
  background-color: ${props => (props.isVisit ? 'transparent' : '#3b82f6')};
  color: ${props => (props.isVisit ? '#94a3b8' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 16px;
  width: 90px;
  padding: 6px;
  margin-right: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const VisitedCountries = styled.div`
  display: flex;
  flex-direction: column;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`
export const EmptyHeader = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`
export const VisitedListDisplay = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const ListItem1 = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 33%;
    margin-right: 3px;
  }
`

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 20px;
`

export const ThumbItem = styled.img`
  height: 160px;
  @media screen and (min-width: 992px) {
    height: 200px;
  }
`
export const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1f1f2f;
  padding-left: 10px;
`
export const NameOfItem = styled.p`
  font-family: 'Roboto';
  color: #cbd5e1;
`
export const DeleteButton = styled.button`
  border-radius: 3px;
  width: 80px;
  height: 30px;
  background-color: transparent;
  font-family: 'Roboto';
  color: #cbd5e1;
  border: 1px solid #ffffff;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
`
