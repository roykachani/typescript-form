import React from 'react';
import { Sub } from '../../types';

interface Props {
	subs: Array<Sub>;
}

const List: React.FC<Props> = ({ subs }) => {
	return (
		<ul>
			{subs.map((sub) => {
				return (
					<li key={sub.nick}>
						<img src={sub.avatar} alt={sub.avatar} />
						<h4>{sub.nick}</h4>
						<p>{sub.subMonths} months</p>
						<p>{sub.description?.substring(0, 100)}</p>
					</li>
				);
			})}
		</ul>
	);
};

export default List;
