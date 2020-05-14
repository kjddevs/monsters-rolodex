import React from 'react';
import './cardlist.css'

import { Card } from '../card/card';

export const CardList = props => {
    return <div className="card-list">{props.users.map(user => <Card key={user.id} user={user} />)}</div>;
};
