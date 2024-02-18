import { StyledButton } from "./LoadMoreButton.Styled";

const LoadMoreButton = ({ onButtonClick }) => {
    return (
      <StyledButton type="button" onClick={onButtonClick}>
        Load more
      </StyledButton>
    );
  };
  
  export default LoadMoreButton;