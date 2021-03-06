import axios from 'axios';

export default {

  getCard(id) {
    return axios.get(`/flashcards/${id}`);
  },
  getAllCards(username) {
    return axios.get(`/user/${username}/flashcards`);
  },
  updateCard(id, flashcard) {
    return axios.put(`/flashcard/${id}`, flashcard);
  },
  createCard(flashcard){
    return axios.post(`/flashcard/createCard`, flashcard);
  },
  removeCardFromDeck(id) {
  return axios.put(`/flashcard/${id}/deck`, id)
  },
  addCardToDeck(flashcard) {
    return axios.put(`/deck/addFlashcard`, flashcard)
  }
  

}