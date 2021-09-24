import { Component } from "react";

import './ToDo.css';

class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: [
                { id: 1, Title: 'JS Batch', body: "React js" },
                { id: 2, Title: 'Philomaths', body: "My Team" },
            ],
            update:0

        }
    }

    handler1 = (event) => {
        let {name,value}=event.target;
        this.setState({[name]:value})
    };
    
    
    addTask = () => {
        let { arr, Title, body ,id} = this.state;
        if(document.getElementById("title").value=='' || document.getElementById("desc").value==''){
            alert("Please fill out fields");
        }
        else{
            this.setState({arr:[...arr,{Title:Title,body:body,id:id+1}]})
        }
    }


    deleteTask = (index) => {
        console.log("delete");
        var bool = window.confirm("Do You really want to delele this?")
        if (bool == true) {
            let { arr } = this.state;
            arr.splice(index, 1)
            this.setState({
                arr: arr
            })
            console.log(index);
        }
        else {
            return
        }
    }

    updateTask = (index) => {
        let { arr ,Title,body,update} = this.state;
       this.setState({update:index})
       console.log(this.state)
       document.getElementById("title").value=arr[index].Title
       document.getElementById("desc").value=arr[index].body
    }

    finalUpdate=(position)=>{
        if(window.confirm("Are sure you want to update this?")){
            console.log("final update")
            let { arr ,Title,body} = this.state;
            arr[position].Title= document.getElementById("title").value;
            arr[position].body= document.getElementById("desc").value;
            console.log(arr[position].Title)
            this.setState({Title:Title,body:body})
            document.getElementById("title").value=" ";
            document.getElementById("desc").value=" "
        }
    }
    render() {
        return <>
            <div className="Container">
                <h1>To Do List</h1>
                <label> Title: </label><input onChange={this.handler1} name="Title" id="title" cols="30" rows="3" value={this.state.arr.Title}></input><br></br>
                <label className="label">Description :</label> <textarea  onChange={this.handler1} name="" id="desc" name="body" cols="30" rows="3" o></textarea><br></br>
                <div className="flex">
                <button className="btn" onClick={this.addTask}>Add task</button><br></br>
                <button className="btn" onClick={() => this.finalUpdate(this.state.update)}>Final Update</button><br></br>
                </div>
                <div className="scroll">
                <table className="table" border="3">
                    <thead>
                        <th>Sr No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </thead>

                    <tbody>
                        {this.state.arr.map((task, index) => {
                           { console.log(task);}
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{task.Title}</td>
                                <td>{task.body}</td>
                                <td><button className="btn1" onClick={() => this.updateTask(index)}>Update</button><button className="btn1" onClick={() => this.deleteTask(index)}>Delete</button></td>
                            </tr>

                        })}
                    </tbody>

                </table>
                </div>
               
            </div>
        </>
    }

}
export default ToDo;


