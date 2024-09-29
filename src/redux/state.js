const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Антон",
          avaPath: 'https://sc04.alicdn.com/kf/Hce0ba4ccac4741e3af118c86828ebc2dD/258321692/Hce0ba4ccac4741e3af118c86828ebc2dD.jpg'
        },
        {id: 2, name: "Сергей", avaPath: 'https://cbgd.ask.fm/wallpapers2/089/859/256/576/original/file.jpg'},
        {
          id: 3,
          name: "Илья",
          avaPath: 'https://sun1-84.userapi.com/s/v1/ig2/8o3pvxQmcqd1BoOOVDZOWums6912NG-o78wQgkD_Qpdwr_2CexQ3JG5FOLKk16I3JJYu1J4c3i_I9EIPyUB0Mt19.jpg?size=1701x1701&quality=95&crop=165,0,1701,1701&ava=1'
        },
        {id: 4, name: "Роман", avaPath: 'https://i.pinimg.com/originals/5a/3f/4f/5a3f4f6d1be3b1c4e3659e350a1a4a7b.jpg'},
        {
          id: 5,
          name: "Павел",
          avaPath: 'https://steamuserimages-a.akamaihd.net/ugc/782989521799828488/99CC5CFF94186C28A21C7E81D145E9C6550DCC14/?imw=512&amp;imh=499&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'
        },
        {id: 6, name: "Михаил", avaPath: 'https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-46.jpg'},
        {
          id: 7,
          name: "Николай",
          avaPath: 'https://i.pinimg.com/736x/57/0c/b7/570cb725a986b11085bebfac14317406--graphic-design-posters-skull-art.jpg'
        }
      ],
      messages: [
        {id: 1, message: "Привет! Как дела?"},
        {id: 2, message: "Здарова, у меня все хорошо!"},
        {id: 3, message: "Чем сейчас занимаешься?"},
        {id: 4, message: "Программирую. Пишу код на React"},
        {id: 5, message: "Круто! У тебя получается?"},
        {id: 6, message: "Спасибо, да что то выходит)"},
        {id: 7, message: "Молодец, скинь результат."}
      ],
      newMessageText: ''
    },
    profilePage: {
      posts: [
        {id: 1, text: 'hello', likesCount: 45},
        {id: 2, text: 'good', likesCount: 47},
        {id: 3, text: 'word', likesCount: 40},
      ],
      newPostText: ''
    },
    sideBar: {
      friends: [
        {
          id: 1,
          avaPath: 'https://steamuserimages-a.akamaihd.net/ugc/2045245270074876117/E9D4584423782EE94614B15674CEAE4221A312B9/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
          name: 'Миша'
        },
        {
          id: 2,
          avaPath: 'https://cs2c9f.4pda.ws/18211540.png',
          name: 'Егор'
        },
        {
          id: 3,
          avaPath: 'https://steamuserimages-a.akamaihd.net/ugc/787490852837681446/0A92D34BC231337330D67B370FA7D258C3D391EF/?imw=512&amp;imh=672&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
          name: 'Сёма'
        }
      ]
    }

  },
  _callSubscriber() {
    console.log("State changed")
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        text: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this.getState());
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this.getState())
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 8, message: this._state.dialogsPage.newMessageText
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = ''
      this._callSubscriber(this.getState())
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this.getState())
    }
  }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

window.state = store._state