import React, { PureComponent } from 'react';
import theme, { ThemeProvider } from '@theme';
import MainLayout from '@layouts';
import Home from '@components/Home';

class App extends PureComponent {
  static async getInitialProps({ query }) {
    return { pageParams: query };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Home pageParams={this.props.pageParams} />
        </MainLayout>
      </ThemeProvider>
    );
  }
}

export default App;
