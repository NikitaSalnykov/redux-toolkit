import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';

export const Todo = ({
  text,
  counter,
  onClick,
  id,
  handleModal,
  handleGetId,
}) => {
  const handleClickBtn = () => {
    handleGetId(id);
    handleModal();
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => onClick(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <button onClick={handleClickBtn}>Edit</button>
      </TodoWrapper>
    </>
  );
};
