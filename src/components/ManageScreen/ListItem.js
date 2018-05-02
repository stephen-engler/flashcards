import React, { Component } from "react";
import { CardItem, Card } from '../common/';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import EditDeleteDeckModal from './EditDeleteDeckModal';

class ListItem extends Component{
    state = {
        modalVisible: false,
    }

    handlePress=()=>{
        console.log('pressed');
        this.props.dispatch({
            type: 'USER_SELECTED_DECK',
            payload: this.props.deck
        })
    }
    hideModal = () =>{
        this.setState({
            modalVisible: false
        })
    }
    handleEdit = (deck) =>{
        console.log('in handle edit ', deck);
        this.hideModal();
    }
    handleDelete = (deck) =>{
        console.log('in handle delete ', deck);
        this.hideModal();
    }

    render(props){
        console.log('in list item', props);
        return (
                <TouchableWithoutFeedback 
                    onPress={this.handlePress} 
                    onLongPress={()=>this.setState({modalVisible:true})}>
                <View>
                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle}>
                                {this.props.deck.deck_name}
                            </Text>
                        </CardItem>
                    </Card>
                    <EditDeleteDeckModal 
                        deck={this.props.deck} 
                        modalVisible={this.state.modalVisible}
                        hideModal={this.hideModal}
                        handleEdit={this.handleEdit}
                        handleDelete={this.handleDelete}
                        />
                </View>
                </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    textStyle:{
        fontSize: 24,
    }
}


const mapStateToProps=(state)=>({
    state
})

export default connect(mapStateToProps)(ListItem);
