//React
import React from 'react';

//Components
import Formulaire from './Formulaire';
import Message from './Message';

class App extends React.Component {
	render(){
		return(
			<div className="box">
				<div className="messages">
					<Message />
				</div>
				<Formulaire />
			</div>
		)
	}
};

export default App;