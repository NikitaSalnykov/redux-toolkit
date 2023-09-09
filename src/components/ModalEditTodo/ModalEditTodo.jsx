import { useEffect, useState } from 'react';

import { ModalContainer, Overlay } from './Modal.style';
import { useDispatch } from 'react-redux';
import { editTodo } from 'redux/todosSlice';

export const ModalEditTodo = ({ handleModal, todoId }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    const handleCloseModal = e => {
      if (e.key === 'Escape') {
        handleModal();
      }
    };
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [handleModal]);

  const handleSubmit = () => {
    dispatch(editTodo({ id: todoId, text: value }));
    handleModal();
  };

  return (
    <Overlay>
      <ModalContainer>
        <p>Edit todo</p>
        <form
          style={{ background: 'aliceblue', padding: '30px' }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="edit"></label>
          <input
            type="text"
            name="edit"
            id="edit"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </ModalContainer>
    </Overlay>
  );
};
