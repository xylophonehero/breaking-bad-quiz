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
            q.Index("get_question_by_char_id"), parseInt(req.query.id)
          )
        ),
        ref => q.Get(ref)
      )
    )
    res.status(200).json(data[0].data)
  } catch (error)
  {
    res.status(500).json({ error: error.message })
  }
}