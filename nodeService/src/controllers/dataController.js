const fetch = require("node-fetch");

exports.getData = async (req, res) => {
  try {
    const response = await fetch(process.env.PHP_SERVICE_URL, {
      method: "GET",
      headers: {
        "Authorization": req.header("Authorization"),
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch data from PHP service");
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to fetch data from PHP service" });
  }
};
