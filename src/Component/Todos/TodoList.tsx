import React, { FC } from "react";
import { Container, Button, Table } from "react-bootstrap";

import "../../App.css";

interface Props {
    todo: any

}


const TodoList = ({ todo }: Props) => {
    return (
        <>

            <Container fluid className='containers'>
                <div className='cards'>
                    <Table striped bordered hover  >
                        <thead>

                            <tr>
                                <th>#</th>
                                <th>Task</th>
                                <th>Time(days)</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                todo?.map((todo: any, index: any) => (
                                    <tr>
                                        <td>{todo.id} </td>
                                        <td>{todo.task}</td>
                                        <td>{todo.time}</td>
                                        <td><Button className="btn btn-sm btn-success">click</Button></td>

                                    </tr>
                                )) || <p>NO Task List Found</p>
                            }


                        </tbody>
                    </Table>
                </div>

            </Container>
        </>
    )
}

export default TodoList;