const getUsers = (req, res, next) => 
{
  const dbInst = req.app.get('db');
  dbInst.get_users()
    .then(response => res.status(200).send(response))
    .catch(err => console.log(`Error in get_users() - ${err}`));
}

const addUser = (req, res, next) =>
{
  const dbInst = req.app.get('db');
  const { uname, pword } = req.body;
  let { img } = req.body;
  img ? null : img = 'https://explainxkcd.com/wiki/images/6/6d/BlackHat_head.png';

  dbInst.add_user([uname, pword, img])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(`Error in add_user() - ${err}`));
}

const loginUser = (req, res, next) => 
{
  const dbInst = req.app.get('db');
  const { uname, pword } = req.body;

  dbInst.login_user([uname, pword])
    .then(response => {
      // Set the user ID to the session
      req.session.userID = response[0].id;
      req.session.userName = response[0].username;
      req.session.userPic = response[0].profile_pic;

      res.status(200).json(response);})
    .catch(err => console.log(`Error in login_user() - ${err}`));
}

const logoutUser = (req, res, next) => 
{
  req.session.destroy();
}

const addPost = (req, res, next) => 
{
  const dbInst = req.app.get('db');
  const { userID } = req.session;
  const { postTitle, postImage, postBody } = req.body;

  dbInst.add_post([userID, postTitle, postImage, postBody])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(`Error in add_post() - ${err}`));
}

const getPostById = (req, res, next) => 
{
  const dbInst = req.app.get('db');
  const id = parseInt(req.query.id);
  dbInst.get_post_by_id(id)
    .then(response => res.status(200).json(response))
    .catch(err => console.log(`Error in get_post_by_id() - ${err}`));
}

const getPostsByUser = (req, res, next) => 
{
  const dbInst = req.app.get('db');
  dbInst.get_posts_by_user_id(parseInt(req.params.userId))
    .then(response => res.status(200).send(response))
    .catch(err => console.log(`Error in get_posts_by_user_id() - ${err}`));
}

const getUserInfo = (req, res, next) => 
{
  const dbInst = req.app.get('db');
  // console.log('req', req.session);
  res.status(200).json({
    userID:req.session.userID,
    userName:req.session.userName,
    userPic:req.session.userPic
  })
}

module.exports =
{
  getUsers,
  addUser,
  loginUser,
  logoutUser,
  addPost,
  getPostById,
  getPostsByUser,
  getUserInfo
};