import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesEventNew from './components/views/TablesEventNew/TablesEventNew';
import TablesEventsId from './components/views/TablesEventsId/TablesEventsId';
import WaitressContainer from './components/views/Waitress/WaitressContainer.js';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import WaiterOrderId from './components/views/WaiterOrderId/WaiterOrderId';
import {StylesProvider} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#64b5f6;',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} 
                  component={MainPage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} 
                  component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} 
                  component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} 
                  component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} 
                  component={TablesBookingNew} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} 
                  component={TablesBookingId} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/event/new'} 
                  component={TablesEventNew} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} 
                  component={TablesEventsId} />
                <Route exact path={process.env.PUBLIC_URL + '/waitress'} 
                  component={WaitressContainer} />
                <Route exact path={process.env.PUBLIC_URL + '/waitress/order/new'} 
                  component={WaiterOrderNew} />
                <Route exact path={process.env.PUBLIC_URL + '/waitress/order/:id'} 
                  component={WaiterOrderId} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>  
  );
}

export default App;
