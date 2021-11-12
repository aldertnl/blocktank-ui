import { Switch, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import React, { ReactElement } from 'react';
import BuyPage from './buy';
import OrderPage from './order';
import './index.scss';

const PageContainer = ({ children }): ReactElement => (
	<>
		<div className={'glowy-main1'} />
		<div className={'glowy-main2'} />
		<div className={'glowy-main3'} />

		<Row className={'page-container'}>
			<Col xl={7} lg={6} md={5} sm={12} className={'infoCol'}>
				<h1>Lightning Network Services</h1>
				<br />
				<p>
					Open a connection to the Lightning Network and receive or send bitcoin instantly. Choose
					your custom capacity and BTC for your new channel, or paste a Lightning invoice to refill
					an existing channel.
				</p>
			</Col>

			<Col xl={5} lg={6} md={7} sm={12}>
				{children}
			</Col>
		</Row>
	</>
);

function PublicPages(): JSX.Element {
	const card = (
		<Switch>
			<Route exact path={'/'}>
				<BuyPage />
			</Route>

			<Route path={`/order/:orderId`}>
				<OrderPage />
			</Route>

			<Route path='*'>
				<h4>404</h4>
				<p style={{ textAlign: 'center' }}>Page not found</p>
			</Route>
		</Switch>
	);

	if (
		new URLSearchParams(window.location.search).get('embed') === 'true' ||
		(window as any).embedwidget === true
	) {
		return card;
	}

	return (
		<Container className={'container'}>
			<PageContainer>{card}</PageContainer>
		</Container>
	);
}

export default PublicPages;
