const faunadb = require('faunadb')

const secret = process.env.FAUNA_SECRET
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = async (req, res) =>
{
  try
  {
    const { data } = await client.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index("get_question_by_char_id"), req.body.id
          )
        ),
        ref => q.Get(ref)
      )
    )
    if (data.length > 0)
    {
      //update entry if found
      const currentData = data[0]
      const postData = {
        correct: currentData.data.correct + (req.body.answer ? 1 : 0),
        incorrect: currentData.data.incorrect + (req.body.answer ? 0 : 1)
      }

      const updatedData = await client.query(
        q.Update(currentData.ref, { data: postData })
      )
      res.status(200).json(updatedData)
    } else
    {
      //Create new entry if not found
      const createdData = await client.query(
        q.Create(
          q.Collection('question'),
          {
            data: {
              char_id: req.body.id,
              correct: req.body.answer ? 1 : 0,
              incorrect: req.body.answer ? 0 : 1
            }
          }
        )
      )
      res.status(200).json(createdData)
    }
  } catch (error)
  {
    res.status(500).json({ error: error.message })
  }
}