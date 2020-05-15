const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  friendsData: [
    { id: 1, name: 'Bearded Wonder' },
    { id: 2, name: 'Neko Bebop' },
    { id: 3, name: 'Nick Grissom' },
    { id: 4, name: 'Sarah Diamond' },
    { id: 5, name: 'Matt Parker' },
  ],

  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'How are you?' },
  ],
  newMessageBody: 'newMsg',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
        newMessageBody: '',
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.newBody};
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newBody: text,
});
export default messagesReducer;
