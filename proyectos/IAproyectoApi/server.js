import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// Esto nos permite obtener la ruta absoluta de index.html
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos (como tu index.html)
app.use(express.static(__dirname));

const HF_TOKEN = "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";

app.post("/generate", async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) return res.status(400).json({ error: "No prompt provided" });

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt, options: { wait_for_model: true } }),
      }
    );
    const data = await response.json();
    console.log(data);
    if (data && data[0] && data[0].generated_image) {
      res.json({ image: data[0].generated_image });
    } else {
      res.status(500).json({ error: "No image returned" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating image" });
  }
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));