<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Teste Google Sheets CORS</title></head>
<body>
  <h2>Teste de Envio para Google Sheets</h2>
  <button onclick="adicionarLinha()">Enviar Nova Linha</button>
  <script>
    async function adicionarLinha() {
      const novaLinha = ["Teste Assistente", new Date().toLocaleString()];
      const payload = "dados=" + encodeURIComponent(JSON.stringify(novaLinha));

      try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbxAMPLE1234567/exec", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: payload
        });

        const texto = await res.text();
        alert("Resposta do Script: " + texto);
      } catch (err) {
        alert("Falha: " + err);
        console.error(err);
      }
    }
  </script>
</body>
  <?php echo "Teste"; ?>
</html>

