import {Component} from 'react'
import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  CountriesList,
  ListItem,
  ListName,
  VisitedText,
  ListButton,
  VisitedCountries,
  EmptyContainer,
  EmptyHeader,
  VisitedListDisplay,
  ListItem1,
  ItemBox,
  ThumbItem,
  NameBox,
  NameOfItem,
  DeleteButton,
} from './styledComponents'

class CountriesListView extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    initialCountriesList: this.props.initialCountriesList,
  }

  onClickChangeVisit = id => {
    // console.log('clicked', id)
    this.setState(prevState => ({
      initialCountriesList: prevState.initialCountriesList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  onRemoveVisit = id => {
    // console.log('removed', id)
    this.setState(prevState => ({
      initialCountriesList: prevState.initialCountriesList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {initialCountriesList} = this.state
    // console.log(initialCountriesList)
    const notVisited = initialCountriesList.every(
      each => each.isVisited === false,
    )
    return (
      <AppContainer>
        <ResponsiveContainer>
          <Heading>Countries</Heading>
          <CountriesList>
            {initialCountriesList.map(eachItem => (
              <ListItem key={eachItem.id}>
                <ListName>{eachItem.name}</ListName>
                {eachItem.isVisited ? (
                  <VisitedText>Visited</VisitedText>
                ) : (
                  <ListButton
                    type="button"
                    onClick={() => this.onClickChangeVisit(eachItem.id)}
                  >
                    Visit
                  </ListButton>
                )}
              </ListItem>
            ))}
          </CountriesList>
          <VisitedCountries>
            <Heading>Visited Countries</Heading>
            {notVisited ? (
              <EmptyContainer>
                <EmptyHeader>No Countries Visited Yet</EmptyHeader>
              </EmptyContainer>
            ) : (
              <VisitedListDisplay>
                {initialCountriesList.map(eachItem =>
                  eachItem.isVisited ? (
                    <ListItem1 key={eachItem.id}>
                      <ItemBox>
                        <ThumbItem src={eachItem.imageUrl} alt="thumbnail" />
                        <NameBox>
                          <NameOfItem>{eachItem.name}</NameOfItem>
                          <DeleteButton
                            type="button"
                            onClick={() => this.onRemoveVisit(eachItem.id)}
                          >
                            Remove
                          </DeleteButton>
                        </NameBox>
                      </ItemBox>
                    </ListItem1>
                  ) : null,
                )}
              </VisitedListDisplay>
            )}
          </VisitedCountries>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default CountriesListView
