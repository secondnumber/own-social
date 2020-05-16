const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    {
      id: 1,
      author: 'Marina Valentine',
      time: '29 minutes ago',
      message:
        'Hi to all! Remembercomments that today I\'ll be livestreaming along with @NekoBebop the new character of the brand new Xenowatch patch "Anya Darkness". See you there!',
      reactions: 15,
      comments: 1,
      shares: 1,
    },
    {
      id: 2,
      author: 'Marina Valentine',
      time: '17 hours ago',
      message: 'This is a dream come true, thanks to all for the support!!!',
      reactions: 21,
      comments: 4,
      shares: 3,
    },
    {
      id: 3,
      author: 'Marina Valentine',
      time: '2 days ago',
      message:
        "Here's a sneak peek of the official box cover art for Machine Wasteland II! Remember that I'll be having a stream showing a preview tommorrow at 9PM PCT!",
      reactions: 9,
      comments: 0,
      shares: 0,
    },
  ],
  newPostText: 'new',
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let date = new Date();
      let dateString = date.toLocaleDateString();
      let newPost = {
        id: 4,
        author: 'Marina Valentine',
        time: dateString,
        message: state.newPostText,
        reactions: 0,
        comments: 0,
        shares: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default timelineReducer;