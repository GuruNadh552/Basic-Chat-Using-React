import { Button, Table, TableBody, TableCell } from '@material-ui/core'
import React from 'react'
import './Todo.css'
import db from './firebase'
function Todo(props) {
    return (
        <div>
            <center>
            <Table className="tabbble">
                <TableBody>
                    <TableCell>{props.text.todo} </TableCell>
                    <TableCell><Button onClick={
                        event => db.collection("todoss").doc(props.text.id).delete() 
                        }  color="secondary"> Delete Me</Button></TableCell>
                </TableBody>
            </Table>
            </center>
        </div>
    )
}

export default Todo
