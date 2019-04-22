import React, { Component } from 'react';
import {Card,Button,Row,Col,Form} from 'react-bootstrap';

class MsgInput extends Component{

    newMsgEnter = () =>{
        const msgUpdate = this.props.msgUpdate;
        const txtVal = document.getElementById(this.props.user.msgId).value;
        document.getElementById(this.props.user.msgId).value="";
        const typeMsg = ({
            msgId: this.props.user.msgId,
            msg: txtVal,
        })
        msgUpdate(typeMsg);
    }


    render(){
        const {user} = this.props;
        console.log(user);
        const {msgs} = this.props;
        return(
            <Card>
                {user.perName}
                <Card.Body>
                    <Row>
                        <Col sm={6}>
                            <Card>
                                <Card.Header>{user.perName}</Card.Header>
                                <Card.Body>
                                {
                                        msgs.map( (msgs,index) => (
                                            (user.perId === msgs.msgId)
                                            ?(
                                                <Row key={index} className="ticket-message-block ticket-message-right">
                                                    <Col sm={7}></Col>
                                                    <Col sm={5}>
                                                        <div className="ticket-message">
                                                            <div className="message">{msgs.msg}</div>
                                                            <div className="info text-right">
                                                                <strong>{user.perName}</strong>
                                                                <small className="text-muted">2019-04-16 18:00:38</small>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )
                                            :(
                                                <Row key={index} className="ticket-message-block ticket-message-left">
                                                    <Col sm={5}>
                                                        <div className="ticket-message">
                                                            <div className="message">{msgs.msg}</div>
                                                            <div className="info text-left">
                                                                <strong>{user.perName}</strong>
                                                                <small className="text-muted">2019-04-16 18:00:38</small>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col sm={7}></Col>
                                                </Row>
                                            )
                                        ))
                                    }




                                    
                                   
                                    <Row>
                                        <Col sm={12}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control as="textarea" rows="3"/>
                                            </Form.Group>
                                            <Button variant="primary" className="customBtn">Send Message</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card>
                                <Card.Header>User Two</Card.Header>
                                <Card.Body>
                                    <Row className="ticket-message-block ticket-message-right">
                                        <Col sm={7}></Col>
                                        <Col sm={5}>
                                            <div className="ticket-message">
                                                <div className="message">Hello</div>
                                                <div className="info text-right">
                                                    <strong>User One</strong>
                                                    <small className="text-muted">2019-04-16 18:00:38</small>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="ticket-message-block ticket-message-left">
                                        <Col sm={5}>
                                            <div className="ticket-message">
                                                <div className="message">How are you ?</div>
                                                <div className="info text-left">
                                                    <strong>User Two</strong>
                                                    <small className="text-muted">2019-04-16 18:00:38</small>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={7}></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control as="textarea" rows="3"/>
                                            </Form.Group>
                                            <Button variant="primary" className="customBtn">Send Message</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
export default MsgInput;