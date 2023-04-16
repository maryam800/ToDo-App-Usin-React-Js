class App extends React.Component{
    constructor(){
        super();

        this.state={
            items:[],
            item:''
        }
        this.takeUserInput=(e)=>{
            this.setState({
                item:e.target.value
            })

        }
        this.submitData=(e)=>{
            e.preventDefault()
            let newItems=[...this.state.items,{
                id:Math.random(),
                itemName:this.state.item
            }]
            this.setState({
                items:newItems,
                item:''
            })
        }
        this.deleteItem=(id)=>{
            let newItems=[...this.state.items]
            let afterDelete=newItems.filter(item =>item.id != id)
            this.setState({
                items:afterDelete
            })

        }
    }
    render(){
        return (
            <div className="app">
                <Header/>
                <AddItems takeInput={this.takeUserInput} dataSubmited={this.submitData} item={this.state.item}/>
                <ListItems listItems={this.state.items} removedItem={this.deleteItem}/>
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        return (
            <div className="header">To Do List App Using React Js</div>
        )
    }

}
class AddItems extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.dataSubmited}>
                <input type="text" placeholder="Type Your Todo" className="input" onChange={this.props.takeInput} value={this.props.item}/>
                <input type="submit" className="Add" value="Add"/>
            </form>
        )
    }
}
class ListItems extends React.Component{
    render(){
        return(
            <div className="listItems">
            {this.props.listItems.length ==0  && <div>There is no items</div>}


            {this.props.listItems.map(item =><Item el={item.itemName}id={item.id} removeItem={this.props.removedItem}/>)}
            </div>
        )
    }
}
class Item extends React.Component{
    render(){
        return(
            <div className="item">
                <h4>{this.props.el}</h4>
                <button className="delete" onClick={()=>this.props.removeItem(this.props.id)}>X</button>
            </div>

        )
    }
}
ReactDOM.render(<App /> ,document.getElementById('root'))