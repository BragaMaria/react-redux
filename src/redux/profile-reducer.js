const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
  posts: [
    {id: 1, text: 'hello', likesCount: 45},
    {id: 2, text: 'good', likesCount: 47},
    {id: 3, text: 'word', likesCount: 40},
  ],
  newPostText: ''
}


export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.newPostText,
        likesCount: 0
      };

      state.posts.push(newPost);
      state.newPostText = '';
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state
    default:
      return state
  }



}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});