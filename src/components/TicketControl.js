import React from "react";
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Ticket from "./Ticket";
import TicketDetail from "./TicketDetail";

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList,
                    formVisibleOnPage: false });
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id == id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  handleDeletingTicket = (id) => {
    const newMasterTicketList = this.state.masterTicketList.filter(ticket => TicketDetail.id !== id);
    this.setState({
      masterTicketList: newMasterTicketList,
      selectedTicket: null
    })
  }

  render(){
    let currentVisibleState = null;
    let buttonText = null;
    
    if(this.state.selectedTicket != null) {
      currentVisibleState = <TicketDetail ticket = {this.state.selectedTicket} onClickingDelete = {this.handleDeletingTicket}/>
      buttonText = "Return to Ticket";
    }
    if(this.state.selectedTicket != null) {
      currentVisibleState = <TicketDetail ticket = {this.state.selectedTicket} />
      buttonText = "Return to Ticket List";
    }
    if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewTicketForm onNewTicketCreation ={this.handleAddingNewTicketToList} />
      buttonText = "Return to Ticket List";
    } else {
      currentVisibleState = <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket}/>;
      buttonText  = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;