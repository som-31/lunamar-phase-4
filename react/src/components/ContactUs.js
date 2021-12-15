import React from 'react';
import axios from 'axios'

class ContactUs extends React.Component {

     API_PATH = 'https://rxp3828.uta.cloud/php-ph4/contactUs.php';

    constructor(props){
        super(props);
        this.state = {
            name:'',
            email: '',
            phone: '',
            query: '',
            dataSent: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        console.log('In here Component did mount');
    }

    onSubmit(event){
       event.preventDefault();
       console.log('in Submit function');
       console.log(this.state);
       axios({
        method: 'post',
        url: this.API_PATH,
        headers: {
            'content-type': 'application/json'
        },
        data: this.state
    })
    .then(result => {
        console.log(result.data)
        this.setState({
            dataSent: result.data.sent,
        })
        console.log(this.state)
    })
    .catch(error => this.setState({
        error: error.message
    }));
    }


    render(){
        return(
            <>
            <div className="container">
                    <div className="contact-box">
                        <div className="left"></div>
                        <div className="right">
                            <center><h2>Contact Us</h2></center>
                            <form action='' id='contact' method='post'>
                                <input 
                                type="text" className="field" id="name" placeholder="Your Name" required
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })} />
                                <input type="email" className="field" id="email" placeholder="Your Email" required
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                                />
                                <input type="text" className="field" placeholder="Phone"  required 
                                value={this.state.phone}
                                onChange={e => this.setState({ phone: e.target.value })}
                                />
                                <textarea placeholder="Query" id="query" className="field" required
                                value={this.state.query}
                                onChange={e => this.setState({ query: e.target.value })}
                                ></textarea>
                                <input type="submit" 
                                value="Submit" 
                                onClick={e => this.onSubmit(e)} 
                                className="submit-btn" />
                            </form>
                        </div>
                    </div>
                    <div className=" box feedback-form">
                        {this.state.dataSent ? 
                        <p className="msg">
                        SUCCESS<br/><br/>
                        Thanks for submitting your feedback.<br/>
                        We appreciate your time.
                        </p>
                        :''}
                        <p></p>
                    </div>
            </div>
        </>
        );
    }
}
// function ContactUs(){

//     return(
        // <>
        //     <div className="container">
        //             <div className="contact-box">
        //                 <div className="left"></div>
        //                 <div className="right">
        //                     <center><h2>Contact Us</h2></center>
        //                     <form action="" id="register" method="post">
        //                         <input type="text" className="field" id="name" placeholder="Your Name" />
        //                         <input type="text" className="field" id="email" placeholder="Your Email" />
        //                         <input type="text" className="field" placeholder="Phone" />
        //                         <textarea placeholder="Query" id="query" className="field"></textarea>
        //                         <input type="button" value="Submit" onclick="sendEmail()" className="submit-btn" />
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        // </>
//     );

// }


export default ContactUs;