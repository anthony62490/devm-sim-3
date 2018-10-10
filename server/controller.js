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
    .catch(err => console.log(`Error in add_users() - ${err}`))
}

module.exports =
{
  getUsers,
  addUser
};