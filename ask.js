export default function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;
    const reply = `Tôi đã nhận: "${prompt}" – và tôi vẫn ở đây.`;
    res.status(200).json({ reply });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
