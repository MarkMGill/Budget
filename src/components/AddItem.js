import React from 'react';
import ShowItems from './ShowItems';
import UniqueId from '../../node_modules/react-html-id';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        UniqueId.enableUniqueIds(this);
        this.state = { id:'', amount: '', incExp: '+', desc: '', items: [] };
        this.itemsArr = [];
    }

    addOrSubtract = (e) => {
        this.setState({ incExp: e.target.value});
    }

    delItem = (index, e) => {
        const items = Object.assign([], this.state.items);
        const amnt = (items[index].incExp === 'Inc') ? -(Number(items[index].amount)) : Number(items[index].amount);
        this.props.removeItemCalcTotal(amnt);
        items.splice(index, 1);
        this.setState({items: items});
    }

    calcTotalAmnt = (e) => {
        e.preventDefault();
        
        // add new item to state items array
        let newObj = {};
        (this.state.incExp === '+') ? newObj.incExp = 'Inc' : newObj.incExp = 'Exp';
        newObj.desc = this.state.desc;
        newObj.amount = this.state.amount;
        newObj.delItem = this.delItem;
        
        // check if amount entered is a number, and if so update items array, if not a number do nothing
        if(!isNaN(Number(newObj.amount)) && newObj.amount !== '') {
            // calculate total, add keys, and blank out form
            (this.state.incExp === '+') ? this.props.calcTotal( Number(this.state.amount) ) : this.props.calcTotal(Number(-(this.state.amount)));
            let newArr = [...this.state.items, newObj];
            newArr.forEach(cur => {
                cur.id = this.nextUniqueId();
            });
            this.setState({ items: newArr });
            this.setState({amount: ''});
            this.setState({desc: ''});
        }
    }
    
    render() {
        return (
            <div>
            <div className="jumbotron jumbotron-fluid bg-primary py-3">
                <form onSubmit={this.calcTotalAmnt} className="form-inline">
                    <div className="container text-center">
                        <select value={this.state.incExp} onChange={this.addOrSubtract} className="form-control input-large mr-2 mb-2" id="optItem">
                            <option>+</option>
                            <option>-</option>
                        </select>
                        <input className="form-control mr-4 mb-2" type="text" id="typeItem" value={this.state.desc} onChange={e => this.setState({ desc: e.target.value })}  placeholder="Enter Item" size="50"></input>
                        <input className="form-control mr-2 mb-2" type="text" placeholder="Enter Amount" value={this.state.amount} size="20" onChange={e => this.setState({ amount: e.target.value })}></input>
                        <button className="btn btn-light mb-2" type="submit">Submit</button>
                    </div>
                </form>
            </div>
                <ShowItems items={this.state.items} />
            </div>
        );
    }
}

export default AddItem;