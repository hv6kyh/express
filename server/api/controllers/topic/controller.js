import db from '../../services/db.service';

export class Controller {
  searchAll(req, res) {
    db.query(`SELECT * FROM topic`, (error, topic) => {
      if (error) {
        throw error;
      }
      // console.log(topic);      
      res.send(topic);
    })
  }

  searchById(req, res) {
    var id = req.params.id;
    // console.log(id);
    
    db.query(`SELECT * FROM topic WHERE topic.id = ?`, [id], (error, topic) => {
      if (error) {
        throw error;
      }
      // console.log(topic);
      
      res.send(topic);
    })

  }

  deleteById(req, res) {
    var id = req.params.id;
    // console.log(id);
    
    db.query(`DELETE FROM topic WHERE topic.id = ?`, [id], (error, topic) => {
      if (error) {
        throw error;
      }
      
      res.send('ok');
    })

  }

}
export default new Controller();
