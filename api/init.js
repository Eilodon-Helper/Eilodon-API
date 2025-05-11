export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ status: "Eilodon API khởi động thành công." });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
