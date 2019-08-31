import React from 'react';
import Total from './Total';
import AddItem from './AddItem';

class App extends React.Component {

    state={ total: 0 }

    calcTotal = (itemAmnt) => {
        this.setState({ total: (this.state.total + itemAmnt)});
    }

    removeItemCalcTotal = (itemAmnt) => {
        this.setState({ total: (this.state.total + itemAmnt )});
    }

    render() {
        return (
            <div>
                <Total total={this.state.total} />
                <AddItem calcTotal={this.calcTotal} removeItemCalcTotal={this.removeItemCalcTotal} />
            </div>
        );
    }


}

export default App;

