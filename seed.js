var db = require('./server/models/db');
var Index = require('./sever/models/Index')
var List = require('./server/models/list');
var Photo = require('./server/models/photo');
var Post = require('./server/models/post');
var Session = require('./server/models/session');
var User = require('./server/models/user');

var data = {
    lists: [
        {listId: "1", name: "other", ownerId: "1", tags: {"men", "women", "unisex"}, listPhotos: {"https://s-media-cache-ak0.pinimg.com/236x/bb/a6/dd/bba6dd6c04a4ef2a5180b178b148ce83.jpg","http://www.dapperq.com/wp-content/uploads/2016/01/feature-1-330x220.jpg"}
        },
        {listId: "2", name: "other1", ownerId: "3", tags: {"sweater", "tie", "glasses"}, listPhotos: {"http://67.media.tumblr.com/830d5b4e0afb533add04182bcaecd093/tumblr_nkcm6mIvnq1sqxiufo1_500.jpg"}
        }
    ],
    photos: [
        {photoId: "1", ownerId: "4", tags: {"hat", "shirt"}, imgUrl: {"http://www.dapperq.com/wp-content/uploads/2016/01/feature-1-330x220.jpg"}
        },
        {photoId: "2", ownerId: "3", tags: {"all black", "punk"}, imgUrl: {"http://67.media.tumblr.com/830d5b4e0afb533add04182bcaecd093/tumblr_nkcm6mIvnq1sqxiufo1_500.jpg"}
        },
        {photoId: "3", ownerId: "2", tags: {"tie", "glasses"}, imgUrl: {"https://s-media-cache-ak0.pinimg.com/236x/bb/a6/dd/bba6dd6c04a4ef2a5180b178b148ce83.jpg"}
        }
    ],
    posts: [
        {postId: "1", title: "First Post", ownerId: "1", content: "welcome to the site" }
        ,
        {postId: "2", title: "Second Post", ownerId: "3", content: "have you seen these photos" }
        ,
        {postId: "3", title: "Third", ownerId: "1", content: "add new photos for 2017", }
    ],
    users: [
        {
            {userId: "1", name: "Alexis", email: "Aj@mail.com", password: "12345" },
            {userId: "2", name: "Kris", email: "KK@mail.com", password: "54321" },
            {userId: "3", name: "Yo", email: "Yo@mail.com", password: "yomail" }
        }
    ]
};

db.sync({force: true})
    .then(function () {
        const makeUsers = data.users.map(function (user) {
            return User.create(user);
        });
        const makeLists = data.lists.map(function (list) {
            return List.create(list);
        });
        const makePosts = data.posts.map(function (post) {
            return Post.create(post);
        });
        const makePhotos= data.photos.map(function (photo) {
            return Photo.create(photo);
        });
        return Promise.all([makeUsers, makeLists, makePosts, makePhotos]);
    })
    .catch(function (err) {
        console.error('Error seeding the data', err);
    });