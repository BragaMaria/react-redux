import {addPost, deletePost, profileReducer} from "./profile-reducer";
let state = {
  posts: [
    {id: 1, text: 'hello', likesCount: 45},
    {id: 2, text: 'good', likesCount: 47},
    {id: 3, text: 'word', likesCount: 40},
  ]
}
it('length of posts should be incremented ', () =>{
  let action = addPost('test text')
  let newState = profileReducer(state,action)

  expect (newState.posts.length).toBe(4)
});

it('text of new post should be `test text` ', () =>{
  let action = addPost('test text')
  let newState = profileReducer(state,action)

  expect (newState.posts[3].text).toBe('test text')
});
it('after deleting length of posts should be decrement', () =>{
  let action = deletePost(1)
  let newState = profileReducer(state,action)

  expect (newState.posts.length).toBe(2)
});

it('after deleting length of posts should be decrement if id incorrect', () =>{
  let action = deletePost(1000)
  let newState = profileReducer(state,action)

  expect (newState.posts.length).toBe(3)
});

