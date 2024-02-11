import { Component } from 'react';
import {
  ButtonBox,
  CardBox,
  CardText,
  CardTitle,
  DeleteButton,
  DeleteIcon,
  OpenModalButton,
  OpenModalIcon,
  UpdateButton,
  UpdateIcon,
} from './BeerCard.Styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class BeerCard extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    if (!this.state.isModalOpen) {
      this.setState({ isModalOpen: true });
    }
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      beerItem: { id, beer, place, date, brewery, style },
      onDeleteBeerItem,
    } = this.props;

    return (
      <CardBox $beerstyle={style}>
        <CardTitle>{beer}</CardTitle>

        <ButtonBox>
          <UpdateButton>
            <UpdateIcon />
          </UpdateButton>
          <OpenModalButton onClick={this.openModal}>
            <OpenModalIcon />
          </OpenModalButton>
          <DeleteButton onClick={() => onDeleteBeerItem(id)}>
            <DeleteIcon />
          </DeleteButton>
        </ButtonBox>

        <div>
          <CardText>Place: {place}</CardText>
          <CardText>Date: {date}</CardText>
          <CardText>Brewery: {brewery}</CardText>
          <CardText>Style: {style}</CardText>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="BeerCardModal"
        >
          <p>I am a modal</p>
          <button onClick={this.closeModal}>Close modal</button>
        </Modal>
      </CardBox>
    );
  }
}

export default BeerCard;
