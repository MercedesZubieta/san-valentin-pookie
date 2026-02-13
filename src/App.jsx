import { useState } from "react";
import { motion } from "framer-motion";

export default function OnePieceValentine() {
  const [accepted, setAccepted] = useState(false);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 120 - 60);
    const randomY = Math.floor(Math.random() * 120 - 60);
    setNoOffset({ x: randomX, y: randomY });
  };

  const hearts = Array.from({ length: 35 });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(to bottom, #87CEEB, #6dd5fa, #1e81b0)",
        fontFamily: "Playfair Display",
      }}
    >
      {/* Animated waves */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          width: "250%",
          height: "220px",
          background: "rgba(0,119,190,0.5)",
          borderRadius: "40%",
        }}
        animate={{ x: [0, -600, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
      />

      <motion.div
        style={{
          position: "absolute",
          bottom: "30px",
          width: "250%",
          height: "180px",
          background: "rgba(0,150,199,0.5)",
          borderRadius: "40%",
        }}
        animate={{ x: [-600, 0, -600] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      />

      {/* Hearts */}
      {accepted && (
        <div  style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {hearts.map((_, i) => (
            <motion.div
              key={i}
              initial={{
                y: -20,
                x: Math.random() * window.innerWidth,
                opacity: 0.9,
                scale: 0.8 + Math.random(),
                position: "absolute",
              }}
              animate={{ y: window.innerHeight + 40 }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      {/* BEFORE ACCEPT */}
      {!accepted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          {/* Floating pirate hat */}
          <motion.div
            style={{ fontSize: "70px", marginBottom: "20px" }}
            animate={{ y: [0, -18, 0], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
             <img class="w-sm" src="https://static.vecteezy.com/system/resources/thumbnails/021/096/088/small/straw-hat-head-dress-accessory-png.png" alt="" />
          </motion.div>

          {/* Card */}
          <div  class="bg-content"
            style={{
              width: "380px",
              textAlign: "center",
              padding: "24px",
              borderRadius: "20px",
            }}
          >
            <h1> ¡Hey, Nakama!</h1>
            <div class="recorte">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/059/693/102/small/dividing-art-line-free-png.png" alt="" />

            </div>
            <p>
              Desde que llegaste, todo se siente más divertido… como si la vida hubiera cambiado de arco sin avisar.
               <br /> Estoy armando mi tripulación y, qué coincidencia, ya tengo capitán en mente.
              
            </p>

            <p style={{ fontWeight: "bold" }}>
              Mi Pookie, ¿aceptas oficialmente ser mi San Valentín o te hago firmar contrato pirata? <br /> (El Gear 5 está en espera 👀❤️)
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                marginTop: "20px",
                position: "relative",
              }}
            >
              <button
                onClick={() => setAccepted(true)}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#ff4d6d",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                ¡Sí! 💕
              </button>

              <motion.button
                animate={{ x: noOffset.x, y: noOffset.y }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={moveNoButton}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#999",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                No 😢
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* AFTER ACCEPT */}
      {accepted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: "center", zIndex: 3, padding: "20px" }}
        >
          <h1>❤️ ¡Sabía que dirías que sí! ❤️</h1>

          <p style={{ maxWidth: "500px" }}>
            Gracias por ser mi persona favorita… <br /> Ahora
            oficialmente mi San Valentín. Y eso me gusta bastante ❤️ <br />
            
            <strong>Te quiero muchísimo, Jaimito.</strong>
          </p>

          {/* Chest */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
            style={{ fontSize: "80px", marginTop: "20px" }}
          >
            <motion.div
              animate={{ rotateX: [0, 40, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <img src="https://bordadosrecio.com/cdn/shop/files/devilfruit.png?v=1713928315" alt="" width="160" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ fontSize: "40px" }}
            >
              💖✨💎
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}