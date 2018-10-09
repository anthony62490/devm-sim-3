const getUsers = (req, res, next) => 
{
  const dbInst = req.app.get('db');
  dbInst.get_users()
    .then(response => res.status(200).send(response))
    .catch(err => console.log(`Error in get_users() - ${err}`));
}

module.exports =
{
  getUsers
};