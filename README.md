# fluid-react

Base on [Bootstrap 12 column grid system](https://v4-alpha.getbootstrap.com/layout/grid/). A mobile-first grid system for React.

* [Install](#install)
* [CSS](#css)
* [Grid](#grid)

More on [Demo](https://richardzcode.github.io/fluid-react-demo/index.html)

## Install

No CSS file needed.

```
npm install --save fluid-react
```

## CSS

MediaQuery

```
    const style = {
        margin: 'auto 1rem',
        padding: '2rem',
        color: '#fff',
        backgroundColor: '#0275d8',
        borderColor: '#0275d8',
        '@media (min-width: 576px) and (max-width: 767px)': {
            backgroundColor: '#5cb85c',
            borderColor: '#5cb85c'
        },
        '@media (min-width: 768px) and (max-width: 991px)': {
            backgroundColor: '#5bc0de',
            borderColor: '#5bc0de'
        },
        '@media (min-width: 992px) and (max-width: 1199px)': {
            backgroundColor: '#f0ad4e',
            borderColor: '#f0ad4e'
        },
        '@media (min-width: 1200px)': {
            backgroundColor: '#d9534f',
            borderColor: '#d9534f'
        }
    }
```

## Grid

```
    <Container>
        <Row>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">1</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">2</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">3</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">4</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">5</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">6</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">7</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">8</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">9</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">10</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">11</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">12</Col>
        </Row>
    </Container>
```

<img src="media/fluid_react.png" width="360px" />
