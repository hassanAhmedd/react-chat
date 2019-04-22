import React, { Component } from 'react';
import MsgInput from './MsgInput';
import {Container} from 'react-bootstrap';

class MainWindow extends Component{
    state={
        person: [
            {
                perId:1,
                perName: "Hassan"
            },
            {
                perId:2,
                perName: "Mark"
            }
        ],
        msgs: [
            {
                msgId:1,
                msg:"Hello Mark!"
            },
            {
                msgId:2,
                msg:"Hey Hi, Hassan"
            }
        ]
    };
    

    msgUpate= (newMsg) => {
        const msgs=this.state.msgs;
        msgs.push(newMsg);
        this.setState({msgs});
    }

    render(){
        // const appendWin=this.state.person;
        return(
            <section className="mainWindow">
            <Container>
                <MsgInput user={this.state.person} msgs={this.state.msgs} msgUpate={this.msgUpate}/>
            </Container>
            </section>
        )
    }
}

export default MainWindow;