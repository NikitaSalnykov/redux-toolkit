import React, { useState } from 'react';
import { GridItem, GridList } from './Grid.styled';
import { Todo } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors';
import { removeTodo } from 'redux/todosSlice';
import { ModalEditTodo } from 'components/ModalEditTodo/ModalEditTodo';

export const Grid = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [todoId, settodoId] = useState('');
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const deleteTodo = id => {
    dispatch(removeTodo(id));
  };

  const handleGetId = id => {
    settodoId(id);
  };

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <GridList>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                id={todo.id}
                text={todo.text}
                counter={index + 1}
                onClick={deleteTodo}
                handleModal={toggleModal}
                handleGetId={handleGetId}
              />
            </GridItem>
          ))}
      </GridList>
      {modalIsOpen && (
        <ModalEditTodo handleModal={toggleModal} todoId={todoId} />
      )}
    </>
  );
};
