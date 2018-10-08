const getAll = (req, res, next) => 
{
  const dbInst = req.app.get('db');
  dbInst.get_photos()
    .then(response => res.status(200).send(response))
    .catch(err => console.log(`Error in get_photos() - ${err}`));
}

module.exports =
{
  getAll
};