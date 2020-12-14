import React from 'react'
import { post } from 'axios';

class SallAdd extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            haknum: '',
            email: '',
            won: '',
            fileName: ''

    }


}



    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);

            })

    }



    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        });
    }


    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }



    addCustomer(){
        const url = '/api/sells';
        const formData = new FormData();
        formData.append('book', this.state.file)
        formData.append('name', this.state.userName)
        formData.append('haknum', this.state.haknum)
        formData.append('email', this.state.email)
        formData.append('won', this.state.won)
        const config = {

            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)

    }



    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>책 업로드</h1>
                책 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
                책 이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
                학번: <input type="text" name="haknum" value={this.state.haknum} onChange={this.handleValueChange} /><br/>
                email: <input type="text" name="email" value={this.state.email} onChange={this.handleValueChange} /><br/>
                가격: <input type="text" name="won" value={this.state.won} onChange={this.handleValueChange} /><br/>
                <button type="submit">추가하기</button>
            </form>

        )

    }

}



export default SallAdd;
