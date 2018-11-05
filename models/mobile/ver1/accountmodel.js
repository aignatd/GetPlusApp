/**
 * Created by ignat on 03-Jan-17.
 */

var strQuery;
var data;

module.exports.AccountLogin =
  function (req, callback)
  {
    req.sql("select * from Product where id = @id for json path, without_array_wrapper")
       .param('id', req.params.id, TYPES.Int)
       .into(res, '{}');
  };

