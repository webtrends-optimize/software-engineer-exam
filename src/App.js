import React from 'react';
import './App.css';
import { New } from './components/new';

const fields = [
    { name: "field_name", label: "Name", type: "text" },
    { name: "field_username", label: "User", type: "text" },
    { name: "field_date", label: "Date", type: "date" }
];

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userList: [{field_name: "", field_username:"", field_date:""} ],
        };
     
        this.handleListChange = this.handleListChange.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);

    }

    handleListChange (e, index) {

        const field = e.target.name;
        const newUserList = [...this.state.userList];

        newUserList[index][field] = e.target.value;

        this.setState({
            ...this.setState, 
            userList: newUserList
        })

        console.log(this.state.userList);

    };

    handleAddUser () {
        this.setState({ 
            ...this.setState,
            userList: [...this.state.userList, {field_name: "", field_username:"", field_date:""}]
        })

    }
    
    render(){
        
        const handleSubmit = () => {
        };

        const addUsers = (user, index) => {

            let userElementArr = [];


            for (let i = 0; i <= 2; i++){
                userElementArr.push(
                    <label>
                        {fields[i]["label"]}
                        <input
                            type={fields[i]["type"]}
                            placeholder={fields[i]["name"]}
                            name={fields[i]["name"]}
                            value={user.name}
                            onChange={(e)=> this.handleListChange(e, index)}
                        />
                    </label>
                )
            }
            return userElementArr;            
        }
        
        return (

            <>
                <div>
                    <h1>Webtrends Optimize Software Engineer exam</h1>

                    <form onSubmit={handleSubmit}>
                        {this.state.userList.map((user, index) => (
                            <div key={index} className='userSection'>
                                {addUsers(user, index)}

                            </div>

                        ))}
                    </form>
                    <button onClick={() => this.handleAddUser()}>Add User</button>
                </div>
                
                <New text={"hello"}/>
            </>
        );
    }
}

export default App;